import { V1AuthLoginRequest } from "types/models/v1-auth-login-request";
import http from "@utils/request";
import { V1AuthLoginResponse } from "types/models/v1-auth-login-response";

export const userLogin = (data: V1AuthLoginRequest) => {
  return http.request<V1AuthLoginResponse>({
    url: '/auth/login',
    method: 'post',
    data
  })
}