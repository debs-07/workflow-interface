import { AxiosResponse } from "axios";

interface PaginationMeta {
  page: number;
  limit: number;
  totalData: number;
  totalPages: number;
}

export interface GenericResponse<T = null>
  extends AxiosResponse<{
    success: boolean;
    message: string;
    data: T;
    meta?: PaginationMeta;
  }> {}
