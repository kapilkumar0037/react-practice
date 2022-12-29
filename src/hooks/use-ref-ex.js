import { useRef } from "react"

export function ExampleUseRef(){
    const color=useRef();
    const submit=(e)=>{
        e.preventDefault();
        const colorVal=color.current.value;
        alert(colorVal);
    }
    return (
        <form onSubmit={submit}>
        <input ref={color} type="text"/>  
        <button>Add</button>
        </form>
    )
}