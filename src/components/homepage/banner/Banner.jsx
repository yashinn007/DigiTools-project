import React from "react";
import bannerImg from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto space-x-5 flex justify-center items-center gap-20 py-20">
        <div className="flex flex-col items-start justify-center space-y-3 py-30">
          <span className="px-4 py-2 rounded-4xl bg-purple-200 text-purple-600">
            New: AI-Powered Tools Available
          </span>
          <h2 className="font-extrabold text-7xl/snug">
            Supercharge Your
            <br /> Digital Workflow
          </h2>
          <p className="text-lg/snug text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity
            <br />
            software—all in one place. Start creating faster today.
            <br /> Explore Products
          </p>
          <span className="flex items-center justify-center gap-2">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white font-semibold text-[16px] py-6">
              Explore Products
            </button>
            <button className="rounded-4xl font-bold text-[16px] py-[11px] px-6 text-[#4F39F6] border-2 border-[#4F39F6]">
              Watch Demo
            </button>
          </span>
        </div>
        <div>
          <img src={bannerImg} alt="" />
        </div>
      </div>
      {/* counter section */}
      <div className="py-15 bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center gap-20">
        <span className="text-center">
          <h4 className="font-extrabold text-6xl text-white">50K+</h4>
          <p className="text-xl text-white">Active Users</p>
        </span>
        <div className="divider divider-primary lg:divider-horizontal"></div>
        <span className="text-center">
          <h4 className="font-extrabold text-6xl text-white">200+</h4>
          <p className="text-xl text-white">Premium Tools</p>
        </span>
        <div className="divider divider-primary lg:divider-horizontal"></div>
        <span className="text-center">
          <h4 className="font-extrabold text-6xl text-white">4.9</h4>
          <p className="text-xl text-white">Rating</p>
        </span>
      </div>
    </div>
  );
};

export default Banner;
