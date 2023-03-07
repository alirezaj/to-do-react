import React from "react";

export type SidebarButtonType = {
  children: React.ReactNode;
};

export const SidebarButton: React.FC<SidebarButtonType> = ({ children }) => {
  return (
    <button className="flex items-center hover:bg-[#eee] hover:rounded-sm p-2 gap-x-1">
      {children}
    </button>
  );
};
