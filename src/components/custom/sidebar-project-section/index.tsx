import React from "react";

import { IoAddOutline, IoChevronBackOutline } from "react-icons/io5";

export const SidebarProjectSection = () => {
  return (
    <span className="flex justify-between items-center w-full">
      <span className="flex">
        <h5 className="font-semibold text-[#0000008f]">Projects</h5>
      </span>
      <span className="flex gap-2">
        <button className="text-lg text-gray-400 hover:text-gray-800">
          <IoAddOutline />
        </button>
        <button className="text-lg text-gray-400 hover:text-gray-800">
          <IoChevronBackOutline />
        </button>
      </span>
    </span>
  );
};
