import { NavLink } from "react-router-dom"
import "./header.css"

const Header = () => {
    return (
        <header>
           <nav>
            <NavLink exact className='navLink' to='/'>Home</NavLink>
            <NavLink className='navLink' to='/about'>About</NavLink>
            <NavLink className='navLink' to='/projects'>Projects</NavLink>
            <NavLink className='navLink' to='/contact'>Contact</NavLink>

           </nav>
        </header>
    )
}

export default Header
