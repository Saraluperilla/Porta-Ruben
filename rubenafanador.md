# Portafolio de Rubén Afanador — Fotógrafo

Este documento es la guía de contenido del sitio (`index.html` en esta misma carpeta). No contiene
datos reales de Rubén todavía — el sitio se armó con texto y fotos de ejemplo (todo marcado como
`[PLACEHOLDER]`) para que él lo revise y lo vaya reemplazando con lo suyo.

## Qué trae el sitio ya armado

- **Inicio**: foto grande de portada + nombre + una frase corta de estilo ("tagline").
- **Galería**: grilla de fotos (actualmente fotos de stock de Unsplash, solo de relleno visual),
  con lightbox — al hacer click, la foto se ve en grande.
- **Sobre mí**: retrato + un párrafo de biografía.
- **Servicios**: 3 tarjetas (Retratos, Eventos, Editorial) — nombres también de ejemplo.
- **Contacto**: datos de contacto + un formulario (sin backend: por ahora solo muestra un mensaje
  de confirmación en la pantalla, no envía el mensaje a ningún lado).

## Lo que falta reemplazar (contenido real de Rubén)

- [ ] **Fotos de la galería**: cambiar las URLs de Unsplash en `script.js` (arreglo `fotos`) por
      las fotos reales de su trabajo. Cada foto necesita: `src` (la imagen), `alt` (descripción
      corta) y `categoria` (para agrupar/filtrar si más adelante se agrega esa función).
- [ ] **Foto de portada** (`index.html`, sección `#inicio`) y **retrato** (sección `#sobre-mi`).
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
