import React, { useEffect, useState } from "react";
import { deleteTodo, getTodos, postTodo } from "./api/Async";
import { ITodo } from "./types";
import Todo from "./Todo/Todo";

const Todos = () => {
  // usestate todo
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [title, setTitle] = useState<string>("");

  // get
  const get = async () => {
    const data = await getTodos();
    setTodos(data);
    // console.log(todos);
  };
  // deelete
  function remove(id: number) {
    deleteTodo(id);
    get();
  }

  // add
  function post(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newTodo: ITodo = {
      title: title,
      complete: false,
      id: Date.now()
    };
    postTodo(newTodo);
    setTitle("");
    get();
  }

  // useEffect
  useEffect(() => {
    get();
  }, []);

  return (
    <div>
      <h1>TodoList</h1>
      <form onSubmit={post}>
              <input
                  value={title}
                  type="text"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setTitle(event.target.value)
                  }}
              />
        <button type="submit">add</button>
      </form>
      {todos.map((todo: ITodo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={() => {
              remove(todo.id);
            }}
          />
        );
      })}
    </div>
  );
};

export default Todos;
