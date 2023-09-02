import Image from "next/image";
import styles from "../styles/page.module.css";
import Initial from "@/components/initial/initial";
import About from "@/components/about/about";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <main>
      <Initial />
      <About />
      <Contact />
    </main>
  );
}
