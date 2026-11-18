import { useState } from 'react'

function TarjetaContenido({ titulo, descripcion, emoji, color, etiqueta, meta = [], imagen, pie }) {
  const [errorImagen, setErrorImagen] = useState(false)
  const mostrarImagen = imagen && !errorImagen

  return (
    <article className="tarjeta-contenido">
      <div className="tarjeta-contenido__media" style={{ background: color }}>
        {mostrarImagen ? (
          <img
            src={imagen}
            alt={titulo}
            loading="lazy"
            className="tarjeta-contenido__img"
            onError={() => setErrorImagen(true)}
          />
        ) : (
          <span className="tarjeta-contenido__emoji" aria-hidden="true">
            {emoji}
          </span>
        )}
        {etiqueta && <span className="tarjeta-contenido__etiqueta">{etiqueta}</span>}
      </div>

      <div className="tarjeta-contenido__cuerpo">
        <h3 className="tarjeta-contenido__titulo">{titulo}</h3>
        {meta.length > 0 && (
          <div className="tarjeta-contenido__meta">
            {meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        )}
        {descripcion && <p className="tarjeta-contenido__descripcion">{descripcion}</p>}
        {pie && <div className="tarjeta-contenido__pie">{pie}</div>}
      </div>
    </article>
  )
}

export default TarjetaContenido
