import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-app-backend-omega-cyan.vercel.app/",
});
