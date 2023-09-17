import React from "react";
import { Project } from "./project";
import Style from "./projects.module.css";
import Image from "next/image";
import Link from "next/link";

type ProjectListProps = {
  projects: Project[];
};

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className={Style.projectList}>
      {projects.map((project, index) => (
        <div className={Style.project} key={index}>
          <div className={Style.imageContainer}>
            <Image
              src={project.image}
              alt={"Image project"}
              layout="responsive"
              height={200}
            />
          </div>
          <p>{project.description}</p>
          <div className={Style.buttonSection}>
            <button>
              <Link href={project.urlGithub}>Github</Link>
            </button>
            <button>Live Demo</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
