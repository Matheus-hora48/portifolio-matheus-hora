"use client";

import { useState } from "react";
import Style from "./moreInfos.module.css";
import Skills from "./skils/skills";

const MoreInfos = () => {
  const [selectedButton, setSelectedButton] = useState("skills");

  function handleSelected(button: string) {
    button === selectedButton ? "" : setSelectedButton(button);
  }

  return (
    <div className={Style.container}>
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
      <div className={Style.content}>
        <Skills />
      </div>
    </div>
  );
};
export default MoreInfos;
