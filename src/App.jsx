// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Homepage from './components/Homepage';
import Layout from './components/Layout';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
    const location = useLocation();
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        setIsTransitioning(true);
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [location]);

    // Simplified transition overlay
    const TransitionOverlay = () => (
        <div
            className={`fixed inset-0 z-50 bg-black transition-opacity duration-300 ${
                isTransitioning ? 'opacity-50' : 'opacity-0 pointer-events-none'
            }`}
        />
    );

    return (
        <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
            <TransitionOverlay />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route element={<Layout />}>
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;