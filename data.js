// Datos de los trabajos del portafolio. A diferencia de data.js en
// proyectos1 (que trae el arreglo escrito directo en el archivo),
// trabajos.json es un archivo aparte: leerTrabajos() lo trae con
// fetch() la primera vez, y usa lo guardado en localStorage si ya se
// editó algo desde gestion.html.
//
// IMPORTANTE: fetch() de un archivo local necesita que la página se
// sirva por http(s) (ej. GitHub Pages, o un servidor local tipo Live
// Server). Si abres index.html con doble-click (file://), el navegador
// bloquea el fetch y la galería queda vacía.

const CLAVE_TRABAJOS = "trabajosPortafolio";

// Devuelve el arreglo de trabajos (ya sea el de trabajos.json o el que
// haya editado gestion.html). Es async porque fetch() siempre devuelve
// una Promise: la función que la llama necesita usar "await" o ".then()".
async function leerTrabajos() {
  const guardados = localStorage.getItem(CLAVE_TRABAJOS);
  if (guardados) {
    return JSON.parse(guardados);
  }

  const respuesta = await fetch("trabajos.json");
  return respuesta.json();
}

function guardarTrabajos(trabajos) {
  localStorage.setItem(CLAVE_TRABAJOS, JSON.stringify(trabajos));
}
