import { useMemo, useState } from 'react'
import TarjetaContenido from '../components/TarjetaContenido.jsx'
import { peliculas } from '../data/peliculas.js'

const generos = ['Todas', ...Array.from(new Set(peliculas.map((p) => p.genero)))]

function Peliculas() {
  const [generoActivo, setGeneroActivo] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')

  const filtradas = useMemo(() => {
    const texto = busqueda.trim().toLowerCase()
    return peliculas.filter((pelicula) => {
      const coincideGenero = generoActivo === 'Todas' || pelicula.genero === generoActivo
      const coincideTexto =
        texto === '' || pelicula.titulo.toLowerCase().includes(texto)
      return coincideGenero && coincideTexto
    })
  }, [generoActivo, busqueda])

  return (
    <div className="pagina">
      <section className="encabezado-pagina encabezado-pagina--peliculas">
        <div className="contenedor">
          <span className="encabezado-pagina__etiqueta">Filmografía</span>
          <h1 className="encabezado-pagina__titulo">Películas Disney</h1>
          <p className="encabezado-pagina__descripcion">
            De la era dorada a los grandes estrenos: un recorrido por los filmes que hicieron historia.
          </p>
        </div>
      </section>

      <section className="contenedor seccion">
        <div className="cinta-destacada" style={{ background: peliculas[0].color }}>
          <div className="cinta-destacada__contenido">
            <span className="cinta-destacada__etiqueta">Favorita del público</span>
            <h2>{peliculas[0].titulo}</h2>
            <p>{peliculas[0].descripcion}</p>
            <div className="cinta-destacada__meta">
              <span>{peliculas[0].anio}</span>
              <span>{peliculas[0].genero}</span>
              <span>{peliculas[0].duracion}</span>
              <span>{peliculas[0].clasificacion}</span>
            </div>
          </div>
          <span className="cinta-destacada__emoji" aria-hidden="true">{peliculas[0].emoji}</span>
        </div>

        <div className="filtros filtros--simple">
          <div className="buscador">
            <span className="buscador__icono" aria-hidden="true">🔍</span>
            <input
              type="text"
              className="buscador__input"
              placeholder="Buscar película..."
              value={busqueda}
              onChange={(evento) => setBusqueda(evento.target.value)}
              aria-label="Buscar películas"
            />
          </div>
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
          {filtradas.map((pelicula) => (
            <TarjetaContenido
              key={pelicula.id}
              titulo={pelicula.titulo}
              descripcion={pelicula.descripcion}
              emoji={pelicula.emoji}
              color={pelicula.color}
              etiqueta={`${pelicula.anio}`}
              meta={[pelicula.genero, pelicula.duracion, pelicula.clasificacion]}
              pie={<button type="button" className="boton boton--mini">Ver detalle</button>}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Peliculas
