import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    'API-KEY': '1ba8bae5-447f-47e5-8830-742997f73cf8'
})

export const usersAPI = {
    getUsers(page, perPage){
        return instance.get(`users?page=${page}&count=${perPage}`, {
            withCredentials: true
        })
        .then(response => response.data)
    }
}