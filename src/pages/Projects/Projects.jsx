import {ProjectCard} from "../../components/ProjectCards";

const projects = [
  {
    title: 'Eco-Points',
    description: 'Information and location for recycling in Brazil.',
    link: 'https://github.com/devoziel-s/Eco-Points',
  },
  // Adicione outros projetos aqui
];

export const Projects = () => (
  <div className="p-4">
    <h1 className="text-4xl mb-4">My Projects</h1>
    {projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </div>
);