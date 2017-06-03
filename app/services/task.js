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

const posts = ({name}) => {
  //http.post('/tasks', name)
}

export default {
  get
}