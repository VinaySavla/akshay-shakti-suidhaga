import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/students`;

export const getStudents = async () => {
    try {
        const response = await axios.get(`${API_URL}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const getStudentById = async (studentId) => {
    try {
        const response = await axios.get(`${API_URL}/${studentId}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const addStudent = async (studentData) => {
    try {
        const response = await axios.post(`${API_URL}`, studentData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const updateStudent = async (studentId, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/${studentId}`, updatedData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const deleteStudent = async (studentId) => {
    try {
        const response = await axios.delete(`${API_URL}/${studentId}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};
