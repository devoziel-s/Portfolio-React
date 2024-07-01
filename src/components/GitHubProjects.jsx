import { useEffect, useState } from 'react';

export const GitHubProjects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/devoziel-s/repos");
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-4xl mb-4">Meus Projetos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.length === 0 ? (
          <p>Loading...</p>
        ) : (
          repos.map((repo) => (
            <div key={repo.id} className="border p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl">{repo.name}</h2>
              <p>{repo.description}</p>
              <a href={repo.html_url} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                Ir para o Repositório
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
