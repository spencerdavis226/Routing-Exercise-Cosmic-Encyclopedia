import './App.css';
import { Routes, Route } from 'react-router-dom';

// COMPONENTS
import NavBar from './components/NavBar';

// PAGES

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/planets" element={<ContentPage category="planets" />} />
        <Route path="/stars" element={<ContentPage category="stars" />} />
        <Route path="/nebulae" element={<ContentPage category="nebulae" />} />
        <Route path="/galaxies" element={<ContentPage category="galaxies" />} />
      </Routes>
    </div>
  );
}

export default App;
