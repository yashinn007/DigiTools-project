import { Trash } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const CartSection = ({ cartData, setCartData }) => {
  //delete btn function for cart
  const handelDeletedBtn = (data) => {
    const filteredData = cartData.filter(
      (selectedDta) => selectedDta.name != data.name,
    );
    setCartData(filteredData);
    toast.error(`${data.name} deleted successfully`);
  };

  return (
    <div className="container mx-auto py-20 flex flex-col gap-3 items-center">
      <h2 className="font-bold text-right mb-3">Your Cart</h2>
      {cartData.map((data, index) => {
        // console.log(data);
        return (
          <div
            key={index}
            className="flex justify-between items-center gap-6 p-7 rounded-2xl border w-6/10 bg-[#F9FAFC]"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 p-2 rounded-full shadow-xl/10 inset-shadow-2xs">
                <img
                  src="https://i.pinimg.com/474x/97/81/05/978105a6ea2f1d5debcafa76d57b6f4b.jpg"
                  alt=""
                />
              </div>
              <div>
                <h4 className="font-semibold text-[20px]">{data.name}</h4>
                <p className="text-[16px] font-medium text-[#627382]">
                  ${data.price}
                </p>
              </div>
            </div>
            <button
              onClick={() => handelDeletedBtn(data)}
              className="btn text-red-500 rounded-xl"
            >
              {" "}
              <Trash></Trash>{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CartSection;
