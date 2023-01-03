import { TodoList } from "../todo-list/todo-list";
import { AddTodoItem } from "../todo-list/todo-form";
import { useState } from "react";

export default function Home() {
    const [todos, setTodos] = useState([]);

    return (
        <>
            <AddTodoItem setTodos={setTodos}/>

            <TodoList setTodos={setTodos} todos={todos} />
        </>
    )
}