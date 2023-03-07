import React, { useState } from "react";

export const NavbarInputSearch = () => {
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
  
  return (
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
  );
};
