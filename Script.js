function showTab(tabId) {
    // Esconder todas as seções
    const sections = document.querySelectorAll('.content section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Mostrar a seção selecionada
    const activeSection = document.getElementById(tabId);
    if (activeSection) {
        activeSection.style.display = 'block';
        
        // Se for Experiência, mostra também Formação (conforme o menu "Experiência e Formação")
        if (tabId === 'experiencia-profissional') {
            document.getElementById('formacao').style.display = 'block';
        }
    }

    // Atualizar estado ativo no menu
    const menuLinks = document.querySelectorAll('.sidebar nav ul li a');
    menuLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick').includes(tabId)) {
            link.classList.add('active');
        }
    });
}

const githubProjectsConfig = {
    username: 'joaoSilva240',
    apiVersion: '2026-03-10',
    perPage: 100
};

function createProjectArticle(repository) {
    const article = document.createElement('article');
    const title = document.createElement('h3');
    const link = document.createElement('a');
    const description = document.createElement('p');

    link.href = repository.html_url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = repository.name;

    title.appendChild(link);
    title.append(' | Projeto no GitHub');

    description.textContent = repository.description || 'Projeto disponível no GitHub.';

    article.append(title, description);

    return article;
}

async function loadGitHubProjects() {
    const projectsSection = document.getElementById('projetos');

    if (!projectsSection) {
        return;
    }

    try {
        const response = await fetch(
            `https://api.github.com/users/${encodeURIComponent(githubProjectsConfig.username)}/repos?sort=updated&direction=desc&per_page=${githubProjectsConfig.perPage}`,
            {
                headers: {
                    Accept: 'application/vnd.github+json',
                    'X-GitHub-Api-Version': githubProjectsConfig.apiVersion
                }
            }
        );

        if (!response.ok) {
            throw new Error(`GitHub API retornou status ${response.status}`);
        }

        const repositories = await response.json();
        const personalRepositories = repositories.filter(repository => !repository.fork && !repository.archived);

        if (personalRepositories.length === 0) {
            return;
        }

        const projectTitle = projectsSection.querySelector('h2');
        const projectList = document.createDocumentFragment();

        personalRepositories.forEach(repository => {
            projectList.appendChild(createProjectArticle(repository));
        });

        projectsSection.replaceChildren(projectTitle, projectList);
    } catch (error) {
        console.warn('Não foi possível carregar os projetos do GitHub. Mantendo projetos cadastrados no HTML.', error);
    }
}

// Inicializar com a primeira aba
document.addEventListener('DOMContentLoaded', () => {
    loadGitHubProjects();
    showTab('experiencia-profissional');
});
