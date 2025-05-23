import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

interface ErrorResponse {
  success: false;
  message: string;
  data: null;
  meta: null;
}

export const axiosInstance = axios.create({
  baseURL: (import.meta.env.VITE_WORKFLOW_ENGINE_URL as string) || "http://localhost:3000",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ErrorResponse>) => {
    const url = error?.config?.url;
    const isAuthRequest = url === "/auth/signup" || url === "auth/login";

    if (error.response?.status === 401 && !isAuthRequest) {
      localStorage.removeItem("token");
      window.location.href = "/login";
      toast.error("Session expired. Please log in again.");
    } else {
      toast.error(error.response?.data?.message || "An error occurred");
    }

    return Promise.reject(error);
  },
);
