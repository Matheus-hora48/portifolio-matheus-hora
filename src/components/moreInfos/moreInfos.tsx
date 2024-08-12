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
      title: "Tecnologias mobile",
      tech: "Flutter",
      content: "Flutter, Kotlin",
    },
    {
      title: "Tecnologias Front-End Web",
      tech: "Javacript",
      content: "HTML, CSS, Javacript, Typescript, NextJs",
    },
    {
      title: "Back-end",
      tech: "NodeJs",
      content: "NodeJs, NestJs",
    },
    {
      title: "Database",
      tech: "PostgresSQL",
      content: "PostgresSQL, MariaDB, Mysql, SQLite",
    },
    {
      title: "Controle de versionamento",
      tech: "Git",
      content: "Git, GitHub, GitLab",
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
                subtitle: "Desenvolvedor Mobile",
                date: "ago de 2021 - out de 2023",
                content: [
                  "Na Top Soft, fui responsável pelo desenvolvimento integral de um sistema CRM, tanto na versão web quanto na mobile utilizando o Flutter, o que trouxe significativas melhorias operacionais para nossos clientes. Além disso, criei um módulo específico para uma das maiores empresas de mecânica de caminhões da região. Este módulo gerenciava a entrada e saída de caminhões através das ordens de serviço (OS), otimizando o controle na portaria. Também desenvolvi um recurso para facilitar a manipulação de romaneios, aprimorando a eficiência logística para diversas empresas."""
                ],
              }}
            />
            <Experience
              isCertification={false}
              info={{
                title: "Conceito Tecnologia",
                subtitle: "Desenvolvedor Mobile",
                date: "ago de 2023 - até o momento",
                content: [
                  "Na Conceito Tecnologia, lidero a equipe de desenvolvimento Flutter, contribuindo para a criação de um aplicativo móvel integrado a um sistema ERP de desktop. Utilizando Flutter e C#, sou responsável por arquitetar soluções eficientes e inovadoras, garantindo a integração perfeita entre as plataformas mobile e desktop."
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
