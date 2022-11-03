import { NavLink} from 'react-router-dom'

function Narvar() {
  return (
    <>
    <nav className="navbar  navbar-dark bg-dark navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Menú</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={({isActive})=>(isActive ? "nav-link " : "nav-link")} aria-current="page" to="/home">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className={({isActive})=>(isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/home">Productos</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className={({isActive})=>(isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/home">Inicio de sesión</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className={({isActive})=>(isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/home">Registrarse</NavLink>
        </li>

      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Narvar