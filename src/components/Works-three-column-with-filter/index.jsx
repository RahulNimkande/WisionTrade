/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksThreeColumnWithFilter = ({ filterPosition }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000)
    }
  }, [pageLoaded]);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="row">
          <div
            className={`filtering ${
              filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                ? "text-left"
                : "text-right"
            } smplx col-12`}
          >
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".brand">Branding</span>
              <span data-filter=".web">Mobile App</span>
              <span data-filter=".graphic">Creative</span>
            </div>
          </div>

          <div className="gallery full-width">

            <div className="col-lg-4 col-md-6 items graphic lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">
                  <a>
                    <img src="/img/products/marbles/Black-Marble.jpg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Black Marble</h6>
                 
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">
                  <a>
                    <img src="/img/products/marbles/HM-ONYX.jpg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>HM Onyx</h6>
                 
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">
                  <a>
                    <img src="/img/products/marbles/Z-Mercury.jpg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont  ">
                <h6>Z Mercury</h6>
                 
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">
                  <a>
                    <img src="/img/products/marbles/Onyx-White.jpg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Onyx White</h6>
                 
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">
                  <a>
                    <img src="/img/products/marbles/Rain-Forest-Gold.jpg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Rain Forest Gold</h6>
                 
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">
                  <a>
                    <img src="/img/products/marbles/Rosa-Levanto.jpg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Rosa Levanto</h6>
                 
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">
                  <a>
                    <img src="/img/products/marbles/Spider-Green.jpg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Spider Green</h6>
                 
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">
                  <a>
                    <img src="/img/products/marbles/ONYX-HONEY.jpg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Onyx Honey</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksThreeColumnWithFilter;
