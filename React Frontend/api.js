import axios from 'axios';

const API_URL = 'http://localhost:8080/api/products';

export const getProducts = async () => {
    try{
    const response = await axios.get(API_URL);
    return response.data;
    }
    catch (error) {
        console.error("Error fetching products", error);
        throw error; 
    }
};

export const getProductById = async (id) => {
    try {
    const response = await axios.get(`${API_URL}/${id}`)
    return response.data;
    } catch (error) {
        console.log("Error fetching product:" + error);
        throw error;
    }
}
