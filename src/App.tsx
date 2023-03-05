import { Header } from "./components/layouts/header/header";
import { Sidebar } from "./components/layouts/sidebar";
import useSidebarMenuContext from "./hooks/use-sidebar-menu.hook";

export const App: React.FC = () => {
  const { isSidebarMenuOpen } = useSidebarMenuContext();

  return (
    <>
      <Header />
      <div className="flex">
        <div
          className={`bg-[#fafafa] h-screen pt-8 px-3 w-[250px] fixed ${
            isSidebarMenuOpen ? "left-0" : "left-[-9999px]"
          } transition-all duration-300`}
        >
          <Sidebar />
        </div>
        <main className={`bg-[#fff] h-screen flex-grow ${isSidebarMenuOpen ? "ml-[255px]":"ml-0"} pt-8 px-3 transition-all duration-300`}>content</main>
      </div>
    </>
  );
};
