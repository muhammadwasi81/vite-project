import type { ReactNode } from "react";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-144px)]">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
