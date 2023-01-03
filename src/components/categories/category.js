import { useParams,  NavLink, Outlet  } from "react-router-dom"
import { getCategory } from "../../api";

export default function Category() {
    const { catId } = useParams();
    const category = getCategory(catId);
    console.log(category);
    return (
        <>
            <ul>
                {category.sessions.map((cat) =>
                    <li key={cat.id}>
                        <NavLink className={({isActive}) => isActive ? 'category-active' : null} to={cat.id}>{cat.name}</NavLink>
                    </li>
                )}
            </ul>
            <Outlet />
        </>
    )
}