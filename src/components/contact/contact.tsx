import Link from "next/link";
import Style from "./contact.module.css";

import Image from "next/image";
import Email from "../../../public/icons/email.svg";
import Linkedin from "../../../public/icons/linkedin.svg";

const Contact = () => {
  return (
    <section className={Style.contact}>
      <div className={Style.contactDiv}>
        <h2>Entre em contato</h2>
        <div className={Style.socialContainer}>
          <div className={Style.social}>
            <Image
              src={Email}
              alt={"Icon Email"}
              className={Style.iconsSocial}
            />
            <Link
              href={"mailto:matheus11hora@gmail.com"}
              className={Style.textSocial}
            >
              matheus11hora@gmail.com
            </Link>
          </div>
          <div className={Style.social}>
            <Image
              src={Linkedin}
              alt={"Icon linkedin"}
              className={Style.iconsSocial}
            />
            <Link
              href={"https://www.linkedin.com/in/devmatheushora/"}
              target="_blank"
              className={Style.textSocial}
            >
              devmatheushora
            </Link>
          </div>
        </div>
        <p>
          Estou sempre aberto para receber novas propostas e colaborar em novos
          projetos! Se você precisa de ajuda com algum projeto ou tem alguma
          proposta interessante para mim, sinta-se à vontade para entrar em
          contato pelos canais acima.
        </p>
        <a
          className={Style.button}
          href="../curriculo/meu_curriculo.pdf"
          download
        >
          Baixar currículo
        </a>
      </div>
    </section>
  );
};
export default Contact;
