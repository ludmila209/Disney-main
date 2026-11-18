import Hero from '../components/Hero.jsx'
import Carrusel from '../components/Carrusel.jsx'
import TarjetaPersonaje from '../components/TarjetaPersonaje.jsx'
import TarjetaContenido from '../components/TarjetaContenido.jsx'
import { personajes } from '../data/personajes.js'
import { peliculas } from '../data/peliculas.js'
import { banners, carruselDestacado, novedades, estadisticas } from '../data/inicio.js'

const nombresPopulares = [
  'Mickey Mouse',
  'Minnie Mouse',
  'Stitch',
  'Simba',
  'Elsa',
  'Moana',
  'Woody',
  'Buzz Lightyear'
]

const nombresClasicos = ['Mickey Mouse', 'Pato Donald', 'Blancanieves', 'Winnie the Pooh', 'Ariel', 'Aladdín']

function Inicio() {
  const populares = nombresPopulares
    .map((nombre) => personajes.find((p) => p.nombre === nombre))
    .filter(Boolean)

  const clasicos = nombresClasicos
    .map((nombre) => personajes.find((p) => p.nombre === nombre))
    .filter(Boolean)

  const proximosEstrenos = peliculas.slice(0, 6)

  return (
    <div className="pagina">
      <Hero banners={banners} />

      <section className="contenedor stats">
        {estadisticas.map((item) => (
          <div key={item.etiqueta} className="stat">
            <span className="stat__valor">{item.valor}</span>
            <span className="stat__etiqueta">{item.etiqueta}</span>
          </div>
        ))}
      </section>

      <Carrusel
        titulo="Destacado en Disney Verse"
        subtitulo="Colecciones y mundos que te van a encantar"
      >
        {carruselDestacado.map((item) => (
          <article key={item.id} className="tarjeta-destacada" style={{ background: item.color }}>
            <span className="tarjeta-destacada__emoji" aria-hidden="true">
              {item.emoji}
            </span>
            <div className="tarjeta-destacada__info">
              <h3>{item.titulo}</h3>
              <p>{item.subtitulo}</p>
              <button type="button" className="boton boton--mini">
                Explorar
              </button>
            </div>
          </article>
        ))}
      </Carrusel>

      <section className="contenedor seccion">
        <div className="seccion__encabezado">
          <h2 className="seccion__titulo">Personajes populares</h2>
          <p className="seccion__subtitulo">
            Los favoritos de siempre, listos para acompañar tus historias.
          </p>
        </div>
        <div className="grilla grilla--personajes">
          {populares.map((personaje) => (
            <TarjetaPersonaje key={personaje.id} personaje={personaje} />
          ))}
        </div>
      </section>

      <Carrusel
        titulo="Próximos estrenos"
        subtitulo="Películas imperdibles de nuestro catálogo"
      >
        {proximosEstrenos.map((pelicula) => (
          <article key={pelicula.id} className="tarjeta-pelicula" style={{ background: pelicula.color }}>
            <span className="tarjeta-pelicula__emoji" aria-hidden="true">
              {pelicula.emoji}
            </span>
            <div className="tarjeta-pelicula__info">
              <span className="tarjeta-pelicula__anio">{pelicula.anio}</span>
              <h3>{pelicula.titulo}</h3>
              <p>{pelicula.genero} · {pelicula.duracion}</p>
            </div>
          </article>
        ))}
      </Carrusel>

      <section className="contenedor seccion">
        <div className="seccion__encabezado">
          <h2 className="seccion__titulo">Clásicos Disney</h2>
          <p className="seccion__subtitulo">
            Películas que marcaron época y sus personajes inolvidables.
          </p>
        </div>
        <div className="clasicos">
          <div className="clasicos__destacado">
            <span className="clasicos__emoji" aria-hidden="true">🎬</span>
            <h3>La era dorada de la animación</h3>
            <p>
              Desde Steamboat Willie hasta los clásicos modernos, recorré los títulos que
              construyeron la magia de Disney a lo largo de las décadas.
            </p>
            <button type="button" className="boton boton--primario">Ver la colección</button>
          </div>
          <div className="clasicos__grilla">
            {clasicos.map((personaje) => (
              <TarjetaPersonaje key={personaje.id} personaje={personaje} compacta />
            ))}
          </div>
        </div>
      </section>

      <section className="contenedor seccion">
        <div className="seccion__encabezado">
          <h2 className="seccion__titulo">Novedades e historias destacadas</h2>
          <p className="seccion__subtitulo">Lo último que llegó al universo Disney Verse.</p>
        </div>
        <div className="grilla grilla--contenido">
          {novedades.map((item) => (
            <TarjetaContenido
              key={item.id}
              titulo={item.titulo}
              descripcion={item.descripcion}
              emoji={item.emoji}
              color={item.color}
              etiqueta={item.etiqueta}
              pie={<button type="button" className="boton boton--mini">Leer más</button>}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Inicio
