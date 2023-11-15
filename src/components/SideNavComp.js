import React from "react";
import youtubeImage from "../assets/youtube.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { nav_list, nav_list_you } from "../constants";
import { NavItemComp } from "./NavItemComp";

export const SideNavComp = () => {
  return (
    <div className="w-[20%] h-[100%] bg-[#0F0F0F]">
      <div className="flex items-center w-full p-5">
        <div className="flex items-center justify-center w-[40px] h-[40px] hover:bg-slate-800 rounded-full">
          <IoReorderThreeOutline
            color="white"
            size={35}
            className="cursor-pointer"
          />
        </div>
        <img src={youtubeImage} alt="..." className="w-[40px] h-[40px] ml-5" />
        <p className="text-white text-2xl ml-1 font-medium">Youtube</p>
      </div>
      <NavItemComp list={nav_list} />
      <NavItemComp list={nav_list_you} seperator={true} />
    </div>
  );
};
