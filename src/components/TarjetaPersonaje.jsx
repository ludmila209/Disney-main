import { useState } from 'react'

function TarjetaPersonaje({ personaje, compacta = false }) {
  const [errorImagen, setErrorImagen] = useState(false)
  const { nombre, pelicula, categoria, descripcion, emoji, color, imagen } = personaje

  const mostrarImagen = imagen && !errorImagen

  return (
    <article className={`tarjeta-personaje ${compacta ? 'tarjeta-personaje--compacta' : ''}`}>
      <div className="tarjeta-personaje__media" style={{ background: color }}>
        {mostrarImagen ? (
          <img
            src={imagen}
            alt={nombre}
            loading="lazy"
            className="tarjeta-personaje__img"
            onError={() => setErrorImagen(true)}
          />
        ) : (
          <span className="tarjeta-personaje__emoji" aria-hidden="true">
            {emoji}
          </span>
        )}
        <span className="tarjeta-personaje__categoria">{categoria}</span>
      </div>

      <div className="tarjeta-personaje__cuerpo">
        <h3 className="tarjeta-personaje__nombre">{nombre}</h3>
        <p className="tarjeta-personaje__pelicula">{pelicula}</p>
        {!compacta && <p className="tarjeta-personaje__descripcion">{descripcion}</p>}
      </div>
    </article>
  )
}

export default TarjetaPersonaje
