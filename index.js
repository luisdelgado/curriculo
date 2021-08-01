// Formação acadêmica
const education = {
  title: "Pós-graduando em Design de Interação para Artefatos Digitais",
  institution: "CESAR School",
  period: "2020 - 2022",
  project:
    "Design Thinking e Frevo: O uso de uma abordagem de Design para a construção de website comemorativo dos 100 anos do Cariri Olindense durante a pandemia do Coronavírus",
  URL: "",
};
const education2 = {
  title: "Graduado em Ciência da Computação",
  institution: "Universidade Federal de Pernambuco",
  period: "2012 - 2018",
  project:
    "Relevância Prática de Fatores que Contribuem para Conflito de Merge",
  URL: "https://www.cin.ufpe.br/~tg/2018-2/",
};
const educationDatabase = [education, education2];
var educationHTML = document.getElementById("education");
for (element of educationDatabase) {
  educationHTML.innerHTML = `${educationHTML.innerHTML}
    <li>
        <h5>${element.title}</h5>
        <span>${element.institution} (${element.period})</span><br>
        ${
          element.URL
            ? `<a class="divCenter__a" href="${element.URL}" target="_blank"><i>${element.project}</i></a>`
            : `<span><i>${element.project}</i></span>`
        }
    </li>`;
}

// Experiência profissional
const experience = {
  image: "assets/image/isi.jpg",
  institution:
    "Instituto SENAI de Inovação para Tecnologias da Informação e Comunicação (ISI-TICs)",
  job: "Desenvolvedor de Inovação e Tecnologia",
  period: "2019 - presente",
  description:
    "Principais atividades: dentre as atividades, destacam-se o desenvolvimento front-end, engenharia de softwares/sistemas e UX designer voltado para a Indústria 4.0 em âmbito nacional. O que possibilitou o estudo/utilização de técnicas e tecnologias como Angular 8, 7, Bootstrap, Angular Material, HTML, CSS, TypeScript, MVW, Git, GitHub, Kanban, Scrum, Jira, Next.js, Material-UI, styled-components, JavaScript, Jest, D3.js, React Leaflet, Formik, Bitbucket, Java, OpenLayers, OpenStreetMaps, redimensionamento de imagens, máscaras, Moment.js, Chart.js, criação de tema com paleta de cores, análise de PM Canvas, preenchimento de Matriz CSD, Pesquisa de Benchmark, entrevistas com stakeholders, preenchimento de Mapa de Empatia, elaboração de Big Picture, User Story Map, definição de requisitos do sistema, PostgreSQL, Postman, Spring Boot, Jenkins, Maven, CRUD, MVC, gerenciamento de projeto, Phaser Game 3, MongoDB.",
  URL: "https://www.pe.senai.br/isi-tics/",
};
const experience2 = {
  image: "assets/image/navegue.png",
  institution: "Navegue",
  job: "Cofundador e Desenvolvedor",
  period: "2019 - presente",
  description:
    "Principais atividades: desenvolver soluções que possibilitam melhor visualização de dados, principalmente, sobre pesquisas de origem e destino do Recife, desenvolver site, duas versões do MVP para Android e um sistema web. O que possibilitou o estudo/utilização de técnicas e tecnologias como Java, Angular 8, Bootstrap, Angular Material, HTML, CSS, TypeScript, MVW, Git, GitHub, Kanban, Netlify, definição do escopo do MVP, criação de histórias do usuário, Bitbucket, implantar cultura de design thinking, projetar protótipos de baixa fidelidade, mockups, Postman, modelagem de dados, elaboração de histórias de usuário, Firebase, Python.",
  URL: "https://navegue.app/",
};
const experience3 = {
  image: "assets/image/biciflow.jpg",
  institution: "Biciflow",
  job: "Cofundador, Gerente de Projeto e COO",
  period: "2016 - presente",
  description:
    "Principais atividades: desenvolvimento de sistema web, difundir e atualizar processos que visam uma melhor organização da empresa (ex: OKRs, jornada do usuário, dimensionamento de mercado: TAM, SAM, SOM; Kanban, Scrum, aprimoramento da cultura de bons feedbacks), gerenciar mídias sociais, coordenar o desenvolvimento do projeto Aplicativo Biciflow no qual eu era o responsável direto da primeira metade de execução, representar a startup, promover o networking da instituição com públicos relacionados, lidar com apoiadores visando um melhor relacionamento diante das parcerias firmadas, desenvolvimento front-end do sistema web de criação rotas interativas, criação da página web, gerenciamento e desenvolvimento da versão inicial Android do app, análise de concorrentes e elaboração de modelo de negócios, utilização de técnicas de design thinking e lean para transformação de uma ideia até um produto.",
  URL: "https://www.instagram.com/biciflowapp/",
};

const experienceDatabase = [experience, experience2, experience3];
var experienceHTML = document.getElementById("experience");

// Redirecionar para site
function redirect(URL) {
  window.open(URL, "_blank");
}

for (element of experienceDatabase) {
  experienceHTML.innerHTML = `${experienceHTML.innerHTML}
    <li>
        <div class="wrapper wrapper--twoColumns wrapper__div div--card" onClick="redirect('${element.URL}')">
          <div class="divCenter div--image">
            <img src="${element.image}" alt="${element.institution}" style="width:calc(${element.description.length} * 0.093897%); border-radius: 20px;">
          </div>
          <div class="card__container">
            <h3>${element.institution}</h3>
            <h4>${element.job} <span>(${element.period})</span></h4>
            <p>${element.description}</p>
          </div>
        </div>
    </li>`;
}

// Projetos
const project = {
  image: "assets/image/saude.png",
  title: "Saúde 10 Anos no Futuro",
  subtitle: "Onde estamos e onde podemos ir",
  description:
    "Foi um trabalho de Foresight Thinking desenvolvido na disciplina Pensando Empreendimentos no Futuro em 2018. Coletar sinais, reunir tendências, fazer previsões, criar possibilidades de cenários, construir personas e...",
};
const project2 = {
  image: "assets/image/acidentesTransitoRecife.png",
  title: "Acidentes de Trânsito no Recife",
  description:
    "Foi o projeto para a disciplina de Visualização de Dados em 2017. Colocamos em prática conceitos vistos em sala de aula. Para isso utilizamos bases de dados abertas disponíveis pela prefeitura do Recife dos acidentes de trânsito de recife nos anos de 2015 e 2016. Utilizando a biblioteca D3 em JavaScript fiz o histograma.",
};
const project3 = {
  image: "assets/image/cariri.png",
  title: "TCM Cariri Olindense",
  subtitle: "Landing page",
  description:
    "Conhecida como a mais antiga troça de frevo de Olinda, foi fundada em 15 de fevereiro de 1921. Desde 2020, trabalho tanto no design, utilizando as melhores abordagens de Design Thinking, tanto no desenvolvimento Web Front-end com Angular 8.",
};
const projectsDatabase = [project, project2, project3];
var projectsHTML = document.getElementById("project");
for (element of projectsDatabase) {
  projectsHTML.innerHTML = `${projectsHTML.innerHTML}
    <div class="wrapper__div div--cardSmall">
      <img src="${element.image}" alt="${element.title}" style="width:100%">
      <div class="card__container">
          <h4><b>${element.title}</b></h4> 
          ${element.subtitle ? `<h5><b>${element.subtitle}</b></h5>` : ""} 
          <p>${element.description}</p> 
      </div>
    </div>`;
}

// Hobbies
// Filmes
