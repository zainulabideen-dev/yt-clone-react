import React from "react";

export const NavItemComp = ({ list, seperator = false }) => {
  return (
    <div className="w-full p-3">
      {seperator ? <div className="h-[1px] bg-slate-700 w-full mb-3" /> : null}
      {list.map((item) => {
        return (
          <div
            className={`flex hover:bg-slate-800 p-2 cursor-pointer rounded-md ${
              item.name === "Home" ? "bg-gray-600" : ""
            }`}
            key={item.id}
          >
            {item.image}
            <p className="text-white ml-5 text-sm">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};
