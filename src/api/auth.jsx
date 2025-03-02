import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/auth`; // Replace with actual API URL

export const login = async (phone, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { phone, password });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const logout = async () => {
    try {
        const response = await axios.post(`${API_URL}/logout`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};
