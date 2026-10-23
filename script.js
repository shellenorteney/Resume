// Ano automático no rodapé
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Fecha o menu mobile depois que o usuário seleciona uma seção
const navbarMenu = document.getElementById("navbarMenu");
const navLinks = document.querySelectorAll("#navbarMenu .nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 992 && navbarMenu.classList.contains("show")) {
      const collapse = bootstrap.Collapse.getOrCreateInstance(navbarMenu);
      collapse.hide();
    }
  });
});

// Botão para voltar ao topo
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 500);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
