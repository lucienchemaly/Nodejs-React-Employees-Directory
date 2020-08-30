import axios from 'axios'; 
const instance = axios.create({
    //baseURL: process.env.API_URL
    baseURL: 'http://localhost:3001',
     
});

instance.interceptors.request.use(request => { 
    return request
})

instance.interceptors.response.use(response => { 
    return response
})

export default instance;

