import "./App.css";
import Home from "./components/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Experience from "./pages/Experience";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

function App() {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
