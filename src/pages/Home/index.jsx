import { Link } from "react-router-dom"
import "./home.css"
import Footer from "../../components/footer"
import Header from "../../components/header"
const Home = () =>{
return (
    <>
    <Header />
    <main id="home">
         
        
        <Link to="/projects" className="link" id="projectLink">
         Projects
        </Link>
        <br />
        <Link to="/contact" className="link" id="contactLink">
         Contact
        </Link>
        <br />
        <Link to="/about" className="link" id="aboutLink">
         About
        </Link>
    </main>
    <Footer />
    </>
)
}


export default Home