import React, {useEffect} from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Adding the Tawk.to script dynamically
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/67395f214304e3196ae3c3f5/1ics1n70a';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
  }, []);

  return (
    <div className="App">
      <Home />
      <About />
      <Products />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
