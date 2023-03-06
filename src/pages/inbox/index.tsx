import { useState } from "react";
import {
  IoOptions,
  IoChatboxOutline,
  IoEllipsisHorizontalOutline,
} from "react-icons/io5";
import { ToolsMenu } from "../../components/tools-menu";

export const Inbox = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toolsMenuHandler = (flag: boolean) => {
    setIsMenuVisible(flag);
  };

  return (
    <div className="m-auto w-2/3">
      <div className="flex w-full justify-between items-center">
        <div>
          <h1 className="font-bold text-lg">Inbox</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-gray-400 hover:text-gray-500 hover:bg-[#eee] hover:rounded-sm p-1">
            <span>
              <IoOptions className="w-5 h-5" />
            </span>
            <span>
              <h3 className="text-sm capitalize">view</h3>
            </span>
          </button>
          <button className="flex items-center gap-1 text-gray-400 hover:text-gray-500 hover:bg-[#eee] hover:rounded-sm p-1">
            <span>
              <IoChatboxOutline className="w-5 h-5" />
            </span>
            <span>
              <h3 className="text-sm capitalize">comments</h3>
            </span>
          </button>
          <button className="hover:bg-[#eee] text-gray-500 hover:rounded-sm p-1">
            <IoEllipsisHorizontalOutline
              className="w-5 h-5"
              onClick={() => toolsMenuHandler(true)}
            />
            <ToolsMenu isMenuVisible={isMenuVisible} closeModal={toolsMenuHandler} />
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
