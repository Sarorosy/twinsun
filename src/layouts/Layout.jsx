import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Footer from "../components/Footer";

export default function Layout() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="w-full flex-1 " id="scroll-container">
      <Header />
        <div className="m-0 max-w-[100%]">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}
