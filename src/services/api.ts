import axios from "axios";

const api = axios.create({
  baseURL: "https://api.movidesk.com/public/v1"
});

export default api;
