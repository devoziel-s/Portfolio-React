// eslint-disable-next-line react/prop-types
export const ProjectCard = ({ title, description, link }) => (
  <div className="border p-4 m-2 rounded-lg shadow-lg">
    <h2 className="text-2xl">{title}</h2>
    <p>{description}</p>
    <a href={link} className="text-blue-500">View on GitHub</a>
  </div>
);
