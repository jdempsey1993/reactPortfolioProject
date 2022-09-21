import { NavLink } from "react-router-dom"
import "./header.css"

const Header = () => {
    return (
        <header>
           <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/contact'>Contact</NavLink>

           </nav>
        </header>
    )
}

export default Header
