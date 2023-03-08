import axios from "axios";

const API_URL = "http://localhost:5000";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, userData);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
