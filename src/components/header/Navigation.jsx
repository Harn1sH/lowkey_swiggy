import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/slice/cartSlice.js";
import { useState } from "react";

export default function Navigation() {
  const [item, setItems] = useState(0);
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const add = () => {
    dispatch(addItem());
  };

  const subract = () => {
    dispatch(removeItem());
  };
  return (
    <>
      <div className=" border-b-2 border-black p-3 flex justify-between">
        <div>img</div>
        <div className="flex gap-x-4 text-[15px] font-semibold">
          <span className="cursor-pointer hover:scale-110 transition-all duration-150">
            Home
          </span>
          <span className="cursor-pointer hover:scale-110 transition-all duration-150">
            About Us
          </span>
          <span className="cursor-pointer hover:scale-110 transition-all duration-150">
            Contact Us
          </span>
          <span className="cursor-pointer hover:scale-110 transition-all duration-150">
            cart({cartItems})
          </span>
          <div className="text-2xl text-center flex justify-between gap-x-1 mx-4 px-2 w-5">
            <button className="" onClick={() => add()}>
              +
            </button>
            <button className="mr-3" onClick={subract}>
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
