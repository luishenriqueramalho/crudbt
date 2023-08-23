import axios from "axios";

const api = axios.create({
  baseURL: "https://cruddeploy-api.onrender.com",
});

export default api;
