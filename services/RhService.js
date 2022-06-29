import http from './AxiosContext'

const getAll = ()=>{
    return http.get("/users/")
}
const create = (data)=>{
    return http.post("/users/create" , data)
}
const updateRh = (id , data)=>{
    return http.put(`/users/rh/${id}`, data)
}
const remove = (id)=>{
    return http.delete(`/users/rh/${id}`)
}
const getById = (id)=>{
    return http.get(`/users/${id}`)
}

export default {getAll , create , updateRh , remove , getById}