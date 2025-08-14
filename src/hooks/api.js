import axios from "axios";
import { toast } from "react-toastify";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

apiClient.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      toast.error("Connection error");
    } else {
      toast.error(error.response.data?.message || "An error occurred");
    }
    return Promise.reject(error);
  }
);

export default apiClient;
