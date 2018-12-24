import axios from 'axios';
import Config from '../../server/config';

export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
  process.env.BASE_URL || (`http://localhost:${process.env.PORT || Config.port}/api`) :
  '/api';

export default function callApiX(endpoint, method = 'get', data) {
  console.log('api callerX url')
  console.log(API_URL);
  console.log(endpoint);
  console.log(method);

  return axios({
    method, 
    url: `/${endpoint}`,
    data , // 'PUT', 'POST', and 'PATCH'
    baseURL: API_URL,
    //withCredentials: true,
  })
  .then((response) => {
    console.log('on response')
    console.log(response)
    if (!response.data.errmsg) {
      console.log('errmsg')
      return response.data;
    } else {
      console.log('else')
    }
    console.log('out');
  })
  .catch(function (error) {
    console.log('on catch')
    console.log(error)
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      return error.response 
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error);
  });
}