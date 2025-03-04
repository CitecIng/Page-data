document.addEventListener("DOMContentLoaded", () => {
  function loadContent(section) {
      fetch(`https://citecing.github.io/Pagina/${section}.html`)
          .then((response) => response.text())
          .then((data) => {
              document.getElementById("main-content").innerHTML = data;
              console.log(`Se ha cargado la sección: ${section}`);
          })
          .catch((error) => {
              console.error("Error al cargar la sección:", error);
          });
  }

  // Agregar eventos a los enlaces de navegación
  document.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener("click", (event) => {
          event.preventDefault(); // Evita la recarga de la página
          const section = event.target.getAttribute("data-section");
          loadContent(section);
      });
  });

  // Cargar la sección inicial
  loadContent("Inicio");
});