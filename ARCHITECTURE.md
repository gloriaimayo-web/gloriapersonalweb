# Arquitectura de gloriamayo.com

> Generado a partir de una revisión completa del repo el 2026-07-09, como base para el rediseño.

## 1. Resumen en una frase

Sitio estático **multi-página en HTML/CSS/JS vanilla** (sin build, sin framework, sin `package.json`), servido directamente desde GitHub, que actúa como landing personal de Gloria Mayo y como página de captura de leads para el producto **AppointSuite** (CRM/booking, backend separado).

## 2. Hosting y dominios

| Sitio | Dominio | Repo / hosting | Stack |
|---|---|---|---|
| Landing personal (este repo) | gloriamayo.com | `gloriaimayo-web/gloriapersonalweb` en GitHub → Vercel (auto-deploy) | HTML estático |
| Backend CRM/booking (AppointSuite) | **appointsuite.tech** | PythonAnywhere | Django |
| Dominio | gloriamayo.com | GoDaddy | — |

⚠️ **Nota de migración reciente:** hasta el commit `f07565f` (2026-06-24), `demo.html` todavía apuntaba al dominio legacy `appointly.gloriamayo.com`, que quedó con el certificado SSL roto y hacía fallar el formulario en silencio. Ya está corregido para apuntar a `appointsuite.tech/api/demo-request/`, igual que `index.html`. Si el rediseño toca formularios, confirmar que **todas** las referencias usan `appointsuite.tech`.

## 3. Inventario de archivos (raíz del repo)

```
index.html                 ← página principal (EN por defecto, toggle a ES vía JS) — 1201 líneas
demo.html                  ← formulario "Request a Demo", postea al CRM
thank-you.html             ← página de agradecimiento tras el form
booking_page.html          ← plantilla Django ({% load static %}) del CRM, NO es parte del sitio estático
gloria-mayo-preview.jsx    ← mockup React de un diseño alternativo, no usado en producción
viejos index/index.html    ← copia idéntica del index.html actual (ver §6)
foto-gloria.jpeg           ← foto hero
logo*.png / logo*.jpeg     ← logos de marca propia y de proyectos del portafolio
glservicesgroup-site.zip   ← sitio EMPAQUETADO de otra propiedad (G&L Services Group), no desplegado desde aquí
index-update.zip           ← borrador WIP de un index.html rediseñado (ver §6)
```

No hay `package.json`, `.vercel/`, `netlify.toml` ni pipeline de build: cada HTML es un archivo autocontenido con `<style>` inline y `<script>` inline.

## 4. Arquitectura de `index.html` (página principal)

Un solo archivo de **1201 líneas**, todo inline:

- **`<style>` inline** (~300 líneas): variables CSS en `:root` (paleta borgoña/rosa, tipografía "Cormorant Garamond" + "Great Vibes" + "Inter"), diseño mobile-first con 2 breakpoints (`1100px`, `780px`).
- **Secciones** (todas dentro de `<main>`, ancladas por `id` para el menú):
  1. `#inicio` — Hero (título, CTA a booking demo, CTA a pricing, foto)
  2. `.stats` — 4 tarjetas de credibilidad (15+ años, bilingüe, empresa, ISO 9001)
  3. `#sobre-mi` — Historia / propuesta de valor
  4. `#experiencia` — Timeline laboral (Costco Canadá, Gobernación de Antioquia) + columna de skills/educación/stack tecnológico
  5. `#servicios` — 4 tarjetas de servicios (Booking Ecosystem, Scheduling, Integración, Loyalty)
  6. `#pricing` — 3 planes ($120/$180/$50 mensual) + tarjeta de demo privada
  7. Fit banner — a quién está dirigido (salones, barberías, wellness, etc.)
  8. `#proyectos` — Portafolio: G&L Services Group, Vaughan Sewing, AppointSuite, Vivir Ligero
  9. `#contacto` — Datos de contacto + CTA mailto
- **Footer** con año dinámico vía JS.
- **Widgets flotantes** (fuera de `<main>`):
  - Botón "Ask AI" → panel de chat **simulado por reglas** (`if/else` sobre keywords en `sendMessage()`), no es IA real ni llama a ningún LLM.
  - Botón flotante de WhatsApp → abre un **modal de captura de lead** (nombre + teléfono) que hace `POST` a `appointsuite.tech/api/demo-request/` y luego abre `wa.me/14376779018` con mensaje prellenado.

### Bilingüismo (ES/EN)

No hay i18n real ni rutas separadas. **Cada bloque de texto está duplicado en el HTML**, marcado con clases `lang-es` / `lang-en` (+ `lang-hidden` para ocultar). `setLang('es'|'en')` alterna la visibilidad con `classList.toggle`. Esto duplica el volumen de HTML por dos y es la causa principal de que el archivo tenga 1200+ líneas.

## 5. Otras páginas del sitio

- **`demo.html`** — formulario standalone (no comparte el `<style>` de index.html, tiene el suyo propio más simple). Hace `fetch POST` a `appointsuite.tech/api/demo-request/` y redirige a `/thank-you.html` si tiene éxito.
- **`thank-you.html`** — confirmación con link directo a WhatsApp y botón "Back to Home". Estilo propio, tampoco comparte CSS con index.html.
- **`booking_page.html`** — **no es parte de este sitio estático**: es una plantilla Django (`{% load static %}`, `{{ business.name }}`) que vive en el backend de AppointSuite (PythonAnywhere), copiada aquí probablemente como referencia/backup.

Conclusión: **3 hojas de estilo distintas** (`index.html`, `demo.html`, `thank-you.html` cada uno con su propio `<style>`) que comparten paleta de color pero no código — cualquier cambio de marca hay que aplicarlo 3 veces a mano.

## 6. Archivos "sueltos" que valen la pena resolver antes del rediseño

| Archivo | Qué es | Acción sugerida |
|---|---|---|
| `viejos index/index.html` | Copia **idéntica** (diff vacío) al `index.html` actual | Es basura de una carpeta de respaldo manual — se puede borrar o dejar fuera del nuevo repo |
| `index-update.zip` | Borrador de un rediseño donde ES/EN son **páginas separadas** (`index.html` + `index-es.html`) en vez de toggle JS | Revisar si esto refleja la dirección que se quiere tomar para el rediseño (páginas separadas por idioma es más simple de mantener y mejor para SEO que el toggle actual) |
| `glservicesgroup-site.zip` | Sitio completo de **otra propiedad** (G&L Services Group — la empresa matriz), multipágina, con `style.css`/`script.js` separados (no inline) y estructura ES/EN por páginas duplicadas (`about.html`/`about-es.html`, etc.) | No es parte de gloriamayo.com; probablemente se subió aquí por error o como referencia. Útil como ejemplo de que **ya existe** un patrón multipágina con CSS separado que se podría reutilizar para el rediseño |
| `gloria-mayo-preview.jsx` | Mockup en React de una versión alternativa del sitio (secciones: Inicio, Sobre mí, Servicios, Proyectos, **Pasiones** — costura y plantas —, Contacto) | Nunca se compiló/desplegó (no hay build de React en el repo). Sirve como moodboard de contenido, no de código |

## 7. Diagrama de relación entre propiedades

```
                    ┌─────────────────────┐
                    │   gloriamayo.com     │  ← ESTE REPO (landing personal)
                    │  (Vercel, estático)  │
                    └──────────┬───────────┘
                               │ leads / demo requests (fetch POST)
                               ▼
                    ┌─────────────────────┐
                    │  appointsuite.tech   │  ← backend Django (PythonAnywhere)
                    │  CRM + Booking       │
                    └──────────┬───────────┘
                               │ usado por
              ┌────────────────┼─────────────────┐
              ▼                ▼                 ▼
     vaughansewing.ca   glservicesgroup.com   vivirligero.co
     (cliente piloto,    (empresa matriz,      (proyecto web,
      booking en vivo)    portafolio propio)    bienestar)
```

## 8. Puntos a decidir para el rediseño

1. **¿Seguir con un solo archivo gigante por página, o modularizar?** No hay build system hoy — si se quiere componentizar (parciales, un CSS compartido, etc.) hay que introducir uno (Astro/11ty/Vite, o al menos un `style.css` compartido).
2. **Bilingüe:** ¿mantener el toggle JS con contenido duplicado inline, o migrar al patrón de páginas separadas ES/EN que ya se ensayó en `index-update.zip` y que usa `glservicesgroup-site.zip`? Esto último es más liviano por página y mejor para SEO (URLs indexables por idioma).
3. **Unificar estilos** entre `index.html`, `demo.html` y `thank-you.html` (hoy son 3 sistemas de diseño inline separados que están sincronizados a mano).
4. **Limpieza de repo:** decidir si `viejos index/`, los `.zip` y `gloria-mayo-preview.jsx` se quedan como archivo histórico o se sacan del repo antes de reorganizar.
5. **Chat "Ask AI"** es actualmente reglas hardcodeadas — si el rediseño quiere IA real, es una integración nueva (API + backend), no un ajuste visual.
