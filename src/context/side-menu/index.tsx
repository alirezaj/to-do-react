import React, { createContext, useState } from "react";
import {
  ContextProviderModel,
  SidebarMenuModel,
} from "../../models/menu.model";

export const SidebarMenuContext = createContext<SidebarMenuModel | null>(null);

const SidebarMenuContextProvider: React.FC<ContextProviderModel> = ({
  children,
}) => {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(true);

  const toggleSidebarMenu = () => {
    setIsSidebarMenuOpen((prevSatate) => !prevSatate);
  };

  return (
    <SidebarMenuContext.Provider
      value={{ isSidebarMenuOpen, toggleSidebarMenu }}
    >
      {children}
    </SidebarMenuContext.Provider>
  );
};

export default SidebarMenuContextProvider;
