"use client";
import React, { useState } from "react";
import { Project } from "./project";
import Style from "./projects.module.css";
import Image from "next/image";
import Link from "next/link";
import DemoModal from "./demoModal";

type ProjectListProps = {
  projects: Project[];
};

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [projectImages, setProjectImages] = useState(new Array());

  const openModal = (project: string[]) => {
    setModalOpen(true);
    setProjectImages(project);
  };

  const renderModal = () => {
    return <DemoModal modalImages={projectImages} close={setModalOpen} />;
  };
  return (
    <div className={Style.projectList}>
      {modalOpen ? renderModal() : ""}
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
            <button onClick={() => openModal(project.modalImages)}>
              Live Demo
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
