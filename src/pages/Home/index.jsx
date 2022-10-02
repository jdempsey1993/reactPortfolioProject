import { Link } from "react-router-dom"
import "./home.css"
import Footer from "../../components/footer"
import Header from "../../components/header"
const Home = () =>{
return (
    <>
    <Header />
    <main id="home">
        <h1>Home</h1>
         <Link to="/about" className="link" id="aboutLink">
         About
        </Link>
        <br></br>
        <Link to="/projects" className="link" id="projectLink">
         Projects
        </Link>
        <br></br>
        <Link to="/contact" className="link" id="contactLink">
         Contact
        </Link>
    </main>
    <Footer />
    </>
)
}


export default Home