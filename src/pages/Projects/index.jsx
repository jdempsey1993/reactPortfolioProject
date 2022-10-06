import "./projects.css"
import Footer from "../../components/footer"
import Header from "../../components/header"
import { Container, Row, Col } from 'react-grid-system';

//Images
import project1thumbnail from '../../media/thumbnails150/imageOne150.jpeg' 
import project2thumbnail from '../../media/thumbnails150/imageTwo150.jpeg' 
import { Link } from "react-router-dom";
const Projects = () =>{
return (
    <>
    <Header />
    <main id="projects">
        <h1>Projects</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

  <div className="thumbnailBox">

  <Link to="#" className="thumbnail"><img src={project1thumbnail}alt="Abstract 1"
    height={150} width={150}/></Link>

<Link to="#" className="thumbnail"><img src={project2thumbnail}alt="Abstract 2"
    height={150} width={150}/></Link>

<Link to="#" className="thumbnail"><img src={project1thumbnail}alt="Abstract 1"
    height={150} width={150}/></Link>

<Link to="#" className="thumbnail"><img src={project2thumbnail}alt="Abstract 2"
    height={150} width={150}/></Link>  
    
<Link to="#" className="thumbnail"><img src={project1thumbnail}alt="Abstract 1"
    height={150} width={150}/></Link>

<Link to="#" className="thumbnail"><img src={project2thumbnail}alt="Abstract 2"
    height={150} width={150}/></Link>

  </div>

{/* <Container fluid>
  <Row debug>
  <Col debug className="gridCol"><Link to="#" className="thumbnail"><img src={project1thumbnail}alt="Abstract 1"
    height={150} width={150}/></Link></Col>

<Col debug><Link to="#" className="thumbnail"><img src={project2thumbnail}alt="Abstract 2"
    height={150} width={150}/></Link></Col>

<Col debug><Link to="#" className="thumbnail"><img src={project1thumbnail}alt="Abstract 1"
    height={150} width={150}/></Link></Col>
  </Row>

  <Row debug>
   
  <Col debug><Link to="#" className="thumbnail"><img src={project2thumbnail}alt="Abstract 2"
    height={150} width={150}/></Link></Col>

<Col debug><Link to="#" className="thumbnail"><img src={project1thumbnail}alt="Abstract 1"
    height={150} width={150}/></Link></Col>

<Col debug><Link to="#" className="thumbnail"><img src={project2thumbnail}alt="Abstract 2"
    height={150} width={150}/></Link></Col>
    </Row>


</Container> */}





    </main>
    <Footer />
    </>
)
}


export default Projects