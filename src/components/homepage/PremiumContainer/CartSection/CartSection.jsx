import { Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const CartSection = ({ cartData, setCartData, cartBox, setCartBox }) => {
  //delete btn function for cart
  const handelDeletedBtn = (data) => {
    const filteredData = cartData.filter(
      (selectedDta) => selectedDta.name !== data.name,
    );
    setCartData(filteredData);
    toast.error(`${data.name} deleted successfully`);
  };
  // display total price
  const totalPrice = cartData.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0,
  );

  //handel Checkout function for button
  const handelCheckoutBtn = () => {
    setCartData([]);
    setCartBox(false);
    toast.warning("Check-Out successfull");
    // toast("Check-Out successfull", {
    //   style: {
    //     background: "#FACC15",
    //     color: "#000",
    //   },
    // });
  };

  return (
    <div>
      {cartBox ? (
        <div className="container mx-auto py-20 flex flex-col gap-3 items-center w-6/10">
          <h2 className="font-bold text-right mb-3">Your Cart</h2>
          {cartData.map((data, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center gap-6 p-7 rounded-2xl border w-full bg-[#F9FAFC]"
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
                  <Trash></Trash>
                </button>
              </div>
            );
          })}
          <div className="flex justify-between items-center w-full py-6 px-3">
            <p className="text-[#627382]">Total:</p>
            <h3 className="font-bold text-2xl">${totalPrice}</h3>
          </div>
          <button
            onClick={handelCheckoutBtn}
            className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-9/10 rounded-4xl font-bold text-white
         mt-7 py-7 text-lg"
          >
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <div className="container mx-auto py-40 flex flex-col gap-3 items-center w-6/10">
          <h2 className="text-2xl font-bold">Cart is Empty</h2>
          <p className="text-[#627382]">Select product from Products Tab</p>
        </div>
      )}
    </div>
  );
};

export default CartSection;
