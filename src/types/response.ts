import { AxiosResponse } from "axios";

interface PaginationMeta {
  page: number;
  limit: number;
  totalData: number;
  totalPages: number;
}

export type GenericResponse<T = null> = AxiosResponse<{
  success: boolean;
  message: string;
  data: T;
  meta?: PaginationMeta;
}>;

export interface AuthData {
  token: string;
}
