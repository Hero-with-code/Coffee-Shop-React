import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.js";
import Banner from "./components/Banner/Banner.js";
import AppStore from "./components/AppStore/AppStore.js";
import Testimonials from "./components/Testimonials/Testimonials.js";
import Footer from "./components/Footer/Footer.js";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
