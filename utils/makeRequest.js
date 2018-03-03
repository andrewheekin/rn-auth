import { BASE_URL } from './config';

export const makeRequest = async (url, method, body) => {
  let response = await fetch(`${BASE_URL}/${url}`, {
    method,
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(body),
  });
  return await response.json();
};
