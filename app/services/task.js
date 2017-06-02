import axios from 'axios'

const API_URL = 'http://localhost'
const http = axios.create({
  baseURL: API_URL,
  proxy: {
    host: '127.0.0.1',
    port: 1323,
  },
});

// Todos load data from server
const get = () => {
  http.get('/tasks')
    .then((res) => console.log(res.statusText))
    .catch((err) => { throw new err })
}

export default {
  get
}