import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bewakoof-clone-backend.herokuapp.com',
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
    }
});

export default instance;