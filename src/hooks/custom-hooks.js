import { useState } from "react";

function useInput(initialValue){
    const [value, setValue]= useState(initialValue);
    return [
        {
            value,
            onChange: (e)=> setValue(e.target.value)
        },
        ()=> setValue(initialValue)
    ];
}

function CustomHooks(){
    const [titleProps,resetTitle]= useInput('');
    const [colorProps, resetColor]= useInput('#000000')

    const  submit=(e)=>{
        e.preventDefault();
        console.log(titleProps.value);
        console.log(colorProps.value);
        resetTitle();
        resetColor()
    }
return (
    <form onSubmit={submit}>
        <input type="text" {...titleProps}/>
        <input type="color" {...colorProps}/>
        <button>Check</button>
    </form>
)
}

export default CustomHooks;