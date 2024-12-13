import axios from "axios";
import { API_URL } from "../const/index";

export const getVehicles = async () => {
    try {
        const response = await axios.get(API_URL);

        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const updateVehicle = async (id, status, name) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, { status, name });
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const addVehicle = async (name, status) => {
    try {
        const response = await axios.post(API_URL, { status, name });
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
};
