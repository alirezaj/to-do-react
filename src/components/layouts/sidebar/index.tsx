import {
  IoTodayOutline,
  IoCalendarOutline,
  IoGridOutline,
  IoFileTrayOutline,
} from "react-icons/io5";

import { SidebarButton } from "../../custom/sidebar-button";
import { SidebarLink } from "../../custom/sidebar-link";
import { SidebarProjectSection } from "../../custom/sidebar-project-section";

export const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col gap-1 text-sm">
        <SidebarButton>
          <SidebarLink title="inbox" link="inbox" taskNum="0">
            <IoFileTrayOutline className="w-7 h-5 text-[#246fe0]" />
          </SidebarLink>
        </SidebarButton>
        <SidebarButton>
          <SidebarLink title="today" link="today" taskNum="0">
            <IoTodayOutline className="w-7 h-5 text-[#058527]" />
          </SidebarLink>
        </SidebarButton>
        <SidebarButton>
          <SidebarLink title="upcoming" link="upcoming" taskNum="0">
            <IoCalendarOutline className="w-7 h-5 text-[#692fc2]" />
          </SidebarLink>
        </SidebarButton>
        <SidebarButton>
          <SidebarLink title="filters & labels" link="filters" taskNum="0">
            <IoGridOutline className="w-7 h-5 text-[#eb8909]" />
          </SidebarLink>
        </SidebarButton>
      </div>
      <div className="flex flex-col gap-1 text-sm mt-4 text-">
        <SidebarButton>
          <SidebarProjectSection />
        </SidebarButton>
      </div>
    </>
  );
};
