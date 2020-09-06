import axios from "axios";

const api = axios.create({
    baseURL: 'https://whispering-hamlet-55933.herokuapp.com/'
});

export default api;