import axios from 'axios';

const API_BASE_URL = 'https://taskmanagerapi-755f926f5a46.herokuapp.com/AppTask/V1.0.0/'; // Replace with your API base URL

const apiService = axios.create({
    baseURL: API_BASE_URL,
});

export const getAllTasks = async () => {
    try {
        const response = await apiService.get('/tasks');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getTask = async (id:any) => {
    try {
        const response = await apiService.get(`/tasks/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const postTasks = async (data: any) => {
    try {
        const response = await apiService.post('/tasks', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateTasks = async (id: any, data: any) => {
    try {
        const response = await apiService.put(`/tasks/${id}/`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteTasks = async (id: any) => {
    try {
        const response = await apiService.delete(`/tasks/${id}/`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

