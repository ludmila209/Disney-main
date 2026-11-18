import { useState } from 'react'
import TarjetaContenido from '../components/TarjetaContenido.jsx'
import Carrusel from '../components/Carrusel.jsx'
import { series } from '../data/series.js'

const generos = ['Todas', ...Array.from(new Set(series.map((s) => s.genero)))]

function Series() {
  const [generoActivo, setGeneroActivo] = useState('Todas')

  const filtradas =
    generoActivo === 'Todas' ? series : series.filter((serie) => serie.genero === generoActivo)

  const continuar = series.slice(0, 5)

  return (
    <div className="pagina">
      <section className="encabezado-pagina encabezado-pagina--series">
        <div className="contenedor">
          <span className="encabezado-pagina__etiqueta">Series y originales</span>
          <h1 className="encabezado-pagina__titulo">Series Disney</h1>
          <p className="encabezado-pagina__descripcion">
            Aventuras por capítulos para maratonear: animación, ciencia ficción y comedia para toda la familia.
          </p>
        </div>
      </section>

      <Carrusel
        titulo="Seguí maratoneando"
        subtitulo="Series que no vas a querer pausar"
      >
        {continuar.map((serie) => (
          <article key={serie.id} className="tarjeta-episodio" style={{ background: serie.color }}>
            <span className="tarjeta-episodio__emoji" aria-hidden="true">{serie.emoji}</span>
            <div className="tarjeta-episodio__info">
              <span className="tarjeta-episodio__tag">{serie.temporadas} temp.</span>
              <h3>{serie.titulo}</h3>
              <div className="tarjeta-episodio__progreso">
                <span style={{ width: '60%' }} />
              </div>
            </div>
          </article>
        ))}
      </Carrusel>

      <section className="contenedor seccion">
        <div className="filtros filtros--simple">
          <div className="chips" role="group" aria-label="Filtrar por género">
            {generos.map((genero) => (
              <button
                key={genero}
                type="button"
                className={`chip ${genero === generoActivo ? 'chip--activo' : ''}`}
                onClick={() => setGeneroActivo(genero)}
              >
                {genero}
              </button>
            ))}
          </div>
        </div>

        <div className="grilla grilla--contenido">
          {filtradas.map((serie) => (
            <TarjetaContenido
              key={serie.id}
              titulo={serie.titulo}
              descripcion={serie.descripcion}
              emoji={serie.emoji}
              color={serie.color}
              etiqueta={`${serie.temporadas} temp.`}
              meta={[`${serie.anio}`, serie.genero]}
              pie={<button type="button" className="boton boton--mini">Reproducir</button>}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Series
