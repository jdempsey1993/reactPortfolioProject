import { Link } from "react-router-dom"
import './contact.css'

const Contact = () => {
    return(
        <main id="contact">
            <h1 className="contactHeader">Contact me</h1>
        <Link to="/"className="link">
             Home
        </Link>
        </main>
    )
}

export default Contact