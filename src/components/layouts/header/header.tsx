import useSidebarMenuContext from "../../../hooks/use-sidebar-menu.hook";
import {
  IoHomeOutline,
  IoMenuOutline,
  IoSearchOutline,
  IoAddOutline,
  IoNotificationsOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { NavbarButton } from "../../custom/navbar-button";
import { NavbarInputSearch } from "../../custom/navbar-input-search";

export const Header: React.FC = () => {
  const { toggleSidebarMenu } = useSidebarMenuContext();

  const sidebarToggleHandler = () => {
    toggleSidebarMenu();
  };

  return (
    <nav className="py-2.5 px-4 bg-header text-white fixed w-full h-navbar">
      <div className="flex justify-between items-center min:w-full">
        <div className="flex justify-start items-center w-1/2 gap-x-2">
          <NavbarButton onClickHandler={sidebarToggleHandler}>
            <IoMenuOutline className="w-6 h-6" />
          </NavbarButton>
          <NavbarButton>
            <IoHomeOutline className="w-5 h-5" />
          </NavbarButton>
          <div className={`flex items-center hover:text-gray-700`}>
            <IoSearchOutline className="w-7 h-5 absolute" />
            <NavbarInputSearch />
          </div>
        </div>
        <div className="flex w-1/2 justify-end gap-x-2 items-center">
          <NavbarButton>
            <IoAddOutline className="w-7 h-5 cursor-pointer" />
          </NavbarButton>

          <NavbarButton>
            <IoNotificationsOutline className="w-7 h-5 cursor-pointer" />
          </NavbarButton>

          <NavbarButton>
            <IoPersonOutline className="w-7 h-5 cursor-pointer" />
          </NavbarButton>
        </div>
      </div>
    </nav>
  );
};
