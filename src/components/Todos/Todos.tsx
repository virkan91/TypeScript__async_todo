import React, { useEffect, useState } from "react";
import { getTodos } from "./api/Async";
import { ITodo } from "./types";



const Todos = () => {

  // usestate todo
    const [todos, setTodos] = useState<ITodo[]>([]);
    
  // get
  const get = async () => {
    const data = await getTodos();
    setTodos(data);
    // console.log(todos);
  };

  // useEffect
  useEffect(() => {
    get();
  }, []);

    return <div>
        {
            todos.map((todo: ITodo) => {
                return <div key={todo.id}>
                    {todo.title}
                </div>
            })
      }
  </div>;
};

export default Todos;
