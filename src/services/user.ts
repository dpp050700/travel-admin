import http from "@utils/request";
import { V1UserFindRsp } from "types/models/v1-user-find-rsp";

export const getUserList = (params?: any) => {
  return http.request<V1UserFindRsp>({
    url: "/user/users",
    method: "get",
    params,
  });
};
