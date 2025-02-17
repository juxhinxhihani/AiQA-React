import axios from "axios";

const API_BASE_URL = "https://localhost:7051/";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 100000,
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.data);
      throw new Error(error.response.data.message || "An error occurred");
    } else if (error.request) {
      console.error("Network Error:", error.request);
      throw new Error("Network error - no response received");
    } else {
      console.error("Request Error:", error.message);
      throw new Error("Error setting up the request");
    }
  }
);
