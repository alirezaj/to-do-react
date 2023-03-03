import { useContext } from "react";
import { IoTodayOutline, IoCalendarOutline, IoGridOutline, IoFileTrayOutline, IoAddOutline, IoChevronBackOutline } from "react-icons/io5";
import { SidebarMenuContext } from "../../../context/side-menu";

export const Sidebar = () => {
  const { isSidebarMenuOpen } = useContext(SidebarMenuContext);
  console.log('isSidebarMenuOpen', isSidebarMenuOpen);

  if (!isSidebarMenuOpen) return null

  return (
    <div className="bg-[#fafafa] h-screen pt-8 px-3 w-56">
      <div className="flex flex-col gap-1 text-sm">
        <button className="flex items-center hover:bg-[#eee] hover:rounded-sm p-2 gap-x-1">
          <div className="flex justify-between items-center w-full">
            <div className="flex">
              <IoFileTrayOutline className="w-7 h-5 text-[#246fe0]" />
              <h5>Inbox</h5>
            </div>
            <div className="text-xs text-red-600">
              1
            </div>
          </div>
        </button>
        <button className="flex items-center hover:bg-[#eee] hover:rounded-sm p-2 gap-x-1">
          <div className="flex justify-between items-center w-full">
            <div className="flex">
              <IoTodayOutline className="w-7 h-5 text-[#058527]" />
              <h5>Today</h5>
            </div>
            <div className="text-xs text-red-600"></div>
          </div>
        </button>
        <button className="flex items-center hover:bg-[#eee] hover:rounded-sm p-2 gap-x-1">
          <div className="flex justify-between items-center w-full">
            <div className="flex">
              <IoCalendarOutline className="w-7 h-5 text-[#692fc2]" />
              <h5>Upcoming</h5>
            </div>
            <div className="text-xs text-red-600"></div>
          </div>
        </button>
        <button className="flex items-center hover:bg-[#eee] hover:rounded-sm p-2 gap-x-1">
          <IoGridOutline className="w-7 h-5 text-[#eb8909]" />
          <h5>Filters & Labels</h5>
        </button>
      </div>
      <div className="flex flex-col gap-1 text-sm mt-4 text-">
        <button className="flex items-center hover:bg-[#eee] hover:rounded-sm p-2 gap-x-1">
          <div className="flex justify-between items-center w-full">
            <div className="flex">
              <h5 className="font-semibold text-[#0000008f]">Projects</h5>
            </div>
            <div className="flex gap-2">
              <button className="text-lg text-gray-400 hover:text-gray-800">
                <IoAddOutline />
              </button>
              <button className="text-lg text-gray-400 hover:text-gray-800">
                <IoChevronBackOutline />
              </button>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
