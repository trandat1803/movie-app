import axios from "axios";
import { BASE_URL } from "./config";

const apiService = axios.create({
  baseURL: BASE_URL,
});

apiService.interceptors.request.use(
  (request) => {
    console.log("Start the request", request);
    return request;
  },
  function (error) {
    console.log("Request Error:" + error);
  }
);

apiService.interceptors.request.use(
  (request) => {
    console.log("Response", request);
    return request;
  },
  function (error) {
    console.log("Request Error:" + error);
  }
);

export default apiService;
