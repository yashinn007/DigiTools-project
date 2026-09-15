import { Check } from "lucide-react";
import { toast } from "react-toastify";

const Card = ({ product, cartData, setCartData }) => {
  const { name, description, period, price, tag, features } = product;
  // check the cartData array for buy now btn
  const isInCart = cartData.some((cartItem) => cartItem.id === product.id);

  //  handelBuyNowBtn function
  const handelBuyNowBtn = () => {
    toast.success(`${product.name} added successfully`);
    setCartData((currentCart) => [...currentCart, product]);
  };

  return (
    <div className="card w-98 space-y-4 bg-base-100 shadow-xl/5 p-6 flex flex-col">
      <div className="flex justify-end">
        <span className="badge badge-secondary">{tag}</span>
      </div>
      <div className="w-12 p-2 rounded-full shadow-xl/10 inset-shadow-2xs">
        <img
          src="https://i.pinimg.com/474x/97/81/05/978105a6ea2f1d5debcafa76d57b6f4b.jpg"
          alt=""
        />
      </div>
      <h2 className="font-bold text-2xl text-black">{name}</h2>
      <p className="text-[#627382]">{description}</p>
      <h3 className="text-[#627382]">
        <span className="font-bold text-2xl text-black">${price}</span>/{period}
      </h3>
      <div className="text-[#627382]">
        {features.map((feature, index) => {
          return (
            <p key={index} className="flex">
              <Check className="text-green-600 mr-1.5"></Check> {feature}
            </p>
          );
        })}
      </div>
      <button
        onClick={handelBuyNowBtn}
        className={`w-full mt-auto font-semibold py-3 rounded-3xl 
          
          ${isInCart ? "bg-green-500" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"} text-white`}
        disabled={isInCart}
      >
        {isInCart ? "Added to Card" : "Buy Now"}
      </button>
    </div>
  );
};

export default Card;
