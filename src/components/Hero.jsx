import { useState } from 'react'

function Hero({ banners }) {
  const [indice, setIndice] = useState(0)
  const banner = banners[indice]

  const anterior = () => setIndice((i) => (i - 1 + banners.length) % banners.length)
  const siguiente = () => setIndice((i) => (i + 1) % banners.length)

  return (
    <section className="hero" style={{ background: banner.color }}>
      <div className="hero__decoracion" aria-hidden="true">
        <span className="hero__orbita hero__orbita--1" />
        <span className="hero__orbita hero__orbita--2" />
        <span className="hero__orbita hero__orbita--3" />
      </div>

      <div className="contenedor hero__inner">
        <div className="hero__contenido">
          <span className="hero__etiqueta">{banner.etiqueta}</span>
          <h1 className="hero__titulo">{banner.titulo}</h1>
          <p className="hero__subtitulo">{banner.subtitulo}</p>
          <p className="hero__descripcion">{banner.descripcion}</p>
          <div className="hero__acciones">
            <button type="button" className="boton boton--primario">
              ▶ Descubrir más
            </button>
            <button type="button" className="boton boton--fantasma">
              ＋ Mi lista
            </button>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <span className="hero__emoji">{banner.emoji}</span>
        </div>
      </div>

      <div className="hero__indicadores">
        {banners.map((item, i) => (
          <button
            key={item.id}
            type="button"
            className={`punto ${i === indice ? 'punto--activo' : ''}`}
            aria-label={`Ir al destacado ${i + 1}`}
            onClick={() => setIndice(i)}
          />
        ))}
      </div>

      <button type="button" className="hero__flecha hero__flecha--izq" aria-label="Anterior" onClick={anterior}>
        ‹
      </button>
      <button type="button" className="hero__flecha hero__flecha--der" aria-label="Siguiente" onClick={siguiente}>
        ›
      </button>
    </section>
  )
}

export default Hero
