import axios from 'axios';

const API_BASE_URL = 'https://task-manager-backend-production-c657.up.railway.app/AppTask/V1.0.0'; // Replace with your API base URL

const apiService = axios.create({
    baseURL: API_BASE_URL
});

export const getAllTasks = async (id:any,token:string) => {
    try {
        const response = await apiService.get(`/tasks/user/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getTask = async (id:any,token:string) => {
    try {
        const response = await apiService.get(`/tasks/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const postTask = async (data: any,token:string) => {
    try {
        const response = await apiService.post('/tasks', data,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
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

export const updateTask = async (id: any, data: any, token:string) => {
    try {
        const response = await apiService.put(`/tasks/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteTask = async (id: any, token:string) => {
    try {
        const response = await apiService.delete(`/tasks/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

