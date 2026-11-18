import { useState } from 'react'
import Layouts from './Layouts.jsx'
import Inicio from './pages/Inicio.jsx'
import Personajes from './pages/Personajes.jsx'
import Peliculas from './pages/Peliculas.jsx'
import Series from './pages/Series.jsx'
import Explorar from './pages/Explorar.jsx'

const paginas = { Inicio, Personajes, Películas: Peliculas, Series, Explorar }

function App() {
  const [vista, setVista] = useState('Inicio')
  const Pagina = paginas[vista] ?? Inicio

  return (
    <>
      <Layouts>
        <Pagina />
      </Layouts>

      <div className="vista-previa" role="group" aria-label="Vista previa de páginas (temporal)">
        <span className="vista-previa__texto">Vista previa</span>
        {Object.keys(paginas).map((nombre) => (
          <button
            key={nombre}
            type="button"
            className={`vista-previa__boton ${nombre === vista ? 'vista-previa__boton--activo' : ''}`}
            onClick={() => setVista(nombre)}
          >
            {nombre}
          </button>
        ))}
      </div>
    </>
  )
}

export default App
