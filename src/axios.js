import axios from "axios"

// npm install axios

const instance = axios.create({
    baseURL: "..." //API URL backend
});

export default instance;
