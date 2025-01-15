import { IoStar } from "react-icons/io5";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({id,img,name,price,desc,rating,handleToast}) => {
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-[250px] p-5 bg-white rounded-2xl shadow-lg flex flex-col gap-3">
      <img src={img} 
      className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"/>
      <div className="flex justify-between text-sm">
        <h3 className="text-purple-800 ">{name}</h3>
        <span className="text-green-600">₹{price}</span>

      </div>
      <p className="text-sm font-semibold">{desc.slice(0,45)}</p>

      <div className="flex justify-between text-center ">
        <span className="flex items-center gap-2">
            <IoStar className="text-yellow-500  " />
        {rating}
        </span>
        <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-lg text-sm" onClick={() => {
          dispatch(addToCart({id,name,price,rating,qty:1,img}))
          handleToast(name);
        }}>Add to Cart</button>
        

      </div>
    </div>
  );
};

FoodCard.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    handleToast: PropTypes.func.isRequired,
  };

export default FoodCard;
