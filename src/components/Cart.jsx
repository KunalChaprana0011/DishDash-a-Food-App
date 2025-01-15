import { IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  //pehla cart store wala dusra slice wala
  console.log(cartItems);

  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.qty * item.price,
    0
  );

  return (
    <>
      <div
        className={` fixed right-0 top-0 bg-white w-full lg:w-[25vw]  p-3 h-full ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 ease-in-out`}
        style={{
          backgroundImage : 'url(/bgggg.jpg)'
        }}
      >
        <div className="flex justify-between p-3 items-center ">
          <span className="font-semibold text-2xl text-gray-700">
            My Orders
          </span>
          <IoMdClose
            className="text-xl p-1 rounded-lg border border-gray-400 font-bold hover:text-red-800 hover:border-red-800 cursor-pointer "
            onClick={() => {
              setActiveCart(!activeCart);
            }}
          />
        </div>
        
        <div >
        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <CartItem
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                rating={food.rating}
                qty={food.qty}
                img={food.img}
              />
            );
          })
        ) : (
          <div className="flex justify-center items-center h-[70vh]">
            <h2 className=" text-center text-xl font-bold text-gray-400  items-center justify-center">
              Your Cart is Empty!
            </h2>
          </div>
        )}
        </div>



        <div className="fixed  bottom-0 w-full p-3 font-bold">
          <h3 className="mb-2 text-gray-700">Items: {totalQty}</h3>
          <h3 className="mb-2 text-gray-700">Total Price: ₹{totalPrice}</h3>
          <hr className="my-4" />
          <button 
          onClick={() => navigate("/success") }
          className="bg-green-500 text-sm rounded-lg px-3 py-2 font-bold w-[87vw] lg:w-[22vw] text-white hover:bg-green-600 hover:text-white ">
            CheckOut
          </button>
        </div>
      </div>


      <FaShoppingCart
        className={`fixed cursor-pointer right-4 bottom-4 bg-white rounded-full text-5xl shadow-md p-3 ${
          activeCart
            ? "hidden"
            : !"hidden transition-all ease-in-out duration-700 "
        }
        ${
          totalQty > 0 &&
          "animate-bounce delay-700 transition-all text-green-600"
        }`}
        onClick={() => setActiveCart(!activeCart)}
      />
    </>
  );
};

export default Cart;
