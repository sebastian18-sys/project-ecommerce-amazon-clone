import axios from "../axios";

export const getClientSecret = async (basket) => {
    const response = await axios.post('/payments/create', {
        total: basket * 100
    })
    return response.data;
}