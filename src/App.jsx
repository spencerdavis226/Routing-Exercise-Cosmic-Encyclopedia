import './App.css';
import { Routes, Route } from 'react-router-dom';

// COMPONENTS
import NavBar from './components/NavBar';

// PAGES
import HomePage from './pages/HomePage';
import ContentPage from './pages/ContentPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/planets" element={<ContentPage category="planets" />} />
          <Route path="/stars" element={<ContentPage category="stars" />} />
          <Route path="/nebulae" element={<ContentPage category="nebulae" />} />
          <Route
            path="/galaxies"
            element={<ContentPage category="galaxies" />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
