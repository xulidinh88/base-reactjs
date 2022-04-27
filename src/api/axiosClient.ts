import axios from 'axios';
import queryString from 'query-string';

export const axiosClient = axios.create({
  baseURL: '',
  headers: {
    'Content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    // Handle errors

    throw error;
  },
);
