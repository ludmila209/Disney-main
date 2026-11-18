const columnas = [
  {
    titulo: 'Universo',
    enlaces: ['Personajes', 'Películas', 'Series', 'Explorar']
  },
  {
    titulo: 'Colecciones',
    enlaces: ['Clásicos', 'Princesas', 'Pixar', 'Star Wars']
  },
  {
    titulo: 'Compañía',
    enlaces: ['Sobre nosotros', 'Novedades', 'Prensa', 'Empleos']
  },
  {
    titulo: 'Ayuda',
    enlaces: ['Contacto', 'Términos de uso', 'Privacidad', 'Cookies']
  }
]

function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor footer__inner">
        <div className="footer__marca">
          <span className="logo__icono">🏰</span>
          <span className="logo__texto">
            Disney<span className="logo__texto-acento">Verse</span>
          </span>
          <p className="footer__descripcion">
            Un universo de personajes, películas e historias mágicas para toda la familia.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram" className="social">📸</a>
            <a href="#" aria-label="YouTube" className="social">▶️</a>
            <a href="#" aria-label="Twitter" className="social">🐦</a>
            <a href="#" aria-label="Facebook" className="social">👍</a>
          </div>
        </div>

        {columnas.map((columna) => (
          <div key={columna.titulo} className="footer__columna">
            <h4>{columna.titulo}</h4>
            <ul>
              {columna.enlaces.map((enlace) => (
                <li key={enlace}>
                  <a href="#">{enlace}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__base">
        <div className="contenedor footer__base-inner">
          <p>© {new Date().getFullYear()} Disney Verse — Sitio de demostración sin fines comerciales.</p>
          <p className="footer__disclaimer">
            Proyecto educativo ficticio inspirado en el universo Disney.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
