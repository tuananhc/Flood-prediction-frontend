import api from "./api";

export const upload_csv = async (fileForm) => {
    try {
        const res = await api.post("/file/upload_csv", fileForm);
        return res;
    } catch (error) {
        console.log('error', error);
        return error;
    }
}