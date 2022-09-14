import { Link } from "react-router-dom"

const Home = () =>{
return (
    <main id="home">
        <h1>Home</h1>
         <Link to="/about">
         About
        </Link>
    </main>
)
}


export default Home