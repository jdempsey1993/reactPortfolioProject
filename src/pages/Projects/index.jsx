import "./projects.css"
import Footer from "../../components/footer"
import Header from "../../components/header"
import { Container, Row, Col } from 'react-grid-system';

const Projects = () =>{
return (
    <>
    <Header />
    <main id="projects">
        <h1>Projects</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
       
<Container fluid>
  <Row debug>
    <Col debug>1 utav 1</Col>
    <Col debug>2 utav 2</Col>d
    <Col debug>3 utav 3</Col>
  </Row>
  <br />
  <Row debug>
    <Col debug>1 of 3</Col>
    <Col debug>2 of 3</Col>
    <Col debug>3 of 3</Col>
  </Row>
  <br />
  <Row debug>
    <Col debug>1 of 3</Col>
    <Col debug>2 of 3</Col>
    <Col debug>3 of 3</Col>
  </Row>
</Container>

    </main>
    <Footer />
    </>
)
}


export default Projects