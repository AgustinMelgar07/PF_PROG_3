import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

console.log('BASE_URL', BASE_URL);

export const apiURL = axios.create({
    baseURL: BASE_URL
});
