import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/attendance`;

export const getAttendanceRecords = async () => {
    try {
        const response = await axios.get(`${API_URL}/records`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const markAttendance = async (studentId, status) => {
    try {
        const response = await axios.post(`${API_URL}/mark`, { studentId, status });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const getAttendanceByStudent = async (studentId) => {
    try {
        const response = await axios.get(`${API_URL}/records/${studentId}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};
