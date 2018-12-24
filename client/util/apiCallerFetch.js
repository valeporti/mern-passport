import fetch from 'isomorphic-fetch';
import Config from '../../server/config';

export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
  process.env.BASE_URL || (`http://localhost:${process.env.PORT || Config.port}/api`) :
  '/api';

export default function callApi(endpoint, method = 'get', body) {
  console.log('api caller url')
  console.log(API_URL);
  console.log(endpoint);
  console.log(method);
  return fetch(`${API_URL}/${endpoint}`, {
    headers: { 'content-type': 'application/json' },
    method,
    credentials: 'include',
    body: JSON.stringify(body),
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    console.log('here?')
    console.log(json)
    console.log(response)
    console.log(response.ok)
    if (!response.ok) {
      console.log('response not ok')
      json.err = true;
      json.name = json.name || json.code || 'error_new';
      json.mssg = json.message || json.errmsg || 'no_msg_found';
      return Promise.reject(json);
    } else {
      return json;
    }
  })
  .then(
    response => response,
    error => error
  ); 
  /* .then(response => {
    if (!response.ok) {
      console.log('not ok')
      return Promise.reject(response);
    }
    console.log('res1')
    console.log(response)
    return response;
  })
  .then(response => console.log('evefything ok'))
  .catch(err => { console.log('not ok'); console.log(err)}) */
}
