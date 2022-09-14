import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
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
     </Routes>

    </Suspense>
  );
}

export default App;
