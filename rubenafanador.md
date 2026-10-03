# Portafolio de Rubén Afanador — Fotógrafo

Guía de contenido del sitio (`index.html` en esta misma carpeta). Rubén (Ruvén) Afanador es un
fotógrafo real y reconocido — la biografía de abajo usa solo datos verificables de fuentes públicas
(ver **Fuentes** al final), no texto inventado. Lo que sigue siendo `[PLACEHOLDER]` es justamente lo
que esas fuentes no dicen (contacto, precios, descripción de cada foto puntual) y que solo él puede
confirmar.

## Qué trae el sitio ya armado

- **Inicio**: foto de portada (uno de los trabajos reales) + nombre + tagline real ("Fotografía de
  moda y retrato — autor de *Torero* (2001)").
- **Galería**: 6 trabajos reales (`trabajos.json` + carpeta `images/`), con lightbox. El título,
  categoría y descripción de cada foto son un texto sugerido según lo que se ve en la imagen, no el
  dato real de esa toma puntual (cliente, publicación, fecha) — eso nadie más que Rubén lo sabe.
- **Sobre mí**: su foto real (la que compartiste, guardada en `images/ruven-afanador-retrato.jpg`) +
  biografía con datos verificados: nacimiento en Bucaramanga (1959), traslado a Míchigan a los 14
  años, el cambio de "Rubén" a "Ruvén" para la pronunciación en inglés, inicio de carrera en Milán,
  radicación en Nueva York, publicaciones en Vogue/Elle/Marie Claire/Vanity Fair/Rolling Stone/
  Time/New York Magazine, y el libro *Torero* (2001).
- **Servicios**: Retrato / Moda editorial / Proyectos personales — nombres ajustados a lo que
  realmente se sabe que hace (moda y retrato editorial, no eventos tipo bodas). Las descripciones de
  cada tarjeta siguen siendo placeholder.
- **Contacto**: formulario sin backend (solo confirma en pantalla, no envía nada a ningún lado) y
  datos de contacto todavía placeholder — no encontré un email/teléfono profesional público y
  confiable para poner algo real ahí.
- **Gestión** (`gestion.html`): panel para administrar los trabajos (Crear/Consultar/Actualizar/
  Eliminar), mismo patrón que `proyectos1`, sin login.

## Lo que falta (solo Rubén puede confirmarlo)

- [ ] **Datos de cada trabajo** (`trabajos.json` o desde `gestion.html`): título, categoría y
      descripción real de cada foto (cuál cliente/publicación, de qué año, etc.).
- [ ] **Descripción de cada servicio** (`#servicios`): un párrafo corto por tarjeta.
- [ ] **Datos de contacto reales** (`#contacto`): email, teléfono y/o agencia de representación.
- [ ] **Redes sociales** (pie de página): Instagram u otras, si quiere mostrarlas.

## Fuentes de la biografía

- [Ruven Afanador — Wikipedia](https://es.wikipedia.org/wiki/Ruven_Afanador)
- [Ruvén Afanador, el prestigioso fotógrafo colombiano afincado en Nueva York — ArteSacro](https://www.artesacro.org/Noticia/Ver/33361/ruven-afanador-prestigioso-fotografo-colombiano-afincado-nueva-york-autor)
- [Ruvén Afanador: el fotógrafo colombiano más cotizado tras la cámara — Milartienda](https://milartienda.com/ruven-afanador/)
- [Ruvén Afanador — All About Photo](https://www.all-about-photo.com/photographers/photographer/1404/ruven-afanador)

## Repositorio

Este sitio vive en su propio repositorio git (separado del repo `agente`), en
https://github.com/Saraluperilla/Porta-Ruben.
