import { Project } from "./project";
import ProjectList from "./projectList";
import Style from "./projects.module.css";
import project1 from "../../../public/images/project1.svg";
import project2 from "../../../public/images/project2.svg";
import project3 from "../../../public/images/project3.svg";
import project4 from "../../../public/images/project4.svg";

const project1Context = require.context(
  "../../../public/projeto1/",
  false,
  /\.(png|jpe?g|svg)$/
);
const project1Images = project1Context.keys().map(project1Context);

const project2Context = require.context(
  "../../../public/projeto2/",
  false,
  /\.(png|jpe?g|svg)$/
);
const project2Images = project2Context.keys().map(project2Context);

const project3Context = require.context(
  "../../../public/projeto3/",
  false,
  /\.(png|jpe?g|svg)$/
);
const project3Images = project3Context.keys().map(project3Context);

const project4Context = require.context(
  "../../../public/projeto4/",
  false,
  /\.(png|jpe?g|svg)$/
);
const project4Images = project4Context.keys().map(project4Context);

const projects: Project[] = [
  {
    title: "Projeto 1",
    description:
      "Desenvolvi um aplicativo completo em Flutter que utiliza uma API para coletar dados externos e exibi-los na interface do usuário. Para permitir a comunicação eficiente com a API e executar operações essenciais, utilizei métodos HTTP padrão, mantendo as informações exibidas sempre atualizadas.",
    urlGithub: "https://github.com/Matheus-hora48/loja-flutter",
    image: project1,
    modalImages: project1Images,
  },
  {
    title: "Projeto 2",
    description:
      "O projeto utiliza o Firebase do Google para autenticação, armazenamento e sincronização de mensagens em tempo real, além de compartilhamento de fotos. O uso do GetX contribui para um aplicativo fluido, bem estruturado e de fácil manutenção. Juntas, essas tecnologias proporcionam aos usuários uma experiência de chat em tempo real excepcional.",
    urlGithub: "https://github.com/Matheus-hora48/flutter-chat",
    image: project2,
    modalImages: project2Images,
  },
  {
    title: "Projeto 3",
    description:
      "Neste aplicativo, você poderá cadastrar sua ficha de treino e monitorar seus gastos calóricos e consumo de água de acordo com suas atividades.",
    urlGithub: "https://github.com/Matheus-hora48",
    image: project3,
    modalImages: project3Images,
  },
  {
    title: "Projeto 4",
    description:
      "O aplicativo de agendamento de barbearia é uma ferramenta conveniente para empresas do ramo. Com ele, as empresas podem facilmente cadastrar todos os funcionários e definir os horários de serviço para cada um deles. ",
    urlGithub: "https://github.com/Matheus-hora48/barbershop",
    image: project4,
    modalImages: project4Images,
  },
];

const Projects = () => {
  return (
    <section className={Style.projectSection} id="project">
      <h2>Meus Projetos</h2>
      <ProjectList projects={projects} />
    </section>
  );
};
export default Projects;
