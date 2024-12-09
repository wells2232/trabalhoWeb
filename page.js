document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");
  const mainContent = document.querySelector("main");
  const contactButton = document.querySelector(".contact-button a");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const contentId = this.getAttribute("href").substring(1);
      loadContent(contentId);
    });
  });

  function addContactButtonEvent() {
    const contactButton = document.querySelector(".contact-button a");
    // se o botão de contato existir, adiciona o evento de clique
    if (contactButton) {
      contactButton.addEventListener("click", function (event) {
        event.preventDefault();
        loadContent("contato");
      });
    }
  }

  function loadContent(contentId) {
    const content = {
      home: `<div class="home-content">
        <div class="home-text">
          <span>Olá,</span>
          <span>Sou <span class="glitch">Wellington</span></span>
          <span>Estudante de Análise e Desenvolvimento de Sistemas</span>
        </div>
        <div class="contact-button"><a href="#contato">Contato</a></div>
      </div>`,
      sobre: `<h1>Sobre Mim</h1><p>Olá! Me chamo Wellington, tenho 25 anos, atualmente morando em São José dos Campos, São Paulo, e cursando Análise e Desenvolvimento de Sistemas na Uninter. Minha vida é uma mistura interessante de tecnologia, arte e entretenimento.</p>
      <p>Como Hobby, gosto de fazer Arte 3D, principalmente modelagem de cenários estilizados. Também gosto de jogos de tabuleiro e video-game. Meu jogo favorito é Elden Ring. Também adoro filmes, "Interestelar" ocupa um lugar especial em meu coração, sendo meu filme favorito - um filme que combina ciência, filosofia e emoção.</p>
      <p>Gosto de culinária japonesa, principalmente sushi. Também sou apaixonado por café, e gosto de experimentar diferentes métodos de preparo e grãos.</p>
      <p>Meu objetivo é me tornar um desenvolvedor e trabalhar em projetos que tenham um impacto positivo na vida das pessoas.</p>`,
      formacao: `<div class="formacao"><h1 id="formacao">Formação</h1>
        <ul class="items-formacao">
          <ul class="item-formacao">
            <li>Análise e Desenvolvimento de Sistemas</li>
            <li>Uninter</li>
            <li>Junho/2024 - Em Andamento</li>
          </ul>
          <ul class="item-formacao">
            <li>Ensino Médio</li>
            <li>E.E João Cursino - São José dos Campos/SP</li>
            <li>Fevereiro/2014 - Dezembro/2018</li>
          </ul>
        </ul>
        <h1>Idiomas</h1>
        <ul class="item-idiomas">
          <li>Português - Nativo</li>
          <li>Inglês - Avançado</li>
        </ul></div>
        `,
      portfolio: `<h1 id="portfolio">Portfolio</h1>
      <div>
        <ul class="project-list">
          <li>
            <div class="card-projeto">
              <a href="https://finance-ai-self.vercel.app/login" target="_blank">
                <img src="/images/finance-ai.png" alt="" />
                Finance.AI
              </a>
            </div>
          </li>
        </ul>
      </div>`,
      contato: `<h1 id="contato">Contato</h1>
      <div class="contato-card">
        <form class="form" action="">
          <label for="text">Nome: </label>
          <input type="text" name="name" />
          <label for="email">E-mail: </label>
          <input type="email" name="email" />
          <label for="Mensagem">Mensagem: </label>
          <textarea
            name="Mensagem"
            id="Mensagem"
            cols="30"
            rows="10"
          ></textarea>
        </form>
      </div>`,
    };

    // se o conteúdo existir, exibe-o, caso contrário, exibe uma mensagem de erro e o botão de contato
    mainContent.innerHTML =
      content[contentId] || "<h1>404</h1><p>Content not found.</p>";
    addContactButtonEvent();
  }

  addContactButtonEvent();
});
