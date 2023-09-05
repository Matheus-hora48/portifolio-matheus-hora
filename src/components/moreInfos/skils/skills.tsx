import React, { useState } from "react";
import Style from "./skills.module.css";
import Image from "next/image";
import Arrow from "../../../../public/icons/arrow.svg";

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={Style.container}>
      <h3>Tecnologias mobile</h3>
      <div className={Style.tech}>
        <span>Flutter</span>
        <Image
          className={`${isOpen ? Style.arrowOpen : Style.arrow}`}
          height={15}
          width={15}
          src={Arrow}
          alt="Seta"
          onClick={toggleContent}
        />
      </div>
      {isOpen && (
        <div className={Style.additionalContent}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      )}
    </div>
  );
};

export default Skills;
