import axios from 'axios'


const API_URL = (process.env.NODE_ENV === 'production') ? 'https://mernappdave-7eca150cce5f.herokuapp.com/api/users/' : 'http://localhost:5000/api/users/'

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}


// login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}



// Logout user
const logout = () => {
    localStorage.removeItem('user')
}


const authService = {
    register,
    logout,
    login,
}

export default authService