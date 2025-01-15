import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6  ">
      <div>
        <h3 className="font-xl font-bold text-gray-600 ">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold text-black py-3">DishDash</h1>
      </div>
      <div className="">
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search Here"
          className="p-3 border border-gray-400 text-sm outline-none w-full lg:w-[25vw] rounded-lg"
          onChange={(e) => {
            dispatch(setSearch(e.target.value))
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
