// PLACEHOLDER: fotos de stock de Unsplash, solo de relleno visual.
// Reemplazar "src" por las fotos reales de Rubén (y "alt"/"categoria"
// según corresponda) cuando las tenga listas.
const fotos = [
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80", alt: "Retrato en blanco y negro", categoria: "Retrato" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80", alt: "Retrato urbano", categoria: "Retrato" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=80", alt: "Fotografía de evento", categoria: "Eventos" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=80", alt: "Paisaje urbano", categoria: "Editorial" },
  { src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80", alt: "Retrato de estudio", categoria: "Retrato" },
  { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&q=80", alt: "Fotografía de boda", categoria: "Eventos" },
  { src: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=900&q=80", alt: "Fotografía editorial", categoria: "Editorial" },
  { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&q=80", alt: "Retrato en exteriores", categoria: "Retrato" },
];

// Llena #galeria-grid con una <figure> por cada foto del arreglo de
// arriba. Cada figure guarda el índice en data-indice para que el click
// sepa cuál foto abrir en el lightbox (ver más abajo).
const galeriaGrid = document.getElementById("galeria-grid");

fotos.forEach((foto, indice) => {
  const figura = document.createElement("figure");
  figura.dataset.indice = indice;

  const imagen = document.createElement("img");
  imagen.src = foto.src;
  imagen.alt = foto.alt;
  imagen.loading = "lazy";

  figura.appendChild(imagen);
  galeriaGrid.appendChild(figura);
});

// --- Lightbox: click en una foto de la galería la abre en grande ---
const lightbox = document.getElementById("lightbox");
const lightboxImagen = document.getElementById("lightbox-imagen");

galeriaGrid.addEventListener("click", (e) => {
  // closest() encuentra el <figure> aunque el click haya sido justo
  // sobre la <img> que tiene adentro
  const figura = e.target.closest("figure");
  if (!figura) return;

  const foto = fotos[Number(figura.dataset.indice)];
  lightboxImagen.src = foto.src;
  lightboxImagen.alt = foto.alt;
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
