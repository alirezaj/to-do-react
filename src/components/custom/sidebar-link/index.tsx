import React from "react";
import { Link } from "react-router-dom";

export type SidebarLinkType = {
  children: React.ReactNode;
  title: string,
  link: string,
  taskNum: string
};

export const SidebarLink: React.FC<SidebarLinkType> = ({ children, title, link, taskNum }) => {
  return (
    <Link to={link} className="flex justify-between items-center w-full">
      <span className="flex capitalize">
        {children}
        <h5>{title}</h5>
      </span>
      {parseInt(taskNum) > 0 && <span className="text-xs text-red-600">{taskNum}</span>}
    </Link>
  );
};
