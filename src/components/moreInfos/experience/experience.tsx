import React from "react";
import Style from "./experience.module.css";
interface ExperienceProps {
  isCertification: boolean;
  info: {
    title: string;
    subtitle?: string;
    date: string;
    content: string[];
  };
}

const Experience: React.FC<ExperienceProps> = ({ isCertification, info }) => {
  const { title, subtitle, date, content } = info;

  return (
    <div className={Style.container}>
      <div className={Style.header}>
        <h3>
          <span>{title}</span> - {date}
        </h3>
        {isCertification && <h4>Certificações:</h4>}
      </div>
      <div className={Style.content}>
        {isCertification ? (
          <ul className={Style.list}>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <>
            {subtitle && <h4>{subtitle}</h4>}
            {content.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Experience;