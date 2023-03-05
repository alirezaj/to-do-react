import useSidebarMenuContext from "../../../hooks/use-sidebar-menu.hook";
import {
  IoTodayOutline,
  IoCalendarOutline,
  IoGridOutline,
  IoFileTrayOutline,
  IoAddOutline,
  IoChevronBackOutline,
} from "react-icons/io5";

export const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col gap-1 text-sm">
        <button className="flex items-center hover:bg-[#eee] hover:rounded-sm p-2 gap-x-1">
          <span className="flex justify-between items-center w-full">
            <span className="flex">
              <IoFileTrayOutline className="w-7 h-5 text-[#246fe0]" />
              <h5>Inbox</h5>
            </span>
            <span className="text-xs text-red-600">1</span>
          </span>
        </button>
        <button className="flex items-center hover:bg-[#eee] hover:rounded-sm p-2 gap-x-1">
          <span className="flex justify-between items-center w-full">
            <span className="flex">
              <IoTodayOutline className="w-7 h-5 text-[#058527]" />
              <h5>Today</h5>
            </span>
            <span className="text-xs text-red-600"></span>
          </span>
        </button>
        <button className="flex items-center hover:bg-[#eee] hover:rounded-sm p-2 gap-x-1">
          <span className="flex justify-between items-center w-full">
            <span className="flex">
              <IoCalendarOutline className="w-7 h-5 text-[#692fc2]" />
              <h5>Upcoming</h5>
            </span>
            <span className="text-xs text-red-600"></span>
          </span>
        </button>
        <button className="flex items-center hover:bg-[#eee] hover:rounded-sm p-2 gap-x-1">
          <IoGridOutline className="w-7 h-5 text-[#eb8909]" />
          <h5>Filters & Labels</h5>
        </button>
      </div>
      <div className="flex flex-col gap-1 text-sm mt-4 text-">
        <button className="flex items-center hover:bg-[#eee] hover:rounded-sm p-2 gap-x-1">
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
        </button>
      </div>
    </>
  );
};
