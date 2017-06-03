import axios from 'axios'

const API_URL = 'http://192.168.1.101:1323'
const http = axios.create({
  baseURL: API_URL
});

// Todos load data from server
const get = (url, cb) => {
  http.get(url)
    .then((res) => res.data)
    .then((data) => cb(data))
    .catch((err) => {
      Promise.reject(err)
      throw err
    })
}

const post = (url, note, cb) => {
  http.post(url, { name: note })
    .then((res) => {
      if (res.data) {
        console.log('created success')
        cb()
      }
    })
    .catch((err) => {
      throw err
    })
}

const del = (url, id, cb) => {
  http.delete(`${url}/${id}`)
    .then((res) => {
      if (res.data) {
        console.log('deleted success')
        cb()
      }
    })
    .catch((err) => {
      throw err
    })
}

export default {
  get,
  post,
  del
}