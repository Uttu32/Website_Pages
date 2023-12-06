import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/global/Footer";
import Navbar from "./components/global/Navbar";
import Character from "./pages/Character";
import EducationalNeeds from "./pages/EducationalNeeds";
import Home from "./pages/Home";
import HowToTell from "./pages/HowToTell";
import Milestone from "./pages/Milestone";
import PrenatalScreening from "./pages/PrenatalScreening";
import Social from "./pages/Social";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollOffset = window.scrollY;
    setIsVisible(scrollOffset > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="max-w-[1536px] m-auto relative">
      <BrowserRouter>
        {isVisible && (
          <BsArrowUp
            onClick={scrollToTop}
            color="#fff"
            className="fixed bottom-5 right-5 w-10 h-10 md:w-20 md:h-20 footer__gradient rounded-full p-2 md:p-4 cursor-pointer border border-[#6931AA]"
          />
        )}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/needs" element={<EducationalNeeds />} />
          <Route path="/social" element={<Social />} />
          <Route path="/how" element={<HowToTell />} />
          <Route path="/signature" element={<Character />} />
          <Route path="/milestone" element={<Milestone />} />
          <Route path="/screening" element={<PrenatalScreening />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
