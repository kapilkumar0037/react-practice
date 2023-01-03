import { useParams } from "react-router-dom";
import { getSession } from "../../api";
import './categories.css';

export default function Sessions() {
    const { catId, sessionId } = useParams();
    const { desc, name } = getSession({ sessionId, catId });
    return (
        <div className="session">
            <h1>{name}</h1>
            <p>{desc}</p>

        </div>
    )
}