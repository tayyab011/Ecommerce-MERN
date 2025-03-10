import LegalContentSkeleton from "../../skeleton/legal-content-skeleton";
import FeatureStore from "../../store/FeatureStore";

import parse from "html-react-parser"
const LegalContents = () => {

       const { LegalDetails} = FeatureStore();

       if (LegalDetails === null) {
        return <LegalContentSkeleton/>
       }else{
return (
  <div>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card p-4 ">
            {LegalDetails.map((e, index) => (
              <div key={index}>{parse(e.description)}</div> 
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
       }
    
};

export default LegalContents;