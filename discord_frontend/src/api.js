import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5002/api",
  withCredentials: false,
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const login = async (email, password) => {
  const response = await apiClient.post("auth/login", {
    email,
    password,
  });
  return response.data;
};

export const register = async (email, password, username) => {
  try {
    const response = await apiClient.post("auth/register", {
      email,
      password,
      username,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
