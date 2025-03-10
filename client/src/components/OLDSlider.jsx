import { Link } from "react-router-dom";
import logo from "../assets/images/plainb-logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const OLDSlider = () => {
  return (
    <div>
      <div
        id="carouselExampleDark"
        className="carousel hero-bg carousel-dark slide"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>

        {/* main */}
        <div className="carousel-inner py-5">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                  <h1 className="headline-1">Title 1</h1>
                  <p>Description 1</p>
                  <Link to="/" className="btn text-white btn-success px-5">
                    Buy Now
                  </Link>
                </div>
                <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                  <img src={logo} className="w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="10000">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                  <h1 className="headline-1">Title 2</h1>
                  <p>Description 2</p>
                  <Link to="/" className="btn text-white btn-success px-5">
                    Buy Now
                  </Link>
                </div>
                <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                  <img src={logo} className="w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="10000">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                  <h1 className="headline-1">Title 3</h1>
                  <p>Description 2</p>
                  <Link to="/" className="btn text-white btn-success px-5">
                    Buy Now
                  </Link>
                </div>
                <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                  <img src={logo} className="w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="10000">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                  <h1 className="headline-1">Title 4</h1>
                  <p>Description 2</p>
                  <Link to="/" className="btn text-white btn-success px-5">
                    Buy Now
                  </Link>
                </div>
                <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                  <img src={logo} className="w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev btn rounded-5"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next btn"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default OLDSlider;
