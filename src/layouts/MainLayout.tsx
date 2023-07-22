import { ReactNode } from "react";
import Head from "next/head";
import { Footer, Navbar } from "@/components";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>The great developer Mtingc</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
