import React from "react";
import { HeaderComp } from "../../components/HeaderComp";
import { SideNavComp } from "../../components/SideNavComp";
import { video_list } from "../../constants";
import { VideosComp } from "../../components/VideosComp";

export const HomePage = () => {
  return (
    <div className="w-screen h-screen flex">
      <SideNavComp />
      <div className="w-[80%] h-screen">
        <HeaderComp />
        <div className="h-[90%] w-full bg-[#0F0F0F] py-5">
          <div className="flex justify-center">
            {video_list.map((item) => {
              return <VideosComp key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
