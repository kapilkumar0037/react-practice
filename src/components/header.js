import { NavLink } from 'react-router-dom'
import './header.css'

export default function Header() {
    return (
        <header>
            <div className='logo'>Logo</div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/categories">Categories</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}