import { Link } from "react-router-dom"
import './about.css'

const About = () => {
    return(
        <main id="about">
            <h1>All about me</h1>
        <Link to="/"className="link">
             Home
        </Link>
        </main>
    )
}

export default About