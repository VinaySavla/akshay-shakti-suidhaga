import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/marketplace`;

export const getJobs = async () => {
    try {
        const response = await axios.get(`${API_URL}/jobs`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const getJobById = async (jobId) => {
    try {
        const response = await axios.get(`${API_URL}/jobs/${jobId}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const applyForJob = async (jobId, userId) => {
    try {
        const response = await axios.post(`${API_URL}/jobs/${jobId}/apply`, { userId });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};
