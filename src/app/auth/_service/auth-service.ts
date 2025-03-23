import { server } from "@/app/_api/server";
import { AxiosError } from "axios";
type UserRegisterType = {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
  confirmPolicy?: boolean;
};

type ResponseLogin = {
  token: string;
  message: string;
  user: {
    email: string;
    name: string;
  };
};

type ResponseRegister = {
  message: string;
  id: string;
  name: string;
  email: string;
};

export const userRegister = async (payload: UserRegisterType) => {
  delete payload.confirmPolicy;
  const data = await server().post<ResponseRegister>("/auth/register", payload);
  return data;
};

type LoginType = {
  email: string;
  password: string;
};

export const userLogin = async (payload: LoginType) => {
  try {
    const data = await server().post<ResponseLogin>("/auth/login", payload);
    return data;
  } catch (error) {
    const err = error as AxiosError<{
      message: string;
    }>;
    throw new Error(err.response?.data.message || "Erro ao fazer login");
  }
};

export const loginByGoogle = (payload: { token: string }) => {
  return server().post("/auth/google", payload);
};
