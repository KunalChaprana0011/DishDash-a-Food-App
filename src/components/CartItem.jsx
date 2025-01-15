import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/CartSlice";
import { incrementQty } from "../redux/slices/CartSlice";
import { decrementQty } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({id,name,price,qty,img}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex p-2 rounded-xl gap-2 shadow-md mb-3 bg-white">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id }))
          toast(`${name} removed!`, {
            icon: '👋',
          });
        }}
       className="absolute right-7 text-gray-600 hover:text-red-700 cursor-pointer " />
      <img
        src={img}
        alt=""
        className="w-[60px] h-[50px] gap-2  mx-0"
      />
      <div className="leading-2">
        <h3 className="font-bold text-gray-800">
          {name}
        </h3>

        <div className="flex justify-between">
          <span className="text-green-600 font-bold">₹{price}</span>
          
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus onClick={() => qty > 1 ? dispatch(decrementQty({id})) : dispatch(removeFromCart({id}))} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-red-600 hover:border-none rounded-lg p-1 text-xl transition-all ease-linear cursor-pointer" />
            <span>{qty}</span>
            <AiOutlinePlus onClick={() => dispatch(incrementQty({id}))}  className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-600 hover:border-none rounded-lg p-1 text-xl transition-all ease-linear cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  qty: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};


export default CartItem;
