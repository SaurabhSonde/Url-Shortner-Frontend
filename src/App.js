import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import UrlForm from "./components/FormComponent/UrlForm";
import Footer from "./components/Footer/Footer";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";

const App = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <UrlForm />
      <FeaturesSection />
      <Footer />
    </>
  );
};

export default App;
