import { setTodosApi, Todos } from '../../api'
import './todo-list.css'

export function TodoListItem({ todo, setTodos }) {
    const Complete=(id)=>{
        const item=Todos.find(x=> x.id===id);
        if(item){
            item.status="Completed";
        }
        setTodos([...Todos]);
    }
    const remove =(id)=> {
        const filtered =Todos.filter(item=>item.id!==id);
        setTodosApi(filtered);
        setTodos([...filtered]);
    }
    return (
        <div className="card">
            <div className="list-item">
                <div className="name">{todo.name}</div>
                <div className="btn">
                    <button className="button-primary" onClick={()=>Complete(todo.id)}>Complete task</button>
                    <button className="button-danger" onClick={()=>remove(todo.id)}>Remove task</button>
                </div>
            </div>
        </div>
    )
}