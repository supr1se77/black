document.addEventListener("DOMContentLoaded", function() {
    const loaderWrapper = document.querySelector(".loader-wrapper");
    const links = document.querySelectorAll(".nav-links .link a, .btn");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            // Verifique se o link clicado é "Recursos" ou contém a palavra "Recursos"
            if (link.textContent.trim().toLowerCase() === "recursos" || link.href.toLowerCase().includes("/recursos")) {
                // Impede o comportamento padrão do link (redirecionamento)
                event.preventDefault();

                // Obtém a referência à seção de recursos
                const recursosSection = document.querySelector(".recursos-section");

                // Rola a página até a seção de recursos
                recursosSection.scrollIntoView({ behavior: "smooth" });
            } else if (link.textContent.trim().toLowerCase() === "serviços" || link.href.toLowerCase().includes("/serviços")) {
                // Impede o comportamento padrão do link (redirecionamento)
                event.preventDefault();

                // Obtém a referência à seção de serviços
                const servicosSection = document.querySelector(".servicos-section");

                // Rola a página até a seção de serviços
                servicosSection.scrollIntoView({ behavior: "smooth" });
            } else {
                // Mostra o loader quando um link for clicado
                loaderWrapper.style.display = "flex";
            }
        });
    });

    // Esconde o loader após o carregamento da página
    window.addEventListener("load", function() {
        loaderWrapper.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const loaderWrapper = document.querySelector(".loader-wrapper");

    // Mostra o loader quando o evento DOMContentLoaded ocorrer
    loaderWrapper.style.display = "flex";

    const links = document.querySelectorAll(".nav-links .link a, .btn");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            // Restante do seu código para tratar o redirecionamento dos links...

            // Mostra o loader quando um link for clicado
            loaderWrapper.style.display = "flex";
        });
    });

    // Esconde o loader após o carregamento da página
    window.addEventListener("load", function() {
        loaderWrapper.style.display = "none";
    });
});
