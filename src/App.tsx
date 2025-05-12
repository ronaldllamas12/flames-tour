import React from 'react';
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

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        { <Hero /> }
        {<FeaturedDestinations /> }
        { <TourPackages /> }
        { <SpecialOffers /> }
        {<Testimonials /> }
        { <BookingProcess />}
        { <About /> }
        { <Contact /> }
      </main>
      { <Footer /> }
    </div>
  );
}

export default App;
