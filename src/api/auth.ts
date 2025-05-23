import { axiosInstance } from ".";
import { GenericResponse, AuthData } from "@/types/response";

export const registerUser = async (payload: { name: string; email: string; password: string }) => {
  const { data }: GenericResponse = await axiosInstance.post("/auth/signup", payload);
  return { message: data?.message };
};

export const loginUser = async (payload: { email: string; password: string }) => {
  const { data }: GenericResponse<AuthData> = await axiosInstance.post("auth/login", payload);
  return { token: data?.data?.token, message: data?.message };
};
