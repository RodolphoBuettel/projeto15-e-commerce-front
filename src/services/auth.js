import axios from "axios";

const BASE_URL = "https://api-bonecoscabecudos.onrender.com";

export function signup(body) {
  const response = axios.post(`${BASE_URL}/sign-up`, body);
  return response;
}

export function signin(body) {
  const response = axios.post(`${BASE_URL}/sign-in`, body).catch((error) => {
    return response;
  });
  return response;
}
