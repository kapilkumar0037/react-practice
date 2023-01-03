import { useState } from "react"
import { Todos } from "../../api"

export function AddTodoItem({setTodos}) {
    const [todoItem, setTodoItem] = useState('');
    const [error, setError] = useState('');

    function submit(e){
        e.preventDefault();   
        if(!Todos.find(x=> x.id===todoItem)){ 
            Todos.push({id:todoItem,name:todoItem,status:'ToDo'});        
            setTodos([...Todos]);
            setError('');
        } else {
            setError('Item already exist!!');
        }  
    }

    return (
        <div className="card">
            <form onSubmit={submit}>
                <input value={todoItem} onChange={(e) => setTodoItem(e.target.value)} />
                <button type="submit" className="button-primary">Add task</button>
            </form>
            <span>{error}</span>
        </div>
    )
}