import TarjetaPersonaje from '../components/TarjetaPersonaje.jsx'
import Carrusel from '../components/Carrusel.jsx'
import { colecciones } from '../data/inicio.js'
import { personajes } from '../data/personajes.js'
import { peliculas } from '../data/peliculas.js'

const moods = [
  { id: 1, titulo: 'Para reír en familia', emoji: '😂', color: 'linear-gradient(135deg, #f6d365, #fda085)' },
  { id: 2, titulo: 'Aventuras épicas', emoji: '⚔️', color: 'linear-gradient(135deg, #eb3349, #f45c43)' },
  { id: 3, titulo: 'Momentos musicales', emoji: '🎵', color: 'linear-gradient(135deg, #f857a6, #7b2ff7)' },
  { id: 4, titulo: 'Mundos de fantasía', emoji: '🏰', color: 'linear-gradient(135deg, #7f00ff, #e100ff)' },
  { id: 5, titulo: 'Historias que inspiran', emoji: '✨', color: 'linear-gradient(135deg, #00c6ff, #0072ff)' },
  { id: 6, titulo: 'Clásicos de siempre', emoji: '🎩', color: 'linear-gradient(135deg, #ff4b5c, #ffb347)' }
]

function Explorar() {
  const villanos = personajes.filter((p) => p.categoria === 'Otros').slice(0, 6)
  const destacadas = peliculas.slice(4, 10)

  return (
    <div className="pagina">
      <section className="encabezado-pagina encabezado-pagina--explorar">
        <div className="contenedor">
          <span className="encabezado-pagina__etiqueta">Descubrí</span>
          <h1 className="encabezado-pagina__titulo">Explorar el universo Disney</h1>
          <p className="encabezado-pagina__descripcion">
            Colecciones curadas, estados de ánimo y mundos para encontrar tu próxima historia favorita.
          </p>
        </div>
      </section>

      <section className="contenedor seccion">
        <div className="seccion__encabezado">
          <h2 className="seccion__titulo">Colecciones destacadas</h2>
          <p className="seccion__subtitulo">Agrupadas por tema, personaje y estilo.</p>
        </div>
        <div className="grilla grilla--colecciones">
          {colecciones.map((coleccion) => (
            <article key={coleccion.id} className="coleccion" style={{ background: coleccion.color }}>
              <span className="coleccion__emoji" aria-hidden="true">{coleccion.emoji}</span>
              <div className="coleccion__info">
                <h3>{coleccion.titulo}</h3>
                <p>{coleccion.descripcion}</p>
                <span className="coleccion__items">{coleccion.items} títulos</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contenedor seccion">
        <div className="seccion__encabezado">
          <h2 className="seccion__titulo">¿Cómo te sentís hoy?</h2>
          <p className="seccion__subtitulo">Elegí un estado de ánimo y dejate sorprender.</p>
        </div>
        <div className="moods">
          {moods.map((mood) => (
            <button key={mood.id} type="button" className="mood" style={{ background: mood.color }}>
              <span aria-hidden="true">{mood.emoji}</span>
              {mood.titulo}
            </button>
          ))}
        </div>
      </section>

      <Carrusel titulo="Peliculas para descubrir" subtitulo="Joyas del catálogo que quizás te perdiste">
        {destacadas.map((pelicula) => (
          <article key={pelicula.id} className="tarjeta-pelicula" style={{ background: pelicula.color }}>
            <span className="tarjeta-pelicula__emoji" aria-hidden="true">{pelicula.emoji}</span>
            <div className="tarjeta-pelicula__info">
              <span className="tarjeta-pelicula__anio">{pelicula.anio}</span>
              <h3>{pelicula.titulo}</h3>
              <p>{pelicula.genero}</p>
            </div>
          </article>
        ))}
      </Carrusel>

      <section className="contenedor seccion">
        <div className="seccion__encabezado">
          <h2 className="seccion__titulo">Villanos y leyendas</h2>
          <p className="seccion__subtitulo">Los personajes que roban cámara con estilo propio.</p>
        </div>
        <div className="grilla grilla--personajes">
          {villanos.map((personaje) => (
            <TarjetaPersonaje key={personaje.id} personaje={personaje} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Explorar
