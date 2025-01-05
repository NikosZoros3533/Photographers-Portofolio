// src/App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu"
import Home from "./pages/Home";
import Couples from "./pages/Couples";
import Portraits from "./pages/Portraits";
import Shops from "./pages/Shops";
import StudioPortraits from "./pages/StudioPortraits";
import About from "./pages/About";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/couples" element={<Couples />} />
        <Route path="/portraits" element={<Portraits />} />
        <Route path="/food" element={<Shops />} />
        <Route path="/studio-portraits" element={<StudioPortraits />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
