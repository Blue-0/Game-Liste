import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Accueil</Link> |
                <Link to="/about">À propos</Link> |
                <Link to="/contact">Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
