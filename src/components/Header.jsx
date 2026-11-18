import { useState } from 'react'

const enlaces = ['Inicio', 'Personajes', 'Películas', 'Series', 'Explorar']

function Header() {
  const [abierto, setAbierto] = useState(false)

  return (
    <header className="header">
      <div className="header__inner contenedor">
        <a href="#" className="logo" aria-label="Disney Verse - Inicio">
          <span className="logo__icono">🏰</span>
          <span className="logo__texto">
            Disney<span className="logo__texto-acento">Verse</span>
          </span>
        </a>

        <nav className={`nav ${abierto ? 'nav--abierto' : ''}`} aria-label="Navegación principal">
          {enlaces.map((enlace) => (
            <a key={enlace} href="#" className={`nav__link ${enlace === 'Inicio' ? 'nav__link--activo' : ''}`}>
              {enlace}
            </a>
          ))}
        </nav>

        <div className="header__acciones">
          <button type="button" className="icono-boton" aria-label="Buscar">
            🔍
          </button>
          <button type="button" className="icono-boton" aria-label="Mi cuenta">
            ✨
          </button>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Abrir menú"
            aria-expanded={abierto}
            onClick={() => setAbierto((estado) => !estado)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
