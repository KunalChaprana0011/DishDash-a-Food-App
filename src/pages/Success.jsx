import { PropagateLoader } from "react-spinners";
import { useEffect, useState } from "react";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      {loading ? (
        <PropagateLoader color="#085957" className="transition-all  ease-in-out" />
      ) : (
        <div>
          <h2 className="text-xl lg:text-3xl text-center font-bold mb-4 text-gray-600 items-center">
            {" "}
            😊Yay! Order Successful!!!
          </h2>
          <p className="text-center font-semibold text-gray-500">
            Your Order has been placed!!
          </p>
        </div>
      )}
    </div>
  );
};

export default Success;
