import { Link } from "react-router-dom"
import Footer from "../../components/footer"
import Form from "../../components/form"
import Header from "../../components/header"
import './contact.css'

const Contact = () => {
    return(
        <>
        <Header />
        <main id="contact">
            <h1 className="contactHeader">Contact me</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Form />
        <br></br>
        <Link to="/"className="link">
             Home
        </Link>
        </main>
        
        <Footer />
        </>
    )
}

export default Contact