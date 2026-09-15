import React from "react";
import User from "../../../assets/user.png";

const IconBox = () => {
  return (
    <div>
      <div className="container mx-auto pt-7 pb-20 space-y-10">
        <div className="text-center space-y-4 py-15">
          <h2 className="font-extrabold text-5xl">Get Started in 3 Steps</h2>
          <p className="text-[#627382]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* cart-1 */}
          <div className="pb-20">
            <div className="flex justify-end mr-15">
              <p className="p-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-10 text-center">
                01
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center mt-9 px-7">
              <img
                src={User}
                alt=""
                className="p-3 rounded-full bg-purple-200"
              />
              <h3 className="font-bold text-2xl">Create Account</h3>
              <p className="text-[#627382] text-center">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          {/* cart-2 */}
          <div className="pb-20">
            <div className="flex justify-end mr-15">
              <p className="p-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-10 text-center">
                02
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center mt-9 px-7">
              <img
                src={User}
                alt=""
                className="p-3 rounded-full bg-purple-200"
              />
              <h3 className="font-bold text-2xl">Choose Products</h3>
              <p className="text-[#627382] text-center">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          {/* cart-3 */}
          <div className="pb-20">
            <div className="flex justify-end mr-15">
              <p className="p-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-10 text-center">
                03
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center mt-9 px-7">
              <img
                src={User}
                alt=""
                className="p-3 rounded-full bg-purple-200"
              />
              <h3 className="font-bold text-2xl">Start Creating</h3>
              <p className="text-[#627382] text-center">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconBox;
