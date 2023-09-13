import Link from "next/link";
import Image from "next/image";
import Style from "./initial.module.css";
import Linkedin from "../../../public/icons/linkedin.svg";
import Github from "../../../public/icons/github.svg";
import Insta from "../../../public/icons/insta.svg";
import Email from "../../../public/icons/email.svg";
import Zap from "../../../public/icons/zap.svg";
import Photo from "../../../public/images/photo.svg";

const Initial = () => {
  return (
    <section className={Style.initial}>
      <div className={Style.info}>
        <h1>
          Olá, eu sou o <span>Matheus</span>
        </h1>
        <p>
          Desenvolvedor mobile, Dê uma olhada no meu portfólio para ver meus
          projetos anteriores.
        </p>
        <div className={Style.icons}>
          <Link
            href={"https://www.linkedin.com/in/devmatheushora/"}
            target="_blank"
            className={Style.icon}
          >
            <Image src={Linkedin} alt={"Icon linkedin"} />
          </Link>
          <Link
            href={"https://github.com/Matheus-hora48"}
            target="_blank"
            className={Style.icon}
          >
            <Image src={Github} alt={"Icon github"} />
          </Link>
          <Link
            href={"https://wa.me/5577998245456"}
            target="_blank"
            className={Style.icon}
          >
            <Image src={Zap} alt={"Icon whatsapp"} />
          </Link>
          <Link href={"mailto:matheus11hora@gmail.com"} className={Style.icon}>
            <Image src={Email} alt={"Icon email"} />
          </Link>
          <Link
            href={"https://instagram.com/matheus11hora?igshid=OGQ5ZDc2ODk2ZA=="}
            target="_blank"
            className={Style.icon}
          >
            <Image src={Insta} alt={"Icon instagram"} />
          </Link>
        </div>
      </div>
      <div className={Style.photo}>
        <Image
          src={Photo}
          alt={"Image autor"}
          layout="responsive"
          width={360}
          height={360}
        ></Image>
      </div>
    </section>
  );
};
export default Initial;
