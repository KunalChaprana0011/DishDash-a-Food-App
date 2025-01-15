import FoodData from "../data/data";
import FoodCard from "./FoodCard";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";


const FoodItems = () => {
  const handleToast = (name) => {
    toast.success(`${name} added to cart`);
  };

  const category = useSelector((state) => state.category.category)
  const search = useSelector((state) => state.search.search)
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className=" mx-6 flex flex-wrap justify-center lg:justify-start gap-10 my-6">
        {FoodData.filter((food) => {
          if(category === "All"){
            return food.name.toLowerCase().includes(search.toLowerCase());
          }
          else{
            return category === food.category && food.name.toLowerCase().includes(search.toLowerCase());
          }

        }).map((food) => {
          return (
            <FoodCard
            key={food.id}
            id={food.id}
            img={food.img}
            name={food.name}
            price={food.price}
            rating={food.rating}
            desc={food.desc}
            category={food.category}
            handleToast = {handleToast}
            />
          );
        })
        }


        
      </div>
    </>
  );
};

export default FoodItems;
