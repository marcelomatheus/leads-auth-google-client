import axios from "axios";

export const server = () => {
  return axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
      "Content-type": "application/json",
    },
  });
};

axios.interceptors.request.use(
  function (config) {
    console.info(config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


axios.interceptors.response.use(
  function (response) {
    console.info(response);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
