import { IoTodayOutline, IoCalendarOutline, IoGridOutline, IoFileTrayOutline } from "react-icons/io5";

export const Sidebar = () => {
  return (
    <div className="bg-[#fafafa] h-screen pt-8 px-3 w-56">
      <div className="flex flex-col gap-1 text-sm">
      <button className="flex items-center hover:bg-[#eee] hover:rounded-sm p-2 gap-x-1">
          <IoFileTrayOutline className="w-7 h-5 text-[#246fe0]" />
          <h5>Inbox</h5>
        </button>
        <button className="flex items-center hover:bg-[#eee] hover:rounded-sm p-2 gap-x-1">
          <IoTodayOutline className="w-7 h-5 text-[#058527]" />
          <h5>Today</h5>
        </button>
        <button className="flex items-center hover:bg-[#eee] hover:rounded-sm p-2 gap-x-1">
          <IoCalendarOutline className="w-7 h-5 text-[#692fc2]" />
          <h5>Upcoming</h5>
        </button>
        <button className="flex items-center hover:bg-[#eee] hover:rounded-sm p-2 gap-x-1">
          <IoGridOutline className="w-7 h-5 text-[#eb8909]" />
          <h5>Filters & Labels</h5>
        </button>
      </div>
    </div>
  );
};
