import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from "./pages/LandingPage";
import AboutUsPage from "./pages/AboutUsPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import MagazinePage from "./pages/MagazinePage";
import GalleryPage from "./pages/GalleryPage";
import ProjectView from "./pages/ProjectView";

function App() {

  return (
    <>
    <Router basename="/LEO-SUSL">

    <ScrollToTop />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/projects" element={<ProjectPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/magazine" element={<MagazinePage/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/project-view" element={<ProjectView/>} />
      </Routes>

    </Router>
    </>
  )
}

export default App
