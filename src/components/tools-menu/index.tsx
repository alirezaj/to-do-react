import React from "react";
import {
  IoCheckmarkCircleOutline,
  IoCloudDownloadOutline,
  IoCloudUploadOutline,
  IoCubeOutline,
  IoDuplicateOutline,
  IoListOutline,
  IoMailOutline,
} from "react-icons/io5";

export const ToolsMenu = () => {
  return (
    <div className="flex flex-col w-56 absolute -translate-x-2/4 rounded-sm mt-1">
      <ul className="flex flex-col items-center shadow-menu py-2 w-full">
        <li className="flex items-center hover:bg-[#eee] hover:rounded-sm w-full p-1 gap-x-2">
          <span>
            <IoDuplicateOutline className="w-7 h-5" />
          </span>
          <span>
            <h5 className="text-sm capitalize">Add Section</h5>
          </span>
        </li>
        <li className="w-11/12 m-1">
          <div className="border-y border-gray-100"></div>
        </li>
        <li className="flex items-center hover:bg-[#eee] hover:rounded-sm w-full p-1 gap-x-2">
          <span>
            <IoCloudUploadOutline className="w-7 h-5" />
          </span>
          <span className="text-sm">
            <h5 className="text-sm capitalize">import from template</h5>
          </span>
        </li>
        <li className="flex items-center hover:bg-[#eee] hover:rounded-sm w-full p-1 gap-x-2">
          <span>
            <IoCloudDownloadOutline className="w-7 h-5" />
          </span>
          <span className="text-sm">
            <h5 className="text-sm capitalize">export as a template</h5>
          </span>
        </li>
        <li className="w-11/12 m-1">
          <div className="border-y border-gray-100"></div>
        </li>
        <li className="flex items-center hover:bg-[#eee] hover:rounded-sm w-full p-1 gap-x-2">
          <span>
            <IoMailOutline className="w-7 h-5" />
          </span>
          <span className="text-sm">
            <h5 className="text-sm capitalize">Email tasks to this project</h5>
          </span>
        </li>
        <li className="flex items-center hover:bg-[#eee] hover:rounded-sm w-full p-1 gap-x-2">
          <span>
            <IoListOutline className="w-7 h-5" />
          </span>
          <span className="text-sm">
            <h5 className="text-sm capitalize">Project calendar feed</h5>
          </span>
        </li>
        <li className="w-11/12 m-1">
          <div className="border-y border-gray-100"></div>
        </li>
        <li className="flex items-center hover:bg-[#eee] hover:rounded-sm w-full p-1 gap-x-2">
          <span>
            <IoCheckmarkCircleOutline className="w-7 h-5" />
          </span>
          <span className="text-sm">
            <h5 className="text-sm capitalize">Show completed</h5>
          </span>
        </li>
        <li className="w-11/12 m-1">
          <div className="border-y border-gray-100"></div>
        </li>
        <li className="flex items-center hover:bg-[#eee] hover:rounded-sm w-full p-1 gap-x-2">
          <span>
            <IoCubeOutline className="w-7 h-5" />
          </span>
          <span className="text-sm">
            <h5 className="text-sm capitalize">Add extension…</h5>
          </span>
        </li>
      </ul>
    </div>
  );
};
