// Mismo patrón CRUD que proyectos1/gestion.js, adaptado a "trabajos" en
// vez de "animales", y sin login (no se pidió para este portafolio).
// Todo dentro de una IIFE para no dejar variables sueltas en el scope
// global (trabajos, siguienteId, etc. no existen fuera de esta función).
(() => {
  // Arrancan vacíos: se llenan en iniciar() más abajo, porque
  // leerTrabajos() es async (usa fetch) y no puede resolverse de
  // inmediato como un arreglo normal.
  let trabajos = [];
  let siguienteId = 1;

  const tablaBody = document.getElementById("tabla-trabajos-body");

  function renderizarTabla() {
    tablaBody.innerHTML = "";

    trabajos.forEach((trabajo) => {
      const fila = document.createElement("tr");

      const id = document.createElement("td");
      id.textContent = trabajo.id;
      fila.appendChild(id);

      const miniatura = document.createElement("td");
      const imagen = document.createElement("img");
      imagen.src = trabajo.imagen;
      imagen.alt = trabajo.titulo;
      imagen.className = "tabla-miniatura";
      miniatura.appendChild(imagen);
      fila.appendChild(miniatura);

      const titulo = document.createElement("td");
      titulo.textContent = trabajo.titulo;
      fila.appendChild(titulo);

      const categoria = document.createElement("td");
      categoria.textContent = trabajo.categoria;
      fila.appendChild(categoria);

      tablaBody.appendChild(fila);
    });
  }

  // Llena los 3 <select class="select-trabajo"> (consultar, actualizar,
  // eliminar) con una opción por trabajo: value = id, texto = "id - título"
  const selectoresTrabajo = document.querySelectorAll(".select-trabajo");

  function renderizarSelectores() {
    selectoresTrabajo.forEach((select) => {
      select.innerHTML = "";

      const opcionVacia = document.createElement("option");
      opcionVacia.value = "";
      opcionVacia.textContent = "— Elige un trabajo —";
      select.appendChild(opcionVacia);

      trabajos.forEach((trabajo) => {
        const opcion = document.createElement("option");
        opcion.value = trabajo.id;
        opcion.textContent = `${trabajo.id} - ${trabajo.titulo}`;
        select.appendChild(opcion);
      });

      // Después de cualquier cambio en "trabajos", todos los selectores
      // vuelven a "Elige un trabajo"; disparar "change" oculta la
      // ficha/formulario de cada sección (ver los listeners de abajo)
      select.value = "";
      select.dispatchEvent(new Event("change"));
    });
  }

  // Se llama después de crear, actualizar o eliminar: guarda en
  // localStorage y vuelve a pintar todo lo que depende de "trabajos"
  function guardarYRefrescar() {
    guardarTrabajos(trabajos);
    renderizarTabla();
    renderizarSelectores();
  }

  // El value de un <select> siempre es texto ("3"), pero los id de los
  // trabajos son números (3); Number() evita que "3" !== 3 con ===
  function buscarTrabajo(id) {
    return trabajos.find((trabajo) => trabajo.id === Number(id));
  }

  // Navegación del sidebar: igual que en proyectos1/gestion.js
  const botonesSidebar = document.querySelectorAll(".sidebar-item[data-seccion]");

  function mostrarSeccion(nombreSeccion) {
    document.querySelectorAll(".seccion").forEach((seccion) => {
      seccion.hidden = seccion.id !== `seccion-${nombreSeccion}`;
    });

    botonesSidebar.forEach((boton) => {
      boton.classList.toggle("activo", boton.dataset.seccion === nombreSeccion);
    });
  }

  botonesSidebar.forEach((boton) => {
    boton.addEventListener("click", () => mostrarSeccion(boton.dataset.seccion));
  });

  // Arma un objeto trabajo (sin id) a partir de un formulario. La usan
  // Crear y Actualizar, porque ambos formularios tienen los mismos "name"
  function leerTrabajoDelFormulario(formulario) {
    const datos = new FormData(formulario);

    return {
      titulo: datos.get("titulo"),
      imagen: datos.get("imagen"),
      categoria: datos.get("categoria"),
      descripcion: datos.get("descripcion"),
    };
  }

  // ---------- Crear ----------
  const formCrear = document.getElementById("form-crear");

  formCrear.addEventListener("submit", (e) => {
    e.preventDefault();

    const nuevoTrabajo = { id: siguienteId, ...leerTrabajoDelFormulario(formCrear) };

    trabajos.push(nuevoTrabajo);
    siguienteId++;
    guardarYRefrescar();

    formCrear.reset();
    mostrarSeccion("mostrar-todos");
  });

  // ---------- Consultar ----------
  const selectConsultar = document.getElementById("consultar-id");
  const fichaTrabajo = document.getElementById("ficha-trabajo");

  function agregarDato(lista, etiqueta, valor) {
    const termino = document.createElement("dt");
    termino.textContent = etiqueta;
    const definicion = document.createElement("dd");
    definicion.textContent = valor;
    lista.append(termino, definicion);
  }

  selectConsultar.addEventListener("change", () => {
    const trabajo = buscarTrabajo(selectConsultar.value);
    fichaTrabajo.innerHTML = "";
    fichaTrabajo.hidden = !trabajo;
    if (!trabajo) return;

    const imagen = document.createElement("img");
    imagen.src = trabajo.imagen;
    imagen.alt = trabajo.titulo;

    const titulo = document.createElement("h2");
    titulo.textContent = trabajo.titulo;

    const descripcion = document.createElement("p");
    descripcion.textContent = trabajo.descripcion;

    const datos = document.createElement("dl");
    agregarDato(datos, "ID", trabajo.id);
    agregarDato(datos, "Categoría", trabajo.categoria);

    fichaTrabajo.append(imagen, titulo, descripcion, datos);
  });

  // ---------- Actualizar ----------
  const selectActualizar = document.getElementById("actualizar-id");
  const formActualizar = document.getElementById("form-actualizar");

  selectActualizar.addEventListener("change", () => {
    const trabajo = buscarTrabajo(selectActualizar.value);
    formActualizar.hidden = !trabajo;
    if (!trabajo) return;

    const campos = formActualizar.elements;
    campos.titulo.value = trabajo.titulo;
    campos.imagen.value = trabajo.imagen;
    campos.categoria.value = trabajo.categoria;
    campos.descripcion.value = trabajo.descripcion;
  });

  formActualizar.addEventListener("submit", (e) => {
    e.preventDefault();

    const trabajo = buscarTrabajo(selectActualizar.value);
    if (!trabajo) return;

    // Se modifica el mismo objeto que ya está dentro de "trabajos" (no
    // una copia), así el cambio se ve en el arreglo sin reemplazarlo
    Object.assign(trabajo, leerTrabajoDelFormulario(formActualizar));

    guardarYRefrescar();
    mostrarSeccion("mostrar-todos");
  });

  // ---------- Eliminar ----------
  const selectEliminar = document.getElementById("eliminar-id");
  const confirmacionEliminar = document.getElementById("eliminar-confirmacion");
  const mensajeEliminar = document.getElementById("eliminar-mensaje");

  selectEliminar.addEventListener("change", () => {
    const trabajo = buscarTrabajo(selectEliminar.value);
    confirmacionEliminar.hidden = !trabajo;
    if (!trabajo) return;

    mensajeEliminar.textContent = `¿Seguro que quieres eliminar "${trabajo.titulo}" (id ${trabajo.id})? Esta acción no se puede deshacer.`;
  });

  document.getElementById("btn-eliminar").addEventListener("click", () => {
    const id = Number(selectEliminar.value);

    trabajos = trabajos.filter((trabajo) => trabajo.id !== id);

    guardarYRefrescar();
    mostrarSeccion("mostrar-todos");
  });

  document.getElementById("btn-cancelar-eliminar").addEventListener("click", () => {
    selectEliminar.value = "";
    confirmacionEliminar.hidden = true;
  });

  // ---------- Arranque ----------
  // leerTrabajos() es async; hasta que no se resuelve, la tabla y los
  // selectores quedan vacíos (no hay login que retrase esto, a diferencia
  // de proyectos1/gestion.js)
  async function iniciar() {
    trabajos = await leerTrabajos();

    // siguienteId = el id más alto que ya existe + 1, para no repetir id
    // aunque se hayan agregado trabajos en sesiones anteriores
    trabajos.forEach((trabajo) => {
      if (trabajo.id >= siguienteId) {
        siguienteId = trabajo.id + 1;
      }
    });

    renderizarTabla();
    renderizarSelectores();
  }

  iniciar();
})();
