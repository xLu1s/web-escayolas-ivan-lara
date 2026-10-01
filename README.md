# Web Escayolas Ivan Lara

Web profesional para **Escayolas Ivan Lara**, empresa familiar de escayola, pladur,
techos y aislamientos en **Alcoy (Alicante)** con más de 25 años de experiencia.

- Teléfono (presupuesto sin compromiso): **616 754 170**
- Sin redes sociales ni oficina física: atención telefónica y en la propia obra.
- Web publicada en GitHub Pages: https://xlu1s.github.io/web-escayolas-ivan-lara/

## Stack

- [Astro](https://astro.build/) (sitio estático, componentes `.astro`)
- CSS propio con sistema de diseño (variables, paleta carbón + ámbar)
- JavaScript vanilla para navegación, animaciones de scroll, lightbox y partículas del hero
- Imágenes optimizadas con `astro:assets` (WebP)

## Estructura

```
src/
  assets/images/     Imágenes fuente (se optimizan en el build)
  components/        Componentes de sección (Header, Hero, Services, ...)
  data/site.ts       Contenido y datos del negocio (teléfono, servicios, zonas...)
  data/images.ts     Registro central de imágenes
  layouts/BaseLayout Head, SEO, Open Graph y schema LocalBusiness
  pages/index.astro  Página principal (one-page)
  scripts/main.js    Interacciones del cliente
  styles/global.css  Sistema de diseño y estilos
public/              Assets servidos tal cual (favicon, og-image, vídeo del hero)
```

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:4321/web-escayolas-ivan-lara/)
npm run build    # generar el sitio en dist/
npm run preview  # previsualizar el build
```

## Vídeo del hero (Higgsfield)

El hero admite un vídeo de fondo en `public/video/hero.mp4` (y opcionalmente `hero.webm`).
Si el archivo no existe, se muestra una imagen con animación Ken Burns + partículas.
Para añadirlo, genera el clip con Higgsfield (p. ej. modelo `seedance_2_0_mini`, 5s, 720p,
16:9, partiendo de una imagen) y guárdalo en `public/video/hero.mp4`. El componente
`Hero.astro` lo detecta automáticamente en el siguiente build.

> Nota: la generación con Higgsfield requiere un plan de pago (Basic o superior).

## Despliegue

El workflow `.github/workflows/deploy.yml` compila y publica en GitHub Pages en cada push
a `main`. Para activarlo: **Settings → Pages → Source: GitHub Actions**.

## Base y dominio

Configurado para GitHub Pages de proyecto:

- `site`: `https://xlu1s.github.io`
- `base`: `/web-escayolas-ivan-lara`

Si se usa un dominio propio, ajusta `site`/`base` en `astro.config.mjs` y añade un `CNAME`.
