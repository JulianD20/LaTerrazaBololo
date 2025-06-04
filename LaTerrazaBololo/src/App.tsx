import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Location from './components/Location';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { menuData } from './data/menuData';
import './App.css';

function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-900 min-h-screen">
        <Toaster />
        <Navbar />
        <Hero />
        
        <div id="menu" className="container mx-auto px-4 py-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white relative z-10">
            Nuestro Menú
            <div className="h-2 w-24 bg-red-600 mx-auto mt-3"></div>
          </h2>
          
          {menuData.map((section, index) => (
            <MenuSection 
              key={section.id}
              id={section.id}
              title={section.title}
              items={section.items}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
        
        <Location />
        <Footer />
        <Cart />
      </div>
    </Router>
  );
}

export default App;