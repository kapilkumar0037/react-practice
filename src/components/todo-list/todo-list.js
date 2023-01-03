import { TodoListItem } from "./todo-list-item"

export function TodoList({ todos, setTodos}) {
    return (
        <>
            {todos.map((x) => <TodoListItem setTodos={setTodos} key={x.id} todo={x}/>)}
        </>
    )
}