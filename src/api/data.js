import api from "./api";
import axios from "axios";
import { API_URL } from "./config";


export const upload_csv = async (file) => {
    try {
        // const res = await axios.post("/file/upload_csv", fileForm);
        const res = await axios.post(API_URL +"/file/upload_csv", file, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'token' : localStorage.getItem("token")

            }
        })
        return res;
    } catch (error) {
        console.log('error', error);
        return error;
    }
}