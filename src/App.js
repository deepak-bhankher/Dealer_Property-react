import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FilterForm from "./components/FilterForm";
import PropertyDetail from "./components/PropertyDetail";
import RecentProperties from "./components/RecentProperties";
import GallerySlider from "./components/GallerySlider";
import AboutSection from "./components/AboutSection";
import AboutHighlights from "./components/AboutHighlights";
import AgentsSection from "./components/AgentsSection";
import SkillsSection from "./components/SkillsSection";
import BlogPage from "./components/BlogPage";
import { Footer } from "./components/Footer"; 
import Contact from "./components/Contact";  

function App() {
  return (
    <Router>
      <div className="App font-sans">
  <Navbar />
        <Routes>
          <Route
            path="/"
            element={
               <>
                <HeroSection />
                <FilterForm />
                <PropertyDetail />
                <RecentProperties />
                <GallerySlider />
              </>
            }
          />

     
          <Route
            path="/about"
            element={
              <>
                <AboutSection />
                <AboutHighlights />
                <AgentsSection />
                <SkillsSection />
              </>
            }
          />

      
          <Route path="/blog" element={<BlogPage />} />

          
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
