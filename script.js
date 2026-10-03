// La galería ahora sale de trabajos.json (vía leerTrabajos(), en
// data.js), no de un arreglo escrito a mano. trabajosActuales guarda el
// último arreglo traído, para que el click del lightbox (más abajo)
// sepa qué trabajo le corresponde a cada <figure> sin tener que leerlo
// de nuevo.
const galeriaGrid = document.getElementById("galeria-grid");
let trabajosActuales = [];

// Llena #galeria-grid con una <figure> por cada trabajo. Cada figure
// guarda el índice en data-indice para que el click sepa cuál trabajo
// abrir en el lightbox (ver más abajo).
function renderizarGaleria(trabajos) {
  trabajosActuales = trabajos;
  galeriaGrid.innerHTML = "";

  trabajos.forEach((trabajo, indice) => {
    const figura = document.createElement("figure");
    figura.dataset.indice = indice;

    const imagen = document.createElement("img");
    imagen.src = trabajo.imagen;
    imagen.alt = trabajo.titulo;
    imagen.loading = "lazy";

    figura.appendChild(imagen);
    galeriaGrid.appendChild(figura);
  });
}

// leerTrabajos() es async (usa fetch()), así que esta función también lo
// es: "await" espera a que la Promise se resuelva antes de seguir.
async function iniciarGaleria() {
  const trabajos = await leerTrabajos();
  renderizarGaleria(trabajos);
}

iniciarGaleria();

// --- Lightbox: click en una foto de la galería la abre en grande ---
const lightbox = document.getElementById("lightbox");
const lightboxImagen = document.getElementById("lightbox-imagen");

galeriaGrid.addEventListener("click", (e) => {
  // closest() encuentra el <figure> aunque el click haya sido justo
  // sobre la <img> que tiene adentro
  const figura = e.target.closest("figure");
  if (!figura) return;

  const trabajo = trabajosActuales[Number(figura.dataset.indice)];
  lightboxImagen.src = trabajo.imagen;
  lightboxImagen.alt = trabajo.titulo;
  lightbox.hidden = false;
});

function cerrarLightbox() {
  lightbox.hidden = true;
}

document.getElementById("btn-cerrar-lightbox").addEventListener("click", cerrarLightbox);

// Cierra también al hacer click en el fondo oscuro (no si el click fue
// sobre la imagen misma, por eso se compara con e.target)
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    cerrarLightbox();
  }
});

// --- Menú de celular: el botón ☰ muestra/oculta los links del nav ---
document.getElementById("btn-menu").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("abierto");
});

// --- Formulario de contacto: sin backend, solo confirma en pantalla ---
const formContacto = document.getElementById("form-contacto");
const contactoMensaje = document.getElementById("contacto-mensaje");

formContacto.addEventListener("submit", (e) => {
  e.preventDefault();

  // PLACEHOLDER: esto no envía el mensaje a ningún lado todavía (no hay
  // backend ni servicio de email conectado) — solo confirma en pantalla.
  contactoMensaje.textContent = "¡Gracias! Tu mensaje quedó registrado, pronto te contactaré.";
  contactoMensaje.hidden = false;

  formContacto.reset();
});
