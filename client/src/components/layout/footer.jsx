import { Link } from "react-router-dom";


const Footer = () => {
    return (
      <div>
        Footer Component
        <div className="container section">
          <div className="row">
            <div className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                      <img className="w-100" src="" />
                    </div>
                    <div className="col-9">
                      <h3 className="bodyXLarge">name</h3>
                      <span className="bodySmal">description</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="section-bottom shadow-sm bg-light">
            <div className="container py-5">
              <div className="row">
                <div className="col-md-4">
                  <h1 className="bodyMedium">Legals</h1>
                  <p className="my-2">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </p>
                  <p className="my-2">
                    <Link className="nav-link" to="/refund">
                      Refund Policy
                    </Link>
                  </p>
                  <p className="my-2">
                    <Link className="nav-link" to="/privacy">
                      Privacy Policy
                    </Link>
                  </p>
                  <p className="my-2">
                    <Link className="nav-link" to="/terms">
                      Terms
                    </Link>
                  </p>
                </div>
                <div className="col-md-4">
                  <h1 className="bodyMedium">Information</h1>
                  <p className="my-2">
                    <Link className="nav-link" to="/how-to-buy">
                      How to buy
                    </Link>
                  </p>
                  <p className="my-2">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </p>
                  <p className="my-2">
                    <Link className="nav-link" to="/complain">
                      Complain
                    </Link>
                  </p>
                </div>
                <div className="col-md-4">
                  <h1 className="bodyMedium">About</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum{" "}
                  </p>
                  <img
                    className="w-75"
                    src="https://www.uiu.ac.bd/wp-content/uploads/2021/02/Card-Logo-Pay-With-01-
1.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-dark py-3 text-center">
            <p className="text-white bodySmal">All Rights Reserved </p>
          </div>
        </div>
      </div>
    );
};

export default Footer;