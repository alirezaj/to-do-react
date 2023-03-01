import { Header } from "./components/layouts/header/header";
import { Sidebar } from "./components/layouts/sidebar";
import {
  SidebarMenuContextProvider,
} from "./context/side-menu";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <SidebarMenuContextProvider>
          <Sidebar />
        </SidebarMenuContextProvider>
        <main className="bg-[#fff] h-screen">content</main>
      </div>
    </>
  );
};
