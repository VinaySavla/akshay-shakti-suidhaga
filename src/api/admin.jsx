import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/admin`; // Replace with actual API URL

// Admin Authentication
export const adminLogin = async (phone, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { phone, password });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

// 🔹 Manage Products
export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const addProduct = async (productData) => {
    try {
        const response = await axios.post(`${API_URL}/products`, productData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const updateProduct = async (productId, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/products/${productId}`, updatedData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const deleteProduct = async (productId) => {
    try {
        const response = await axios.delete(`${API_URL}/products/${productId}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

// 🔹 Manage Students
export const getStudents = async () => {
    try {
        const response = await axios.get(`${API_URL}/students`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const addStudent = async (studentData) => {
    try {
        const response = await axios.post(`${API_URL}/students`, studentData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const updateStudent = async (studentId, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/students/${studentId}`, updatedData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const deleteStudent = async (studentId) => {
    try {
        const response = await axios.delete(`${API_URL}/students/${studentId}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

// 🔹 Manage Batches
export const getBatches = async () => {
    try {
        const response = await axios.get(`${API_URL}/batches`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const addBatch = async (batchData) => {
    try {
        const response = await axios.post(`${API_URL}/batches`, batchData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const updateBatch = async (batchId, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/batches/${batchId}`, updatedData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const deleteBatch = async (batchId) => {
    try {
        const response = await axios.delete(`${API_URL}/batches/${batchId}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};
