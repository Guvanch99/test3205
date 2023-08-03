import axios from 'axios'

export const baseURL = process.env.REACT_APP_HOST
export const apiClient = axios.create({
  baseURL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  method: 'get',
  timeout: 10000000
})
