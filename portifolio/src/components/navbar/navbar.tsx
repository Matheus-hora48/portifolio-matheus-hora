import Link from "next/link";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.title}>
        <Link href={""}>Matheus Hora</Link>
      </div>
      <div className={style.buttonContainer}>
        <Link href={""}>Sobre mim</Link>
        <Link href={""}>Projetos</Link>
        <button className={style.button}>Contato</button>
      </div>
    </div>
  );
};
export default Navbar;
