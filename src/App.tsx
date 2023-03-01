import { Header } from "./components/layouts/header/header";

export const App: React.FC = () => {
  return (
    <>
     <Header />
     <div className="flex">
      <div className="bg-[#fafafa] h-screen">sidebar</div>
      <main className="bg-[#fff] h-screen">content</main>
     </div>
    </>
  );
};
