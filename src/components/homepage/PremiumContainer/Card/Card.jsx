import React from "react";
import { Check } from "lucide-react";

const Card = ({ product, productsBtn }) => {
  console.log(product);
  const { name, description, period, price, tag, features } = product;
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
        {features.map((feature) => {
          return (
            <p className="flex">
              <Check className="text-green-600 mr-1.5"></Check> {feature}
            </p>
          );
        })}
      </div>
      <button className="w-full mt-auto font-semibold py-3 rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
        Buy Now
      </button>
    </div>
  );
};

export default Card;
