import { NavLink, Outlet } from "react-router-dom";
import { getCategories } from "../../api"
import './categories.css'

export default function Categories() {
    const categories = getCategories();
    return (
        <>
            <ul>
                {categories.map((cat) =>
                    <li key={cat.id}>
                        <NavLink className={({isActive}) => isActive ? 'category-active' : null} to={cat.id}>{cat.name}
                        </NavLink>
                    </li>
                )}
            </ul>
            <br></br>
            <Outlet />
        </>
    )
}