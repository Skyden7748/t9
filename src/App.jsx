import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Homem from './pages/Homem.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';
import CardContent from './pages/CardContent.jsx';
import Designer from './components/Designer.jsx';
import Devs from './components/Devs.jsx';
import Sarada from './components/Sarada.jsx';
import Sambit from './components/Sambit.jsx';
import Uiux from './pages/Uiux.jsx';
import Graphics from './pages/Graphics.jsx';
import Marketing from './pages/Marketing.jsx';
import Projects from './pages/Projects.jsx';
import Wealth from './pages/Wealth.jsx';
import Transform from './pages/Transform.jsx';
import Abhisek from './components/Abhisek.jsx';
import Aryan from './components/Aryan.jsx';
import ScrollToTop from './ScrollToTop.js';
import Fguy from './components/Fguy.jsx';
import FinanceGuys from './components/FinanceGuys.jsx';
import MarketingGuys from './components/MarketingGuys.jsx';
import Shubham from './components/Shubham.jsx';

function App() {
  const homeRef = useRef(); // Create a reference
  const isMobile = useMediaQuery({ query: '(max-width: 690px)' }); // Media query for responsiveness

  return (
    <Router>
      
      <Navbar/>

      <ScrollToTop/>
      
      <Routes>
      
        {/* Home Route */}
        <Route
          path="/"
          element={isMobile ? <Homem ref={homeRef} /> : <Home ref={homeRef} />}
        />
        {/* About Route */}
        
        <Route path="/about" element={<About />} />
        <Route path="/software" element={<CardContent />} />
        {/* Contact Route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/design" element={<Designer />} />
        <Route path="/develop" element={<Devs />} />
        <Route path="/sarada" element={<Sarada />} />
        <Route path="/aryan" element ={<Aryan/>}/>
        <Route path="/abhisek" element={<Abhisek/>}/>
        <Route path="/sambit" element = {<Sambit/>}/>
        <Route path="/UIUX" element={<Uiux/>}/>
        <Route path="/graphics" element={<Graphics/>}/>
        <Route path='/marketing' element={<Marketing/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/wealth' element={<Wealth/>}/>
        <Route path='/transform' element={<Transform/>}/>
        <Route path='/rikth' element = {<Fguy/>} />
        <Route path='/shubham' element = {<Shubham/>}/>
        <Route path='/finance' element = {<FinanceGuys/>}/>
        <Route path='/marketingteam' element = {<MarketingGuys/>}/>


      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
