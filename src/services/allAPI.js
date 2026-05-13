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
export const getAllBooksAPI = async (searchKey) => {
    return await apiService("GET", `/all-books?search=${searchKey}`, {})
}

// user-books : called by BooksStatus component when page open
export const getAllUserBooksAPI = async () => {
    return await apiService("GET", `/user-books`, {})
}

// bought-books : called by Purchase component when page open
export const getAllUserBoughtBooksAPI = async () => {
    return await apiService("GET", `/bought-books`, {})
}

// delete book : called by BookStatus component when delte btn clicked
export const deleteUserUploadBookAPI = async (bookId) => {
    return await apiService("DELETE", `/books/${bookId}`, {})
}

// single book view : called by View component when page open
export const getSingleBookAPI = async (id) => {
    return await apiService("GET", `/books/${id}`, {})
}

// http://localhost:3000/books/69f581671f8d3a89b4b6fb3a/buy called by View component when make payment btn clicked
export const buyBookAPI = async (id) => {
    return await apiService("PUT", `/books/${id}/buy`, {})
}

// admin edit api : called by admin settings component when update button clicked
export const adminUpdateAPI = async (adminId, adminData) => {
    return await apiService("PUT", `/profile/${adminId}`, adminData)
}

// get all users api : called by admin resources component when tab 2 clicked
export const userListAPI = async () => {
    return await apiService("GET", `/user-list`, {})
}

// get all books api : called by admin resources component when tab 1 clicked
export const bookListAPI = async () => {
    return await apiService("GET", `/book-list`, {})
}

// update book status api : called by admin resources component when approve btn clicked
export const editBookStatusAPI = async (id) => {
    return await apiService("PUT", `/books/${id}`, {})
}

// get book details AI
export const getBookByAIAPI = async (title) => {
    return await apiService("POST", `/book-ai`, {title})
}