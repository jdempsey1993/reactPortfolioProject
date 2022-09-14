import { Link } from "react-router-dom"
import "./home.css"
const Home = () =>{
return (
    <main id="home">
        <h1>Home</h1>
         <Link to="/about" className="link">
         About
        </Link>
    </main>
)
}


export default Home