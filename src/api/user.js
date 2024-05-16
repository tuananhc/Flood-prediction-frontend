import api from "./api";

export const userLogin = async (data) => {
    try {
        console.log('data', data);
        const response = await api.post("/user/login", data);
        //save token to local storage
        localStorage.setItem('token', response.data);
        console.log('res', response);
        return response;
    } catch (error) {
        console.log('error', error);
        return error;
    }
}

export const createUser = async (data) => {
    try {
        const response = await api.post("/user/register", data);
        console.log('res', response);
        return response;
    } catch (error) {
        console.log('error', error);
        return error;
    }
}

export const getUser = async () => {
    try {
        const response = await api.get("/user/info");
        console.log('res', response);
        return response;
    } catch (error) {
        console.log('error', error);
        return error;
    }
}