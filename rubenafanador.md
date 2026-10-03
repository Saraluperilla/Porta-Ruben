# Portafolio de Rubén Afanador — Fotógrafo

Este documento es la guía de contenido del sitio (`index.html` en esta misma carpeta). No contiene
datos reales de Rubén todavía — el sitio se armó con texto y fotos de ejemplo (todo marcado como
`[PLACEHOLDER]`) para que él lo revise y lo vaya reemplazando con lo suyo.

## Qué trae el sitio ya armado

- **Inicio**: foto grande de portada (uno de los trabajos reales) + nombre + una frase corta de
  estilo ("tagline", todavía placeholder).
- **Galería**: 6 trabajos reales de Rubén (`trabajos.json` + carpeta `images/`), con lightbox — al
  hacer click, la foto se ve en grande. Los títulos/categorías/descripciones de cada uno son un
  texto sugerido (ver más abajo), no los datos reales.
- **Sobre mí**: retrato + un párrafo de biografía (el retrato todavía es una foto de stock, no una
  foto real de Rubén — sería raro usar una de sus fotos de trabajo como si fuera su propia cara).
- **Servicios**: 3 tarjetas (Retratos, Eventos, Editorial) — nombres también de ejemplo.
- **Contacto**: datos de contacto + un formulario (sin backend: por ahora solo muestra un mensaje
  de confirmación en la pantalla, no envía el mensaje a ningún lado).
- **Gestión** (`gestion.html`): panel para administrar los trabajos (Crear/Consultar/Actualizar/
  Eliminar), igual que el de `proyectos1`, pero sin login.

## Lo que falta reemplazar (contenido real de Rubén)

- [ ] **Título, categoría y descripción de cada trabajo** (`trabajos.json`, o desde `gestion.html`):
      les puse un texto descriptivo de lo que se ve en la foto, no los datos reales de cada toma
      (cliente, publicación, fecha, etc.).
- [ ] **Retrato de "Sobre mí"** (`index.html`, sección `#sobre-mi`): sigue siendo una foto de stock.
- [ ] **Tagline**: una frase corta que describa su estilo de fotografía (ej. "Retrato y vida
      urbana", "Fotografía documental en blanco y negro"...).
- [ ] **Biografía** (sección `#sobre-mi`): quién es, hace cuánto fotografía, qué lo inspira,
      formación o experiencia relevante.
- [ ] **Servicios**: confirmar si son Retratos/Eventos/Editorial o cambiarlos por los que de verdad
      ofrece, con una descripción corta de cada uno.
- [ ] **Datos de contacto** (sección `#contacto`): email, teléfono y/o redes sociales reales.
- [ ] **Pie de página**: año y redes sociales (Instagram, etc.).

## Nota sobre lo que NO se inventó

No se escribió ninguna biografía, testimonio de cliente, ni dato de contacto fabricado — eso serían
afirmaciones sobre una persona real, y se dejaron como placeholders explícitos en vez de rellenarlos
con texto genérico que pudiera pasar por información verdadera.

## Repositorio

Este sitio vive en su propio repositorio git (separado del repo `agente`), en
https://github.com/SaraPerilla/Porta-Ruben.
