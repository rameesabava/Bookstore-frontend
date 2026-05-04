import apiService from "../api/apiService";

// register api : called by auth component when reg button clicked
export const registerAPI = async (userData) => {
    return await apiService("POST", "/register", userData)
}

// login api : called by auth component when login button clicked
export const loginAPI = async (userData) => {
    return await apiService("POST", "/login", userData)
}

// google-login api : called by auth component when google login button clicked
export const googleLoginAPI = async (userData) => {
    return await apiService("POST", "/google-login", userData)
}

// userEdit api : called by Edit component when update button clicked
export const userUpdateAPI = async (userId, userData) => {
    return await apiService("PUT", `/user/${userId}`, userData)
}

// addBook api : called by UploadBook component when add button clicked
export const addBookAPI = async (bookDetails) => {
    return await apiService("POST", `/books`, bookDetails)
}

// getHomeBooks api : called by home component when page opens (http://localhost:3000/home-books)
export const getHomePageBooksAPI = async () => {
    return await apiService("GET", `/home-books`, {})
}

// all-books : getAllBooksAPI - called by Books component when page open
export const getAllBooksAPI = async () => {
    return await apiService("GET", `/all-books`, {})
}

// user-books : called by BooksStatus component when page open
export const getAllUserBooksAPI = async () => {
    return await apiService("GET", `/user-books`, {})
}

// bought-books : called by Purchase component when page open
export const getAllUserBoughtBooksAPI = async () => {
    return await apiService("GET", `/bought-books`, {})
}
