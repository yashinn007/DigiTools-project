import React, { use, useState } from "react";
import Card from "./Card/Card";

const PremiumContainer = ({ productsDataPromise }) => {
  const productsData = use(productsDataPromise);
  //set state for products & card button
  const [productsBtn, setProductsBtn] = useState("productsClicked");
  return (
    <div className="py-28">
      <div className="flex flex-col space-y-4 justify-center items-center">
        <h3 className="font-extrabold text-5xl">Premium Digital Tools</h3>
        <p className="text-[#627382] text-center">
          Choose from our curated collection of premium digital products
          designed <br />
          to boost your productivity and creativity.
        </p>
        <div>
          <button
            onClick={() => setProductsBtn("productsClicked")}
            className={`btn ${productsBtn === "productsClicked" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""}  rounded-l-3xl font-bold `}
          >
            Products
          </button>
          <button
            onClick={() => setProductsBtn("cardClicked")}
            className={`btn ${productsBtn === "cardClicked" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} rounded-r-3xl font-bold`}
          >
            Cart (2)
          </button>
        </div>
      </div>

      {/* -----card container----- */}
      <div className="container mx-auto pt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* -----card----- */}
        {productsData.map((product) => (
          <Card
            key={product.id}
            product={product}
            productsBtn={productsBtn}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default PremiumContainer;
