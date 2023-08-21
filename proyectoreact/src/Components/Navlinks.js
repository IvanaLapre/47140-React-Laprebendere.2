import {Link} from "react-router-dom"

function Navlinks(parametros) {

    console.log(parametros)

  return (
    <nav className='flex gap-4'>
    <Link to="/">Home</Link>
    <Link to="/productos">Productos</Link>
    <Link to="/contactanos">Contactanos</Link>
  </nav>
  )
}

export default Navlinks