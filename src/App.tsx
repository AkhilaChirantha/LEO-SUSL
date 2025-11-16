import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from "./pages/LandingPage";
import AboutUsPage from "./pages/AboutUsPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";

function App() {

  return (
    <>
    <Router basename="/LEO-SUSL">

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/projects" element={<ProjectPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>

    </Router>
    </>
  )
}

export default App
