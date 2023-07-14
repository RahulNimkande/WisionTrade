import React from "react";
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar";
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
                  <h2 className="custom-font">Stones and Marbles</h2>
                  <p>
                    We specialize in the export of high-quality stones and
                    marbles sourced from reputable quarries. Whether it &apos;s
                    natural stone, granite, marble, or slate, we have a wide
                    selection to meet your project requirements. Our export
                    solutions cover the entire process, from packaging and
                    labeling to customs documentation and transportation,
                    ensuring that your stones and marbles arrive at their
                    destination in pristine condition.
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
        <PortfolioCustomColumn column={3} hideFilter="false" />
        {/* <PortfolioCustomColumn column={3} filterPosition="right" /> */}

        <SmallFooter />
      </div>
    </LightTheme>
  );
};

export default Works2Light;
