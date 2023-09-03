import { Project } from "./project";
import ProjectList from "./projectList";
import Style from "./projects.module.css";

const projects: Project[] = [
  {
    title: "Projeto 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit nunc dolor. Vestibulum at leo non purus ullamcorper ullamcorper.",
    urlGithub: "https://github.com/Matheus-hora48",
  },
  {
    title: "Projeto 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit nunc dolor. Vestibulum at leo non purus ullamcorper ullamcorper.",
    urlGithub: "https://github.com/Matheus-hora48",
  },
  {
    title: "Projeto 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit nunc dolor. Vestibulum at leo non purus ullamcorper ullamcorper.",
    urlGithub: "https://github.com/Matheus-hora48",
  },
  {
    title: "Projeto 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit nunc dolor. Vestibulum at leo non purus ullamcorper ullamcorper.",
    urlGithub: "https://github.com/Matheus-hora48",
  },
];

const Projects = () => {
  return (
    <section className={Style.projectSection}>
      <h2>Meus Projetos</h2>
      <div className={Style.projectContainer}>
        <ProjectList projects={projects} />
      </div>
    </section>
  );
};
export default Projects;
