import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedDestinations } from './components/FeaturedDestinations';
import { TourPackages } from './components/TourPackages';
import { Testimonials } from './components/Testimonials';
import { SpecialOffers } from './components/SpecialOffers';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingProcess } from './components/BookingProcess';
import Reserva from './pages/Reserva';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark">
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Hero />
                <FeaturedDestinations />
                <TourPackages />
                <SpecialOffers />
                <Testimonials />
                <BookingProcess />
                <About />
                <Contact />
                <Footer />
              </>
            }/>
            <Route path="/reserva" element={<Reserva />} />
          </Routes>
        </main>
        
      
      </div>
    </BrowserRouter>
  );
}

export default App;
