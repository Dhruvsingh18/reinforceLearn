import React from 'react';

import LandingPage from "./reinforceLearn";
import AboutPage from "./about";
import CurriculumPage from "./curric";
import FAQSection from "./faq";
import ContactPage from "./contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

    
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/curriculum" element={<CurriculumPage />} />
        <Route path="/faq" element={<FAQSection />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
