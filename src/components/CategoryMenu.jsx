import { useState, useEffect } from "react";
import FoodData from "../data/data";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";
import { useSelector } from "react-redux";



const CategoryMenu = () => {

    const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);

  const listuniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listuniqueCategories();
  }, []);

  const selectedCategory = useSelector((state) => state.category.category)

  return (
    <div>
      <h3 className="mx-6 text-xl front-bold text-gray-600 ">
        Find the Best Food
      </h3>
      <div className="flex  gap-3 my-5 mx-6 overflow-x-scroll lg:overflow-x-hidden  scroll-smooth ">
        <button 
        onClick={() => dispatch(setCategory("All"))}
        className={`bg-gray-300 text-black py-2 font-semibold px-3 rounded-lg hover:bg-green-600 hover:text-white ${selectedCategory === "All" &&  "bg-green-600 text-white" }`}>
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              className={`bg-gray-300 text-black py-2 font-semibold px-3 rounded-lg hover:bg-green-600 hover:text-white ${selectedCategory === category &&  "bg-green-600 text-white" } `}
              onClick={() => dispatch(setCategory(category))}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
