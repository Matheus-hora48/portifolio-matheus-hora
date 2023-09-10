"use client";

import { useState } from "react";
import Style from "./moreInfos.module.css";
import Skills from "./skils/skills";
import SkillItem from "./skils/skills";
import Experience from "./experience/experience";

const MoreInfos = () => {
  const [selectedButton, setSelectedButton] = useState("skills");

  function handleSelected(button: string) {
    setSelectedButton(button);
  }

  const skillsData = [
    {
      title: "Tecnologias mobile 1",
      tech: "Flutter",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Tecnologias mobile 2",
      tech: "React Native",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className={`${Style.content} content-wrapper`}>
      <div className={Style.buttons}>
        <span
          className={`${Style.button} ${
            selectedButton === "skills" ? Style.selected : ""
          }`}
          onClick={() => handleSelected("skills")}
        >
          Minhas skills
        </span>
        <span
          className={`${Style.button} ${
            selectedButton === "experience" ? Style.selected : ""
          }`}
          onClick={() => handleSelected("experience")}
        >
          Experiencia
        </span>
        <span
          className={`${Style.button} ${
            selectedButton === "education" ? Style.selected : ""
          }`}
          onClick={() => handleSelected("education")}
        >
          Educação
        </span>
      </div>
      <div
        className={`${Style.content} content-wrapper ${
          selectedButton !== "skills" ? "hide" : ""
        }`}
      >
        {selectedButton === "skills" && (
          <>
            {skillsData.map((data, index) => (
              <SkillItem
                key={index}
                title={data.title}
                tech={data.tech}
                content={data.content}
              />
            ))}
          </>
        )}
        {selectedButton === "experience" && (
          <>
            <Experience
              isCertification={false}
              info={{
                title: "Top Soft Informática",
                subtitle: undefined,
                date: "ago de 2021 - O momento",
                content: [
                  "Minha jornada começou como um especialista em correção de bugs e implementação de recursos em aplicativos ERP mobile. Agora, estou trabalhando em um projeto incrível de plataforma cruzada usando Node e Flutter. Minha missão é coletar dados da API Node e transformá-los em insights incríveis com o Flutter.Recentemente, criei um Dashboard que fornece informações valiosas sobre os produtos vendidos, transformando dados complexos em uma visualização atraente e fácil de entender. ",
                  "Sou obcecado em transformar soluções tecnológicas em experiências incríveis para os usuários.Se você procura alguém apaixonado por tecnologia, inovação e criatividade, pode contar comigo. Estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades e criar soluções ainda mais impressionantes.",
                ],
              }}
            />
          </>
        )}
        {selectedButton === "education" && (
          <>
            <Experience
              isCertification={true}
              info={{
                title: "Bacharelado em Engenharia de Software",
                subtitle: "Certificações",
                date: "Cruzeiro do Sul Virtual, conclusão em 2025.",
                content: [
                  "Masterclass Turma 6 - Flutterando",
                  "Flutter & Dart - O Guia Completo - Udemy",
                  "Responsividade no Flutter - Udemy",
                  "Desenvolvimento de Aplicativos usando Kotlin - Udemy",
                  "Injeção deDependências no Flutter com GetIt + Injectable - Udemy",
                ],
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MoreInfos;
