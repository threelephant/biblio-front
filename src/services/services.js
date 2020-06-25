import axios from 'axios'
const baseUrl = 'http://46.180.235.39:8081/api/book'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => {
    return response.data
  })
}

const getOne = id => {
  const request = axios.get(`${baseUrl}/${id}`)
  return request.then(response => {
    return response.data
  })
}
  
const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const deleteNote = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}
  
const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}
  
export default { getAll, getOne, create, update, deleteNote }