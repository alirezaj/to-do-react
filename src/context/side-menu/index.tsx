import React, { createContext, useState } from "react";

const initialState = {
  isSidebarMenuOpen: false,
};

const SidebarMenuContext = createContext(initialState);

const useSidebarMenuContext = () => {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);

  const toggleSidebarMenu = () => {
    setIsSidebarMenuOpen(!isSidebarMenuOpen);
  };

  return {
    toggleSidebarMenu,
    isSidebarMenuOpen,
  };
};

export const SidebarMenuContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const { isSidebarMenuOpen } = useSidebarMenuContext();

  return (
    <SidebarMenuContext.Provider value={{ isSidebarMenuOpen }}>
      {children}
    </SidebarMenuContext.Provider>
  );
};
