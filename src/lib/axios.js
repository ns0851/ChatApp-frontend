import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-app-backend-correct.vercel.app/",
  withCredentials: true,
});
