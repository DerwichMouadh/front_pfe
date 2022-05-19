import http from './AxiosContext'

const getAll = ()=>{
    return http.get("/rhs/")
}
const create = (data)=>{
    return http.post("/rhs/register" , data)
}
const updateRh = (id , data)=>{
    return http.put(`/rhs/rh/${id}`, data)
}
const remove = (id)=>{
    return http.delete(`/rhs/rh/${id}`)
}
const getById = (id)=>{
    return http.get(`/rhs/${id}`)
}

export default {getAll , create , updateRh , remove , getById}