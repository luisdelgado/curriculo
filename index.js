var experience = {
  image: "assets/saude.png",
  title: "Saúde 10 Anos no Futuro",
  subtitle: "Onde estamos e onde podemos ir",
  description:
    "Foi um trabalho de Foresight Thinking desenvolvido na disciplina Pensando Empreendimentos no Futuro em 2018. Coletar sinais, reunir tendências, fazer previsões, criar possibilidades de cenários, construir personas e narrativas futuras estão entre as atividades que realizei nesse trabalho.",
};
var experience2 = {
  image: "assets/acidentesTransitoRecife.png",
  title: "Acidentes de Trânsito no Recife",
  description:
    "Foi o projeto para a disciplina de Visualização de Dados em 2017. Colocamos em prática conceitos vistos em sala de aula. Para isso utilizamos bases de dados abertas disponíveis pela prefeitura do Recife dos acidentes de trânsito de recife nos anos de 2015 e 2016. Utilizando a biblioteca D3 em JavaScript fiz o histograma.",
};
var expericences = [experience, experience2, experience];
var experiencesHTML = document.getElementById("experience");
expericences.forEach((experience) => {
  experiencesHTML.innerHTML = `${experiencesHTML.innerHTML}
    <div class="wrapper__div">
    <div class="div--block">
        <img src="${experience.image}" alt="Calei" style="width:100%">
        <div class="block__container">
            <h4><b>${experience.title}</b></h4> 
            <h5><b>${experience.subtitle ? experience.subtitle : ""}</b></h5> 
            <p>${experience.description}</p> 
        </div>
    </div>
</div>`;
});
