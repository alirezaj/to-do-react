import { Header } from "./components/layouts/header/header";
import { Sidebar } from "./components/layouts/sidebar";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="bg-[#fff] h-screen">content</main>
      </div>
    </>
  );
};
