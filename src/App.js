import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home/Home";
import Solutions from "./Components/Pages/Home/Solutions";
import Products from "./Components/Pages/Home/Products";
import SecurityPage from "./Components/Pages/Home/SecurityPage";
import Recent from "./Components/Pages/Home/Recent";
import Testimonial from "./Components/Pages/Home/Testimonial";
import NewIn from "./Components/Pages/Home/NewIn";
import Request from "./Components/Pages/Home/Request";
import Footer from "./Components/Pages/Home/Footer";
import Shop from "./Components/Pages/Shop/Shop";
import Category from "./Components/Pages/Shop/Category";
import Gallery from "./Components/Pages/Shop/Gallery";
import About from "./Components/Pages/About/index";
import Reasons from "./Components/Pages/About/Reasons";
import ClientsSay from "./Components/Pages/About/ClientsSay";
import TeamMembers from "./Components/Pages/About/TeamMembers";
import Blog from "./Components/Pages/Blog/Blog";
import News from "./Components/Pages/Blog/News";
import Contact from "./Components/Pages/Contact/Contact";
import Getin from "./Components/Pages/Contact/Getin";

import ProductDetails from "./Components/Pages/Shop/ProductDetails";
import Details2 from "./Components/Pages/Shop/Details2";
import Details3 from "./Components/Pages/Shop/Details3";
import Details4 from "./Components/Pages/Shop/Details4";
import Details5 from "./Components/Pages/Shop/Details5";
import Details6 from "./Components/Pages/Shop/Details6";
import Details7 from "./Components/Pages/Shop/Details7";
import Details8 from "./Components/Pages/Shop/Details8";
import { useEffect, useRef } from "react";

function App() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }

      // Magnetic Effect Logic
      const magneticElements = document.querySelectorAll('.btn-primary, .btn-ghost, .icon-circle');
      magneticElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const distance = Math.sqrt(x * x + y * y);

        if (distance < 100) {
          el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
        } else {
          el.style.transform = '';
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 position-relative" style={{ background: 'var(--bg-2)', backgroundAttachment: 'fixed' }}>
        <div ref={glowRef} className="cursor-glow d-none d-lg-block"></div>
        <Navbar />
        <div className="flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={
                <div className="stagger-reveal">
                  <Home />
                  <Solutions />
                  <Products />
                  <SecurityPage />
                  <Recent />
                  <Testimonial />
                  <NewIn />
                  <Request />
                </div>
              }
            />

            <Route path="/shop" element={<Shop />}>
              <Route index element={<Gallery />} />
              <Route path="category" element={<Category />} />
            </Route>


            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/details2/:id" element={<Details2 />} />
            <Route path="/details3/:id" element={<Details3 />} />
            <Route path="/details4/:id" element={<Details4 />} />
            <Route path="/details5/:id" element={<Details5 />} />
            <Route path="/details6/:id" element={<Details6 />} />
            <Route path="/details7/:id" element={<Details7 />} />
            <Route path="/details8/:id" element={<Details8 />} />

            <Route path="/about" element={<About />} />
            <Route path="/reasons" element={<Reasons />} />
            <Route path="/clientsSay" element={<ClientsSay />} />
            <Route path="/team" element={<TeamMembers />} />

            <Route path="/blog" element={<News />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/getin" element={<Getin />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;