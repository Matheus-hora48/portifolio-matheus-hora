import Link from "next/link";
import Style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className={Style.title}>
        <Link href={"/"} className={Style.links}>
          Matheus Hora ©
        </Link>
      </div>
      <div className={Style.navigation}>
        <Link href={"/"} className={Style.links}>
          Sobre mim
        </Link>
        <Link href={"/"} className={Style.links}>
          Projetos
        </Link>
        <Link href={"/"} className={Style.links}>
          Contato
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
