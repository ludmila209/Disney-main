import { useRef } from 'react'

function Carrusel({ titulo, subtitulo, children }) {
  const pistaRef = useRef(null)

  const desplazar = (direccion) => {
    const pista = pistaRef.current
    if (!pista) return
    const cantidad = pista.clientWidth * 0.8
    pista.scrollBy({ left: cantidad * direccion, behavior: 'smooth' })
  }

  return (
    <section className="carrusel">
      <div className="contenedor carrusel__encabezado">
        <div>
          {titulo && <h2 className="seccion__titulo">{titulo}</h2>}
          {subtitulo && <p className="seccion__subtitulo">{subtitulo}</p>}
        </div>
        <div className="carrusel__controles">
          <button
            type="button"
            className="flecha"
            aria-label="Anterior"
            onClick={() => desplazar(-1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="flecha"
            aria-label="Siguiente"
            onClick={() => desplazar(1)}
          >
            ›
          </button>
        </div>
      </div>

      <div className="carrusel__pista" ref={pistaRef}>
        {children}
      </div>
    </section>
  )
}

export default Carrusel
