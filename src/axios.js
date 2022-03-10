import axios from "axios"

const instance = axios.create({
    //API URL backend
    baseURL: "http://localhost:5001/clone-2d1fc/us-central1/api"
});

export default instance;
