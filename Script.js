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

let githubRepositories = [];
let fallbackProjectArticles = [];

function createProjectArticle(repository) {
    const article = document.createElement('article');
    const title = document.createElement('h3');
    const link = document.createElement('a');
    const topics = document.createElement('div');
    const description = document.createElement('p');

    link.href = repository.html_url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = repository.name;

    title.appendChild(link);
    title.append(' | Projeto no GitHub');

    topics.className = 'project-topics';
    topics.setAttribute('aria-label', 'Tópicos do projeto');

    if (Array.isArray(repository.topics) && repository.topics.length > 0) {
        repository.topics.forEach(topic => {
            const tag = document.createElement('span');

            tag.className = 'project-topic';
            tag.textContent = topic;
            topics.appendChild(tag);
        });
    }

    description.textContent = repository.description || 'Projeto disponível no GitHub.';

    article.append(title);

    if (topics.children.length > 0) {
        article.appendChild(topics);
    }

    article.appendChild(description);

    return article;
}

function repositoryMatchesSearch(repository, searchTerm) {
    const searchableContent = [
        repository.name,
        repository.description,
        repository.language,
        ...(Array.isArray(repository.topics) ? repository.topics : [])
    ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

    return searchableContent.includes(searchTerm.toLowerCase());
}

function renderProjects(repositories) {
    const projectsList = document.querySelector('#projetos .projects-list');

    if (!projectsList) {
        return;
    }

    const projectListFragment = document.createDocumentFragment();

    repositories.forEach(repository => {
        projectListFragment.appendChild(createProjectArticle(repository));
    });

    projectsList.replaceChildren(projectListFragment);
}

function filterFallbackProjects(searchTerm) {
    fallbackProjectArticles.forEach(article => {
        article.style.display = article.textContent.toLowerCase().includes(searchTerm.toLowerCase()) ? 'block' : 'none';
    });
}

function setupProjectSearch() {
    const searchInput = document.getElementById('projects-search-input');

    if (!searchInput) {
        return;
    }

    searchInput.addEventListener('input', event => {
        const searchTerm = event.target.value.trim();

        if (githubRepositories.length === 0) {
            filterFallbackProjects(searchTerm);
            return;
        }

        const filteredRepositories = searchTerm
            ? githubRepositories.filter(repository => repositoryMatchesSearch(repository, searchTerm))
            : githubRepositories;

        renderProjects(filteredRepositories);
    });
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
        githubRepositories = repositories.filter(repository => !repository.fork && !repository.archived);

        if (githubRepositories.length === 0) {
            return;
        }

        renderProjects(githubRepositories);
    } catch (error) {
        console.warn('Não foi possível carregar os projetos do GitHub. Mantendo projetos cadastrados no HTML.', error);
    }
}

// Inicializar com a primeira aba
document.addEventListener('DOMContentLoaded', () => {
    fallbackProjectArticles = Array.from(document.querySelectorAll('#projetos .projects-list article'));
    setupProjectSearch();
    loadGitHubProjects();
    showTab('experiencia-profissional');
});
