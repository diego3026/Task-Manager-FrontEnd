import axios from 'axios';

const API_BASE_URL = 'https://task-manager-devops-api-f6g4btbjfvfsgtc7.eastus-01.azurewebsites.net/AppTask/V1.0.0'; // Replace with your API base URL

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


export const postTask = async (data: any) => {
    try {
        const response = await apiService.post('/tasks', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const register = async (data: any) => {
    try {
        const response = await apiService.post('/auth/register', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const login = async (data: any) => {
    try {
        const response = await apiService.post('/auth/login', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const refreshTokenApi = async (data: any) => {
    try {
        const response = await apiService.post('/token/refresh', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateTask = async (id: any, data: any) => {
    try {
        const response = await apiService.put(`/tasks/${id}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteTask = async (id: any) => {
    try {
        const response = await apiService.delete(`/tasks/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

