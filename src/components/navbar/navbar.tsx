"use client";
import Link from "next/link";
import style from "./navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [burguerOpen, setBurguerOpen] = useState(false);

  const handleBurguer = () => {
    setBurguerOpen(!burguerOpen);
  };

  return (
    <div className={style.navbar}>
      <div className={style.title}>
        <Link href={"/"}>Matheus Hora</Link>
      </div>
      <div className={style.buttonContainer}>
        <Link href={"#about"}>Sobre mim</Link>
        <Link href={"#project"}>Projetos</Link>
        <Link className={style.button} href={"#contact"}>
          Contato
        </Link>
      </div>
      <button className={style.burguerButton} onClick={handleBurguer}>
        <span className={style.burguerIcon}></span>
        <div
          className={`${style.burguerContentClosed} ${
            burguerOpen ? style.burguerContent : ""
          }`}
        >
          <Link href={"#about"} className={style.buttonBurguer}>
            Sobre mim
          </Link>
          <Link href={"#project"} className={style.buttonBurguer}>
            Projetos
          </Link>
          <Link href={"#contact"} className={style.buttonBurguer}>
            Contato
          </Link>
        </div>
      </button>
    </div>
  );
};
export default Navbar;
