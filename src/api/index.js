import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://n38lcff1wk.execute-api.ap-northeast-2.amazonaws.com',
  headers: { 'Content-Type': 'application/json' },
});

export const authInstance = authToken =>
  axios.create({
    baseURL: 'https://n38lcff1wk.execute-api.ap-northeast-2.amazonaws.com',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
  });
