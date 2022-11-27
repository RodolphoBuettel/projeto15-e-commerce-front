import axios from "axios";

const BASE_URL = "http://localhost:5000";

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
