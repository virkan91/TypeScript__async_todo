import axios from "axios";

// API
const API = "http://localhost:3000/data";

// get Todos
export async function getTodos() {
    try {
        const { data } = await axios.get(API);
        return data;
    } catch (error) {
      return error;
    }
}


