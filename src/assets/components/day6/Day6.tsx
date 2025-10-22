import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface Main {
    
    children?: ReactNode
}


const Day6 = ({ children } : Main) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export { Day6 };
