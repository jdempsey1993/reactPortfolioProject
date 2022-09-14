import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
// import About from './pages/About';
import Home from './pages/Home';
import './Themes.css';
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    
    <Suspense fallback={<main id="loadingScreen"><h1>Loading...</h1></main>}>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/*' element={<main id="pageNotFound">
        <h1>404: Page Not Found!!!:(</h1>
        <Link to="/" className='link'>Home</Link>
      </main>} />
     </Routes>

    </Suspense>
  );
}

export default App;
