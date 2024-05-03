import api from "./api";

export const userLogin = async (data) => {
    try {
        console.log('data', data);
        const response = await api.post("/user/login", data);
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