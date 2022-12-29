
import { useTree } from "./context-tut";

export function ExampleContext(){
const {tree}= useTree();

return(
    <>
        <ul>
            {tree.map((x)=> <li key={x.id}>{x.type}</li>)}
        </ul>
    </>
)
}