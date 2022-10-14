import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 1000,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export const login = async (data) => {
  try {
    console.log(data);
    return await apiClient.post("auth/login", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post("auth/register", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

//secure routes

const checkResponse = (exception) => {
  const responseCode = exception?.response?.status;
  if (responseCode === 401 || responseCode === 403) {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
};
