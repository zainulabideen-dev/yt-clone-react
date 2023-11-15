import React from "react";
import manImage from "../assets/man.png";
import { useNavigate } from "react-router-dom";

export const VideosComp = ({ item }) => {
  const navigate = useNavigate();

  function _handleVideoClick() {
    navigate(`video/${item.id}`);
  }

  return (
    <div className="w-[30%] ml-3">
      <video
        src={item.link}
        className="cursor-pointer"
        onClick={() => _handleVideoClick()}
      />
      <div className="flex py-5">
        <img
          src={manImage}
          alt="..."
          className="w-[40px] h-[40px] rounded-full"
        />
        <div className="ml-5">
          <p className="text-white font-medium">{item.name}</p>
          <p className="text-gray-400 text-sm">{item.channel}</p>
          <p className="text-gray-400 text-sm">{`${item.views} . ${item.time}`}</p>
        </div>
      </div>
    </div>
  );
};
