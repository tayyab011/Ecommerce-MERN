import { Link } from "react-router-dom";
import ProductStore from "../../store/ProductStore";
import StarRatings from "react-star-ratings/build/star-ratings.js";
import ProductsSkeleton from "../../skeleton/products-skeleton";

const Products = () => {
  const { ListByRemark, ListByRemarkRequest } = ProductStore(); // Ensure correct store usage

  return (
    <div className="section">
      <div className="container-fluid py-5 bg-white">
        <div className="row">
          <h1 className="headline-4 text-center my-2 p-0">Our Products</h1>
          <span className="bodySmal mb-3 text-center">
            Explore a World of Choices Across Our Most Popular
          </span>
          <div className="col-12">
            <div>
              <ul
                className="nav nav-pills p-3 justify-content-center mb-3"
                id="pills-tab"
                role="tablist"
              >
                {["new", "trending", "popular", "top", "special"].map(
                  (category, index) => (
                    <li className="nav-item" role="presentation" key={category}>
                      <button
                        onClick={() => ListByRemarkRequest(category)}
                        className={`nav-link ${index === 0 ? "active" : ""}`}
                        id={`pills-${category}-tab`}
                        data-bs-toggle="pill"
                        data-bs-target={`#pills-${category}`}
                        type="button"
                        role="tab"
                        aria-controls={`pills-${category}`}
                        aria-selected={index === 0 ? "true" : "false"}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </button>
                    </li>
                  )
                )}
              </ul>

              <div className="tab-content" id="pills-tabContent">
                {["new", "trending", "popular", "top", "special"].map(
                  (category, index) => (
                    <div
                      className={`tab-pane fade ${
                        index === 0 ? "show active" : ""
                      }`}
                      id={`pills-${category}`}
                      role="tabpanel"
                      aria-labelledby={`pills-${category}-tab`}
                      key={category}
                      tabIndex="0"
                    >
                      {ListByRemark === null ? (
                        <ProductsSkeleton />
                      ) : (
                        <div className="container">
                          <div className="row">
                            {ListByRemark.map((item, i) => {
                              const price = item.discount ? (
                                <p className="bodyMedium text-dark my-1">
                                  Price: <strike>${item.price}</strike> $
                                  {item.discountPrice}
                                </p>
                              ) : (
                                <p className="bodyMedium text-dark my-1">
                                  Price: ${item.price}
                                </p>
                              );

                              return (
                                <div
                                  className="col-md-3 p-2 col-lg-3 col-sm-6 col-12"
                                  key={i}
                                >
                                  <Link
                                    to={`/details/${item._id}`}
                                    className="card shadow-sm h-100 rounded-3 bg-white"
                                  >
                                    <img
                                      className="w-100 rounded-top-2"
                                      src={item.image}
                                      alt={item.title}
                                    />
                                    <div className="card-body">
                                      <p className="bodySmal text-secondary my-1">
                                        {item.title}
                                      </p>
                                      {price}
                                      <StarRatings
                                        rating={parseFloat(item.star)}
                                        starRatedColor="red"
                                        starDimension="15px"
                                        starSpacing="2px"
                                      />
                                    </div>
                                  </Link>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
