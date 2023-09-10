import React, { useState } from "react";
import Style from "./skills.module.css";
import Image from "next/image";
import Arrow from "../../../../public/icons/arrow.svg";

interface Skill {
  title: string;
  tech: string;
  content: string;
}

const SkillItem = ({ title, tech, content }: Skill) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={Style.container}>
      <div className={Style.header} onClick={() => toggleContent()}>
        <h3>{title}</h3>
        <div className={Style.tech}>
          <span>{tech}</span>
          <Image
            className={`${isOpen ? Style.arrowOpen : Style.arrow}`}
            height={15}
            width={15}
            src={Arrow}
            alt="Seta"
          />
        </div>
      </div>
      <div
        className={`${Style.additionalContentClosed} ${
          isOpen ? Style.additionalContent : ""
        }`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SkillItem;
