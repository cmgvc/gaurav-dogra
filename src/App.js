import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Corrected import
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter> {/* Corrected from Router to BrowserRouter */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
