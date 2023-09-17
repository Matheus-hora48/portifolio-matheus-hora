import Link from "next/link";
import Image from "next/image";
import Style from "./about.module.css";
import Photo from "../../../public/images/user-profile-3.svg";
import MoreInfos from "../moreInfos/moreInfos";

const About = () => {
  return (
    <section className={Style.about}>
      <h2>Sobre</h2>
      <div className={Style.content}>
        <div className={Style.image}>
          <Image src={Photo} alt={"photo dev"} layout="responsive" />
        </div>
        <div className={Style.text}>
          <h3>
            <span>Transformando</span> linhas de código em experiências únicas.
          </h3>
          <p>
            Ei, tudo certo? Sou um desenvolvedor Flutter apaixonado por inovação
            e tecnologia. Com maestria em Dart e Flutter, estou pronto para
            liderar desafios e colaborar com equipes talentosas. Minha base
            sólida em programação, design de apps e experiência do usuário me
            destaca como um Engenheiro de Software de alto nível.
          </p>
          <br />
          <p>
            Busco oportunidades incríveis para crescer e me aprimorar em um
            ambiente colaborativo. Se você procura um profissional que abraça
            desafios e é movido pela paixão pela tecnologia, sua busca termina
            aqui!
          </p>
        </div>
      </div>
      <div className={Style.moreInfos}>
        <MoreInfos />
      </div>
    </section>
  );
};
export default About;
