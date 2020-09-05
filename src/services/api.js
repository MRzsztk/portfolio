import axios from "axios";

const api = axios.create({
    baseURL: 'https://mrzsztk-server-efehvbyyl.vercel.app'
});

export default api;