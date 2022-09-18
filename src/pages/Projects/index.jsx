import { Link } from "react-router-dom"
import "./projects.css"
const Projects = () =>{
return (
    <main id="projects">
        <h1 className="projectsHeader">Projects</h1>
         <Link to="/" className="link">
         Home
        </Link>
    </main>
)
}


export default Projects