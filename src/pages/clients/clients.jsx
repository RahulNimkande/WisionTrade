import React,{useRef} from "react";
import Clients1 from "../../components/Clients1";
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import appData from "../../data/app.json";
import Footer from "../../components/Footer";

const Clients = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    });
  }, [navbarRef]);
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <VideoWithTestimonials />
      <br />
      <br />
      <br />
      <br />

      <Clients1 theme="light" subBG />
      <Footer />
    </LightTheme>
  );
};

export default Clients;
