import { Link } from "react-router-dom";
import FeaturesSkeleton from "../../skeleton/features-skeleton";
import FeatureStore from "../../store/FeatureStore";


const Features = () => {
       const { FeatureList } = FeatureStore();

if (FeatureList === null) {
  return <FeaturesSkeleton/>;
} else {
  return (
    <div className="container section">
      <div className="row">
        {
          FeatureList.map((item,i)=>{
            return (
              <div className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-3">
                          <img alt="img" className="w-100" src={item.img} />
                        </div>
                        <div className="col-9">
                          <h3 className="bodyXLarge">{item.name}</h3>
                          <span className="bodySmal">{item.description}</span>
                        </div>
                      </div>
                    </div>
                  </div>
             
                </div>
            );
          })
        }
      </div>
    </div>
  );
}
};

export default Features;