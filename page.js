document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");
  const mainContent = document.querySelector("main");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const contentId = this.getAttribute("href").substring(1);
      loadContent(contentId);
    });
  });

  function loadContent(contentId) {
    const content = {
      sobre: `<h1>Sobre Mim</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque et,
        voluptate aut odio, dolore ratione cum libero reiciendis error debitis
        dignissimos sunt quod excepturi amet! Omnis sed odio quisquam tenetur
        aliquam placeat, voluptatem debitis, molestias, facilis provident
        recusandae in reprehenderit eveniet quasi iusto voluptate voluptatibus
        ducimus quod nostrum quae? Aliquid temporibus impedit sapiente, odio
        maxime odit rerum eligendi debitis voluptatem officia quaerat tempore
        earum deserunt, ipsa, numquam cumque magni quibusdam magnam nemo
        expedita explicabo fugiat exercitationem dolore! Dolor quis ut expedita,
        in possimus accusantium libero eius obcaecati non ipsam odit ducimus.
        Voluptatem, illo ducimus vitae voluptatibus nesciunt ullam nihil. Sed
        iure, est recusandae dignissimos quisquam blanditiis rerum voluptatum
        tenetur aspernatur dolorum voluptatem nesciunt, voluptates dicta nam
        obcaecati. Corrupti nihil voluptatem consequuntur laboriosam laborum
        vero, ratione explicabo? Eveniet laudantium, asperiores provident ipsa
        animi saepe laboriosam iste, eligendi aliquam deserunt quae et omnis,
        nemo ab. Sit, cumque placeat porro, quisquam error ex velit voluptate,
        omnis quia veritatis debitis. Ullam quam molestiae aspernatur debitis
        exercitationem libero nam nesciunt expedita perspiciatis amet mollitia
        adipisci quod inventore sit iusto corporis quae laborum, id earum nihil
        aliquam explicabo. Sunt fugit aliquid magni voluptatum ipsam repellendus
        ut consequatur saepe possimus provident, assumenda molestiae nostrum
        fuga distinctio sequi velit in modi blanditiis dolor? Ex voluptate
        cupiditate perferendis fugit praesentium! Beatae totam optio excepturi
        tempore ipsa asperiores! Aperiam placeat accusamus corporis omnis dolor
        reiciendis assumenda beatae eligendi itaque, distinctio pariatur quod
        laboriosam, vel ex? Vitae, numquam atque eius vero modi praesentium
        reprehenderit, ad nulla nihil natus neque dicta odit eveniet ipsam
        labore deserunt doloremque error saepe sequi enim, rerum alias
        perspiciatis aspernatur dolore!</p>`,
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
        </ul></div>
        `,
      contato: "<h1>Contact</h1><p>Get in touch with us here.</p>",
    };

    mainContent.innerHTML =
      content[contentId] || "<h1>404</h1><p>Content not found.</p>";
  }
});
