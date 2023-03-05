import { useState } from "react";
import useSidebarMenuContext from "../../../hooks/use-sidebar-menu.hook";
import {
  IoHomeOutline,
  IoMenuOutline,
  IoSearchOutline,
  IoAddOutline,
  IoNotificationsOutline,
  IoPersonOutline,
} from "react-icons/io5";

export const Header: React.FC = () => {
  const { toggleSidebarMenu } = useSidebarMenuContext();

  const [searchTerm, setSearchTerm] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);

  const onFocusHandler = () => {
    setIsInputActive(true);
  };

  const onBlurHandler = () => {
    setIsInputActive(false);
    setSearchTerm("");
  };

  const keyDownHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      console.log("route to search page");
      return;
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.currentTarget.value);
  };

  const sidebarToggleHandler = () => {
    toggleSidebarMenu()
  };

  return (
    <nav className="py-2.5 px-4 bg-header text-white fixed w-full h-navbar">
      <div className="flex justify-between items-center min:w-full">
        <div className="flex justify-start items-center w-1/2 gap-x-2">
          <button
            className="p-1 hover:bg-extend-search hover:rounded-sm"
            onClick={sidebarToggleHandler}
          >
            <IoMenuOutline className="w-6 h-6" />
          </button>
          <button className="p-1 hover:bg-extend-search hover:rounded-sm">
            <IoHomeOutline className="w-5 h-5" />
          </button>
          <div
            className={`flex items-center hover:text-gray-700 ${
              isInputActive && "text-gray-700 grow-[.5]"
            } transition-all duration-200`}
          >
            <IoSearchOutline className="w-7 h-5 absolute" />
            <input
              type="text"
              name="search"
              id="search"
              className={`px-2 pl-7 h-8 rounded-sm bg-search placeholder:text-white border-1 border-transparent outline-none hover:bg-white  hover:placeholder:text-gray-400 ${
                isInputActive &&
                "focus:bg-white focus:text-black placeholder:text-gray-400 w-full"
              } transition-all duration-200 ease-in`}
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              placeholder="Search"
              value={searchTerm}
              onKeyDown={keyDownHandler}
              onChange={onChangeHandler}
              autoComplete="off"
            />
          </div>
        </div>
        <div className="flex w-1/2 justify-end gap-x-2 items-center">
          <button className="p-1 hover:bg-extend-search hover:rounded-sm">
            <IoAddOutline className="w-7 h-5 cursor-pointer" />
          </button>
          <button className="p-1 hover:bg-extend-search hover:rounded-sm">
            <IoNotificationsOutline className="w-7 h-5 cursor-pointer" />
          </button>
          <button className="p-1 hover:bg-extend-search hover:rounded-sm">
            <IoPersonOutline className="w-7 h-5 cursor-pointer" />
          </button>
        </div>
      </div>
    </nav>
  );
};
