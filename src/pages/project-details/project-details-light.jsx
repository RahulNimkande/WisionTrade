import React from "react";  
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar";
import ProjectDetailsHeader from "../../components/Project-details-header";
import ProjectDetailsIntroduction from "../../components/Project-details-introduction";
import ProjectDetailsImages from "../../components/Project-details-images";
import ProjectDetailsDescription from "../../components/Project-details-description";
import ProjectDetailsVideo from "../../components/Project-details-video";
import NextProject from "../../components/Next-project";
import SmallFooter from "../../components/Small-footer";
import { useRouter } from "next/router";
import portfolio1Data from "../../data/sections/portfolio1.json";
import Link from "next/link";

const ProjectDetailsLight = () => {
  const router = useRouter();
  const { id } = router.query;
  const prod = portfolio1Data.find(item => item.id == id);
  // const prodTitle = prod ? prod.title : '';
  console.log(prod);
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
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      {/* <ProjectDetailsHeader/> */}
      <ProjectDetailsIntroduction prod={prod}/>
      {/* <ProjectDetailsImages /> */}
      {/* <ProjectDetailsDescription /> */}
      {/* <ProjectDetailsVideo
        videoBackground="/img/portfolio/project1/bg.jpg"
        videoType="vimeo"
        videoId={127203262}
      /> */}
      {/* <NextProject
        projectImage="/img/portfolio/project2/bg.jpg"
        projectTitle="Inspiring new space."
      /> */}
      <SmallFooter />
    </LightTheme>
  );
};

export default ProjectDetailsLight;
