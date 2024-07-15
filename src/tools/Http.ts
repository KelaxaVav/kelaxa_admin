import axios from "axios";

const Http = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        // 'Content-type': 'application/json',
        // 'Accept': 'application/json',
    }
})


Http.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    // const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcl9pZCI6ImY2ZWI4MjJjLTFjNzEtNGZiMy04NWRkLTBiNjc4ZmVjYTdiZSIsInJvbGVfaWQiOiI2Yzg3MTI2NS03YThjLTQ3N2UtOGYwOS1kNTkwMzVhZGFiMGUiLCJkZXZpY2VfaWQiOiIzNzJkYzY5MC0wZDQ0LTQ0NzAtYTYzYy1lZTdhYjE4YTBlMDYiLCJpYXQiOjE3MTc0MTE2MDF9.fZ5QzdzA_x4qDHm48DVu_3ErS6jpIvq-78ScfOeuY80`;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, (err) => Promise.reject(err));

Http.interceptors.response.use((response): any => {
    // console.log(response);
    return response;
}, (error) => {
    // console.log(error);
    return Promise.reject(error.response.data);
});

export default Http