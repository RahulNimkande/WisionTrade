import React from "react";
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar";
import WorksThreeColumnWithFilter from "../../components/Works-three-column-with-filter";
import SmallFooter from "../../components/Small-footer";
import addParlx from "../../common/addParlx";
import PortfolioCustomColumn from "../../components/Portfolio-custom-column";

const Works2Light = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    document.querySelector("body").classList.add("menubarblack");
    setPageLoaded(true);
    if (pageLoaded) {
      addParlx();
    }
  }, [pageLoaded]);
  React.useEffect(() => {
    var navbar = navbarRef.current;
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
    setTimeout(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
        if (MainContent.current) {
          MainContent.current.style.marginTop = slidHeight + "px";
        }
      }
    }, 0);
  }, [fixedHeader, MainContent, navbarRef]);

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <header
        ref={fixedHeader}
        className="works-header fixed-slider hfixd valign"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="parlx">
                  <h2 className="custom-font">Fabrics</h2>
                  <p>
                    Our export solutions for fabrics cater to the fashion and
                    textiles industry, where quality and aesthetics are
                    paramount. We export a diverse range of fabrics, including
                    cotton, silk, linen, and synthetic materials. From assisting
                    with sourcing and quality inspections to arranging efficient
                    logistics and delivery, we ensure that your fabrics reach
                    their intended destinations in optimal condition, ready to
                    be transformed into stunning creations.
                  </p>
                </div>

                <div className="bactxt custom-font valign">
                  <span className="full-width">Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div ref={MainContent} className="main-content">
      <h1 style={{padding:"0% 20% 30% 20%"}}>NO PRODUCTS</h1>
      {/* <PortfolioCustomColumn column={3} hideFilter="false"/> */}
        <SmallFooter />
      </div>
    </LightTheme>
  );
};

export default Works2Light;
