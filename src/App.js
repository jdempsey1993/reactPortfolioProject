import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
// import About from './pages/About';
import Home from './pages/Home';
// import Projects from './pages/Projects';
import './Themes.css';
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));


function App() {
  return (
    
    <Suspense fallback={<main id="loadingScreen"><h1>Loading...</h1></main>}>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/*' element={<main id="pageNotFound">
        <h1>404: Page Not Found!!!:(</h1>
        <Link to="/" className='link'>Home</Link>
      </main>} />
     </Routes>

    </Suspense>
  );
}

export default App;
