import Image from "next/image";
import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="relative flex bg-black-100 justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "about", link: "/#about", icon: <FaHome /> },
          ]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
