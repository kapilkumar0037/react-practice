import { useReducer } from "react";

export function ExampleReducer(){
    const [checked,toggle]=useReducer((checked)=> !checked, false);
   

    return (
        <div>
            <input type="checkbox" onChange={()=>toggle()}></input>
            <label>{checked?"Checked":"Not Checked"}</label>
        </div>
    )
}