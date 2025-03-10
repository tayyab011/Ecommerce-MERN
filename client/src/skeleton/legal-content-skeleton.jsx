import Skeleton from "react-loading-skeleton";


const LegalContentSkeleton = () => {
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="card p-4 ">
                {Array.from({ length: 16 }).map(() => {
                  return <Skeleton count={3} className="bg-success" />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LegalContentSkeleton;