import { useState } from "react";

function FormPractice(){
    const [title,setTitle]= useState('');
    const [color, setColor]= useState('#000000')

    const  submit=(e)=>{
        e.preventDefault();
        console.log({title});
        console.log({color});

    }
return (
    <form onSubmit={submit}>
        <input type="text" value={title} onChange={(event)=> setTitle(event.target.value)}/>
        <input type="color" value={color} onChange={(event)=> setColor(event.target.value)}/>
        <button>Check</button>
    </form>
)
}

export default FormPractice;