import StarRatings from "react-star-ratings";
import ProductStore from "../../store/ProductStore";


const Reviews = () => {
    const {ReviewList } = ProductStore();
    return (
      <div>
        <ul className="list-group list-group-flush">
          {
          
          ReviewList !== null ? (
            ReviewList.map((item, i) => {
              return (
                <li key={i} className="list-group-item">
                  <h6>
                    <i className="bi bi-person rounded  container-fluid bg-success text-light"></i>
                    {item.profile.cus_name}
                  </h6>
                  <p>{item.des}</p>
                  <StarRatings
                    rating={parseFloat(item.rating)}
                    starRatedColor="green"
                    starDimension="15px"
                    starSpacing="2px"
                  />
                </li>
              );
            })
          ) : (
            <span></span>
          )
          
          }
        </ul>
      </div>
    );
};

export default Reviews;