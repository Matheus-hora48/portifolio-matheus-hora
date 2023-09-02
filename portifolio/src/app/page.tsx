import Image from "next/image";
import styles from "../styles/page.module.css";
import Initial from "@/components/initia/initial";
import About from "@/components/about/about";

export default function Home() {
  return (
    <main>
      <Initial />
      <About />
    </main>
  );
}
