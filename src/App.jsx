// src/App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import React, { Suspense, lazy } from "react";
import Footer from "./components/Footer";
import LoadSpinner from "./components/LoadSpinner";

const Home = lazy(() => import("./pages/Home"));
const Couples = lazy(() => import("./pages/Couples"));
const Portraits = lazy(() => import("./pages/Portraits"));
const Shops = lazy(() => import("./pages/Shops"));
const StudioPortraits = lazy(() => import("./pages/StudioPortraits"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <Router>
      <Menu />
      <Suspense fallback={<LoadSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/couples" element={<Couples />} />
          <Route path="/portraits" element={<Portraits />} />
          <Route path="/food" element={<Shops />} />
          <Route path="/studio-portraits" element={<StudioPortraits />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
