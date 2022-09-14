import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import './Themes.css';

function App() {
  return (
    
    <Suspense fallback={<main id="loadingScreen"><h1>Loading...</h1></main>}>
     <Routes>
      <Route path='/' element={<Home/>} />
     </Routes>

    </Suspense>
  );
}

export default App;
