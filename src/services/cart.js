import axios from "axios";

const BASE_URL = "https://api-bonecoscabecudos.onrender.com";

export function createCart(body, token) {
  const cart = body;
  const response = axios
    .post(`${BASE_URL}/cart`, cart, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => {
      return err.response;
    });
  return response;
}

export function findCart(token) {
  const response = axios
    .get(`${BASE_URL}/cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => {
      return err.response;
    });

  return response;
}

export function updateCart(body, token) {
  const cart = body;
  const response = axios
    .post(`${BASE_URL}/update-cart`, cart, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => {
      return err.response;
    });
  return response;
}

export function closeCart(token) {
  const response = axios
    .post(`${BASE_URL}/clear-cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => {
      return err.response;
    });

  return response;
}

export function deleteCart(token) {
  const response = axios
    .delete(`${BASE_URL}/cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => {
      return err.response;
    });

  return response;
}

