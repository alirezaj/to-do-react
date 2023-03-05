import { useContext } from "react";

import { SidebarMenuContext } from "../context/side-menu";

const useSidebarMenuContext = () => {
  const context = useContext(SidebarMenuContext);

  if (!context) {
    throw new Error(
      "useSidebarMenuContext has to be used within <SidebarMenuContextProvider>"
    );
  }

  return context;
};

export default useSidebarMenuContext;
