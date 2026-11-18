import { useMemo, useState } from 'react'
import TarjetaPersonaje from '../components/TarjetaPersonaje.jsx'
import { personajes, categorias } from '../data/personajes.js'

function Personajes() {
  const [busqueda, setBusqueda] = useState('')
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')

  const filtrados = useMemo(() => {
    const texto = busqueda.trim().toLowerCase()
    return personajes.filter((personaje) => {
      const coincideCategoria =
        categoriaActiva === 'Todos' || personaje.categoria === categoriaActiva
      const coincideTexto =
        texto === '' ||
        personaje.nombre.toLowerCase().includes(texto) ||
        personaje.pelicula.toLowerCase().includes(texto)
      return coincideCategoria && coincideTexto
    })
  }, [busqueda, categoriaActiva])

  return (
    <div className="pagina">
      <section className="encabezado-pagina">
        <div className="contenedor">
          <span className="encabezado-pagina__etiqueta">Catálogo</span>
          <h1 className="encabezado-pagina__titulo">Explorá los personajes Disney</h1>
          <p className="encabezado-pagina__descripcion">
            Más de 30 personajes de todos los universos: clásicos, princesas, Pixar y más.
          </p>
        </div>
      </section>

      <section className="contenedor seccion">
        <div className="filtros">
          <div className="buscador">
            <span className="buscador__icono" aria-hidden="true">🔍</span>
            <input
              type="text"
              className="buscador__input"
              placeholder="Buscar personaje o película..."
              value={busqueda}
              onChange={(evento) => setBusqueda(evento.target.value)}
              aria-label="Buscar personajes"
            />
            {busqueda && (
              <button
                type="button"
                className="buscador__limpiar"
                onClick={() => setBusqueda('')}
                aria-label="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>

          <div className="chips" role="group" aria-label="Filtrar por categoría">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                type="button"
                className={`chip ${categoria === categoriaActiva ? 'chip--activo' : ''}`}
                onClick={() => setCategoriaActiva(categoria)}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>

        <p className="resultado-conteo">
          {filtrados.length} {filtrados.length === 1 ? 'personaje encontrado' : 'personajes encontrados'}
        </p>

        {filtrados.length > 0 ? (
          <div className="grilla grilla--personajes">
            {filtrados.map((personaje) => (
              <TarjetaPersonaje key={personaje.id} personaje={personaje} />
            ))}
          </div>
        ) : (
          <div className="vacio">
            <span className="vacio__emoji" aria-hidden="true">🔮</span>
            <h3>No encontramos personajes</h3>
            <p>Probá con otro nombre o cambiá la categoría seleccionada.</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default Personajes
