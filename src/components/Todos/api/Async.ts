import axios from "axios";
import { ITodo } from "../types";
// API
const API = import.meta.env.VITE_API_URL;

// get Todos
export async function getTodos() {
    try {
        const { data } = await axios.get(`${API}/data`);
        return data;
    } catch (error) {
      return error;
    }
}
//  ondelete
export async function deleteTodo (id: number) {
    try {
        const { data } = await axios.delete(`${API}/data/${id}`)
        return data;
    } catch (error) {
        return error
        
    }
}

// post Todo
export async function postTodo(newTodo: ITodo) {
    try {
        const { data } = await axios.post(`${API}/data`, newTodo)
        return data;
    } catch (error) {
        return error
        
    }
}


