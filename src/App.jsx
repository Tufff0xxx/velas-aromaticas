import Hero from './components/Hero'
import Productos from './components/Productos'
import Contacto from './components/Contacto'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css'


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Productos />
      <Contacto />
      <Footer />
    </>
  )
}

export default App