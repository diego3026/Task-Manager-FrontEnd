import { login, register, refreshTokenApi } from '../apiService/apiService';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import AlertSucess from '../components/Alert/AlertSucess';
import AlertError from '../components/Alert/AlertError';
import { jwtDecode } from 'jwt-decode';

interface AuthContextProps {
    isAuthenticated: boolean;
    token: string;
    refresh: string;
    user: any;
    loginUser: (data: any) => Promise<void>;
    registerUser: (data: any) => Promise<void>;
    logoutUser: () => void;
    refreshToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string>("");
    const [refresh, setRefresh] = useState<string>("");
    const [user, setUser] = useState<any>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedRefresh = localStorage.getItem("refresh");
        const storedUser = localStorage.getItem("user");

        if (storedToken){
            setToken(storedToken);
        }

        if(storedUser){
            try {
                setUser(JSON.parse(storedUser));
                setIsAuthenticated(true);
            } catch (error) {
                console.error("Error parsing user from localStorage:", error);
            }
        }

        if (storedRefresh) {
            setRefresh(storedRefresh);
        }

    }, []);

    const saveTokenToLocalStorage = (token: string,) => {
        localStorage.setItem("token", token);
    };

    const clearLocalStorage = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("refresh");
    };

    const refreshToken = async () => {
        try {
            const response: any = await refreshTokenApi({ refreshToken: refresh });
            setToken(response.token);
            setRefresh(response.refresh);
            saveTokenToLocalStorage(response.token);
        } catch (error) {
            console.error("Error refreshing token:", error);
            logoutUser();
        }
    };

    const saveUser = (token:string) => {
        const user = jwtDecode(token);
        setUser(user);
        saveUserToLocalStorage(user);
    }

    const saveUserToLocalStorage = (user:any) => {
        localStorage.setItem("user",JSON.stringify(user));
    }

    const loginUser = async (data: any) => {
        try {
            const response: any = await login({
                email: data.email,
                password: data.password
            });

            if (response) {
                setToken(response.token);
                // setRefresh(response.refresh);
                setIsAuthenticated(true);
                saveTokenToLocalStorage(response.token);
                saveUser(response.token)
                AlertSucess("Iniciaste sesión exitosamente");
                navigate("/principal");
            }
        } catch (error) {
            console.error("Error during login:", error);
            AlertError("Algo ha salido mal");
        }
    };

    const registerUser = async (data: any) => {
        try {
            const response: any = await register({
                userName: data.username,
                email: data.email,
                password: data.password,
                role: ["USER"]
            });

            if (response) {
                AlertSucess("Registro exitoso");
                navigate("/login");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            AlertError("Algo ha salido mal");
        }
    };

    const logoutUser = () => {
        setToken("");
        setRefresh("");
        setUser(null);
        setIsAuthenticated(false);
        clearLocalStorage();
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, token, refresh, user, loginUser, registerUser, logoutUser, refreshToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
