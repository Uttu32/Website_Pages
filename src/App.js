import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/global/Footer";
import Navbar from "./components/global/Navbar";
import Home from "./pages/Home";
import Milestone from "./pages/Milestone";
import PrenatalScreening from "./pages/PrenatalScreening";
import Social from "./pages/Social";

function App() {
  return (
    <div className="max-w-[1536px] m-auto">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/social" element={<Social />} />
          <Route path="/milestone" element={<Milestone />} />
          <Route path="/screening" element={<PrenatalScreening />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
