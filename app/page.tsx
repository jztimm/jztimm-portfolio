import Image from "next/image";
import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import dynamic from "next/dynamic";

const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });

import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex bg-black-100 justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Skills />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Blog />
        <div className="py-20" id="contact">
          <h1 className="heading">
            Let&apos;s <span className="text-purple">Connect</span>
          </h1>
          <div className="max-w-2xl mx-auto mt-12 px-4">
            <ContactForm />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}

