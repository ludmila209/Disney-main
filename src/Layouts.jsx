import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function Layouts({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="layout__contenido">{children}</main>
      <Footer />
    </div>
  )
}

export default Layouts
