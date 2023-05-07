import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api/v1",
//   timeout: 5000,
  responseType: "json",
});
axiosClient.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("token")
    if (token!==null && token !== undefined ) {
        config.headers.Authorization = token;
    }
  return config;
});
axios.interceptors.response.use(
  (response) => {
    if (response && response.data !== undefined) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);
export default axiosClient;
