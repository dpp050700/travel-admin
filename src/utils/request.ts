import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { message } from "antd";
interface IRequestOptions {
  url: string;
  method: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
  headers?: AxiosRequestConfig["headers"];
}
// interface IResponse<T = any> {
//   code: number;
//   message: string;
//   data: T;
// }
class HttpClient {
  private readonly instance: AxiosInstance;
  constructor(baseURL?: string) {
    this.instance = axios.create({ baseURL });
    this.instance.interceptors.response.use(
      this.handleSuccessResponse,
      this.handleErrorResponse
    );
  }
  private handleSuccessResponse(response: AxiosResponse): AxiosResponse {
    return response;
  }
  private handleErrorResponse(error: any): Promise<never> {
    message.error(error.message || "请求失败");
    return Promise.reject(error);
  }
  public async request<T = any>({
    url,
    method,
    data,
    params,
    headers,
  }: IRequestOptions): Promise<T> {
    const response = await this.instance.request<T>({
      url,
      method,
      data,
      params,
      headers,
    });
    return response.data;
  }
}

const BASE_URL = 'https://39.106.93.115/chameleon/api'

const http = new HttpClient(BASE_URL);

export default http;
