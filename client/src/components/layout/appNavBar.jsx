import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/plainb-logo.svg";
import ProductStore from "./../../store/ProductStore";
import UserStore from "../../store/UserStore";
import UserSubmitButton from "../user/UserSubmitButton";
import toast from "react-hot-toast";
import CartStore from "../../store/CartStore";
import { useEffect, useState } from "react";
import WishStore from "../../store/WishStore";

const AppNavBar = () => {
  const navigate = useNavigate();
  const { SetSearchKeyword, SearchKeyword } = ProductStore();
  const { isLogin, UserLogoutRequest } = UserStore();
  const { CartListRequest, CartCount } = CartStore();
  const { WishListRequest, WishCount } = WishStore();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const onLogout = async () => {
    let res = await UserLogoutRequest();
    sessionStorage.clear();
    localStorage.clear();

    res ? navigate("/") : toast.error("Something Went Wrong");
  };

  useEffect(() => {
    (async () => {
      if (isLogin()) {
        await CartListRequest();
        await WishListRequest();
      }
    })();
  }, []);

  return (
    <div>
      <div className="container-fluid text-white p-2 bg-success">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6">
              <span>
                <span className="f-12">
                  <i className="bi bi-envelope"></i> Support@PlanB.com{" "}
                </span>
                <span className="f-12 mx-2">
                  <i className="bi bi-phone"></i> 01774688159{" "}
                </span>
              </span>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <span className="bodySmall mx-2">
                <i className="bi bi-whatsapp"></i>
              </span>
              <span className="bodySmall mx-2">
                <i className="bi bi-youtube"></i>
              </span>
              <span className="bodySmall">
                <i className="bi bi-facebook"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white py-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="img-fluid" src={logo} alt="Logo" width="96px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            aria-controls="nav06"
            aria-expanded={isNavbarOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span
              className={`navbar-toggler-icon ${isNavbarOpen ? "d-none" : ""}`}
            ></span>
            <span
              className={`navbar-toggler-close ${isNavbarOpen ? "" : "d-none"}`}
            >
              <i className="bi bi-x"></i>
            </span>
          </button>
          <div
            className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
            id="nav06"
          >
            <ul className="navbar-nav ms-lg-3">
              <li className="nav-item me-4">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {/* Add other nav links here */}
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <div className="input-group">
              <input
                onChange={(e) => SetSearchKeyword(e.target.value)}
                className="form-control"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <Link
                to={
                  SearchKeyword.length > 0
                    ? `/by-keyword/${SearchKeyword}`
                    : `/`
                }
                className="btn btn-outline-dark"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ width: 24, height: 24 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </Link>
            </div>
            <Link
              to="/cart"
              type="button"
              className="btn ms-2 btn-light position-relative"
            >
              <i className="bi text-dark bi-bag"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                {CartCount}
              </span>
            </Link>
            <Link
              to="/wish"
              type="button"
              className="btn ms-2 btn-light d-flex position-relative wishlist-btn"
            >
              <i className="bi text-dark bi-heart"></i>
              <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                {WishCount}
              </span>
            </Link>
            {isLogin() ? (
              <>
                <UserSubmitButton
                  onClick={onLogout}
                  text="Logout"
                  className="btn ms-3 btn-success d-flex"
                />
                <Link
                  type="button"
                  className="btn ms-3 btn-success d-flex"
                  to="/profile"
                >
                  Profile
                </Link>
              </>
            ) : (
              <Link
                type="button"
                className="btn ms-3 btn-success d-flex"
                to="/login"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      <style>
        {`
          @media (max-width: 768px) {
            .wishlist-btn {
              font-size: 14px;
              padding: 5px 10px;
            }
            .wishlist-btn .bi-heart {
              font-size: 18px;
            }

            .navbar-toggler {
              border-color: transparent;
            }

            .navbar-toggler-icon {
              background-color: green; /* Custom color */
            }

            .navbar-toggler-close i {
              color: #000; /* Close button color */
            }

            .navbar-nav {
              margin-top: 10px;
            }

            .nav-link {
              padding: 10px;
              text-align: center;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AppNavBar;
