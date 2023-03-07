import styled from "@emotion/styled";
export type NavbarButtonType = {
  children: React.ReactNode;
  onClickHandler?: () => void;
};

export const NavbarButton: React.FC<NavbarButtonType> = ({
  children,
  onClickHandler,
}) => {
  return (
    <button
      className="p-1 hover:bg-search hover:rounded-sm"
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};
