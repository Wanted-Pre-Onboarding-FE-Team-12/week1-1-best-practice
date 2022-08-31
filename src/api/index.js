import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API,
  headers: { 'Content-Type': 'application/json' },
});

export const authInstance = authToken =>
  axios.create({
    baseURL: process.env.REACT_APP_SERVER_API,
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
  });
