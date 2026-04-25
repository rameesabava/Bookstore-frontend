import apiService from "../api/apiService";

// register api : called by auth component when reg button clicked
export const registerAPI = async (userData)=>{
    return await apiService("POST", "/register", userData)
}

// login api : called by auth component when login button clicked
export const loginAPI = async (userData)=>{
    return await apiService("POST", "/login", userData)
}

// google-login api : called by auth component when google login button clicked
export const googleLoginAPI = async (userData)=>{
    return await apiService("POST", "/google-login", userData)
}