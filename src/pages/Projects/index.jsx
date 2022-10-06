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
    <Col debug><img src="*"alt="Abstract"></img></Col>
    <Col debug><img src="*"alt="Abstract"></img></Col>
    <Col debug><img src="*"alt="Abstract"></img></Col>
  </Row>
  <br />
  <Row debug>
    <Col debug><img src="*"alt="Abstract"></img></Col>
    <Col debug><img src="*"alt="Abstract"></img></Col>
    <Col debug><img src="*"alt="Abstract"></img></Col>
  </Row>
  <br />
  <Row debug>
    <Col debug><img src="*"alt="Abstract"></img></Col>
    <Col debug><img src="*"alt="Abstract"></img></Col>
    <Col debug><img src="*"alt="Abstract"></img></Col>
  </Row>
</Container>

    </main>
    <Footer />
    </>
)
}


export default Projects