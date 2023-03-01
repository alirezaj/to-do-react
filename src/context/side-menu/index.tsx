import React, { createContext, useState } from "react";

export type SidebarMenuType = {
  isSidebarMenuOpen: boolean,
};

interface ContextProviderProps {
  children: React.ReactNode;
}

export const SidebarMenuContext = createContext<SidebarMenuType>({isSidebarMenuOpen: true});

export const useSidebarMenuContext = () => {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(true);

  const toggleSidebarMenu = () => {
    setIsSidebarMenuOpen(!isSidebarMenuOpen);
  };

  return {
    toggleSidebarMenu,
    isSidebarMenuOpen,
  };
};

export const SidebarMenuContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const { isSidebarMenuOpen } = useSidebarMenuContext();

  return (
    <SidebarMenuContext.Provider value={{ isSidebarMenuOpen }}>
      {children}
    </SidebarMenuContext.Provider>
  );
};
