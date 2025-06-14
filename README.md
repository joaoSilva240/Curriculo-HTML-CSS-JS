# Site de Portfólio Pessoal

Este é o site de portfólio pessoal de João Vitor da Silva. Ele apresenta suas habilidades, experiência profissional, formação educacional e projetos.

## Tecnologias Utilizadas

As principais tecnologias utilizadas neste projeto são:

*   **HTML5:** Para estruturar as páginas web.
*   **CSS3:** Para estilizar as páginas web.
*   **JavaScript (ES6+):** Para funcionalidades interativas, como alternar a visibilidade de seções.

O projeto é construído com HTML, CSS e JavaScript puros (vanilla), sem depender de frameworks ou bibliotecas externas para sua funcionalidade principal.

## Executando Localmente

Para executar este projeto localmente em sua máquina, siga estes passos:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/joaoSilva240/portfolioJoao.git
    ```
    (Observação: Substitua `https://github.com/joaoSilva240/portfolioJoao.git` pela URL real do repositório, se for diferente.)

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd portfolioJoao
    ```
    (Ou o nome do diretório para onde você clonou o repositório.)

3.  **Abra o `index.html` no seu navegador:**
    Simplesmente abra o arquivo `index.html` localizado na raiz do diretório do projeto com seu navegador web preferido (por exemplo, Google Chrome, Firefox, Safari, Edge).

Não são necessárias etapas especiais de compilação, instalações ou dependências para visualizar este projeto. É um site estático.

## Estrutura do Projeto

O projeto possui uma estrutura simples:

*   `index.html`: O arquivo HTML principal, servindo como ponto de entrada e contendo o conteúdo do currículo.
*   `Style.css`: O arquivo CSS principal para estilizar a página `index.html`.
*   `Script.js`: Contém código JavaScript para elementos interativos, como alternar a visibilidade da seção de atividades extracurriculares.
*   `Pages/`: Este diretório contém arquivos HTML e CSS adicionais para outras páginas vinculadas a partir do portfólio principal:
    *   `www.html`: Uma página sobre a história da World Wide Web.
    *   `table.html`: Uma página exibindo disciplinas da FATEC.
    *   `index.html` (dentro de `Pages/`): O link de navegação rotulado como "Disciplina banco de dados" aponta para o `index.html` principal do portfólio.
    *   `style.css` & `styles.css` (dentro de `Pages/`): Arquivos CSS para as páginas dentro do diretório `Pages`.
*   `assets/`: Este diretório armazena ativos estáticos, como imagens.
    *   `joao.jpg`: A foto de perfil exibida no portfólio.

## Conteúdo do Site

O site de portfólio é organizado em várias seções principais:

*   **Cabeçalho:** Exibe o nome de João Vitor da Silva, foto e uma breve declaração introdutória.
*   **Links de Navegação:** Fornece links para outras páginas:
    *   Uma página sobre a história da World Wide Web.
    *   Uma página listando disciplinas da FATEC.
    *   Um link rotulado "Disciplina banco de dados" que aponta para a página principal do portfólio (`index.html`).
*   **Informações Pessoais:** Detalhes de contato, incluindo cidade, e-mail e número de telefone.
*   **Links:** Links para os perfis de João no LinkedIn e GitHub.
*   **Habilidades Técnicas:** Uma lista abrangente de habilidades técnicas categorizadas em CLI, Front-End, Back-end, Banco de Dados e Outros.
*   **Experiência Profissional:** Detalhes da experiência de trabalho de João, incluindo seu papel como Estagiário de Inovação na Prefeitura Municipal de Boituva.
*   **Formação Acadêmica:** Informações sobre seus estudos em Gestão da Tecnologia da Informação na FATEC e seu curso anterior em Redes de Computadores no IFSP.
*   **Atividades Extracurriculares e Projetos:** Lista cursos adicionais, certificações e projetos pessoais hospedados no GitHub. Esta seção pode ser mostrada ou ocultada usando um botão.
