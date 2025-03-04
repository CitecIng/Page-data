// Contenct.js

/**
 * Función que carga el contenido HTML de la sección especificada
 * y lo inyecta en el elemento con id "main-content".
 *
 * @param {string} section - Nombre de la sección (sin extensión).
 */
function loadContent(section) {
    fetch(section + ".html")
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById("main-content").innerHTML = data;
        console.log("Se ha cargado la sección: " + section);
      })
      .catch(error => console.error("Error cargando la sección:", error));
  }
  
  // Al cargar el DOM, se adjuntan los eventos y se carga la sección "Inicio"
  document.addEventListener("DOMContentLoaded", () => {
    // Cargar la sección por defecto (Inicio.html)
    loadContent("Inicio");
  
    // Agregar event listeners a los enlaces que tengan el atributo data-section
    const navLinks = document.querySelectorAll("nav a[data-section]");
    navLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault(); // Evita la recarga completa de la página
        const section = event.currentTarget.getAttribute("data-section");
        loadContent(section);
        
        // Si el menú móvil está abierto, lo cierra al hacer clic
        const navMenu = document.getElementById("nav-menu");
        if (navMenu && navMenu.classList.contains("open")) {
          navMenu.classList.remove("open");
        }
      });
    });
  });
  