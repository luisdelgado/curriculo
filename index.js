// Formação acadêmica
const education = {
  title: "Pós-graduando em Design de Interação para Artefatos Digitais",
  institution: "CESAR School",
  period: "2020 - 2022",
};
const education2 = {
  title: "Graduado em Ciência da Computação",
  institution: "Universidade Federal de Pernambuco",
  period: "2012 - 2018",
};
const educationDatabase = [education, education2];
var educationHTML = document.getElementById("education");
for (element of educationDatabase) {
  educationHTML.innerHTML = `${educationHTML.innerHTML}
    <li>
        <h5>${element.title}</h5>
        <span>${element.institution} (${element.period})</span>
    </li>`;
}

// Experiência profissional
const experience = {
  image: "assets/isi.jpg",
  institution:
    "Instituto SENAI de Inovação para Tecnologias da Informação e Comunicação (ISI-TICs)",
  job: "Desenvolvedor de Inovação e Tecnologia",
  period: "2019 - presente",
  description:
    "Principais atividades: dentre as atividades, destacam-se o desenvolvimento front-end, engenharia de softwares/sistemas e UX designer voltado para a Indústria 4.0 em âmbito nacional. O que possibilitou o estudo/utilização de técnicas e tecnologias como Angular 8, 7, Bootstrap, Angular Material, HTML, CSS, TypeScript, MVW, Git, GitHub, Kanban, Scrum, Jira, Next.js, Material-UI, styled-components, JavaScript, Jest, D3.js, React Leaflet, Formik, Bitbucket, Java, OpenLayers, OpenStreetMaps, redimensionamento de imagens, máscaras, Moment.js, Chart.js, criação de tema com paleta de cores, análise de PM Canvas, preenchimento de Matriz CSD, Pesquisa de Benchmark, entrevistas com stakeholders, preenchimento de Mapa de Empatia, elaboração de Big Picture, User Story Map, definição de requisitos do sistema, PostgreSQL, Postman, Spring Boot, Jenkins, Maven, CRUD, MVC, gerenciamento de projeto, Phaser Game 3, MongoDB.",
};
const experienceDatabase = [experience];
var experienceHTML = document.getElementById("experience");
for (element of experienceDatabase) {
  experienceHTML.innerHTML = `${experienceHTML.innerHTML}
    <li>
        <div class="wrapper wrapper--twoColumns wrapper__div div--block">
          <div>
            <img src="${element.image}" alt="${element.institution}" style="width:85%; padding: 15px 15px; border-radius: 20px">
          </div>
          <div class="block__container">
            <h3>${element.institution}</h3>
            <h4>${element.job} <span>(${element.period})</span></h4>
            <p>${element.description}</p>
          </div>
        </div>
    </li>`;
}

// Projetos
const project = {
  image: "assets/saude.png",
  title: "Saúde 10 Anos no Futuro",
  subtitle: "Onde estamos e onde podemos ir",
  description:
    "Foi um trabalho de Foresight Thinking desenvolvido na disciplina Pensando Empreendimentos no Futuro em 2018. Coletar sinais, reunir tendências, fazer previsões, criar possibilidades de cenários, construir personas e...",
};
const project2 = {
  image: "assets/acidentesTransitoRecife.png",
  title: "Acidentes de Trânsito no Recife",
  description:
    "Foi o projeto para a disciplina de Visualização de Dados em 2017. Colocamos em prática conceitos vistos em sala de aula. Para isso utilizamos bases de dados abertas disponíveis pela prefeitura do Recife dos acidentes de trânsito de recife nos anos de 2015 e 2016. Utilizando a biblioteca D3 em JavaScript fiz o histograma.",
};
const project3 = {
  image: "assets/cariri.png",
  title: "TCM Cariri Olindense",
  subtitle: "Landing page",
  description:
    "Conhecida como a mais antiga troça de frevo de Olinda, foi fundada em 15 de fevereiro de 1921. Desde 2020, trabalho tanto no design, utilizando as melhores abordagens de Design Thinking, tanto no desenvolvimento Web Front-end com Angular 8.",
};
const projectsDatabase = [project, project2, project3];
var projectsHTML = document.getElementById("project");
for (element of projectsDatabase) {
  projectsHTML.innerHTML = `${projectsHTML.innerHTML}
    <div class="wrapper__div div--blockSmall">
      <img src="${element.image}" alt="${element.title}" style="width:100%">
      <div class="block__container">
          <h4><b>${element.title}</b></h4> 
          ${element.subtitle ? `<h5><b>${element.subtitle}</b></h5>` : ""} 
          <p>${element.description}</p> 
      </div>
    </div>`;
}

// Hobbies
// Filmes
