import logo from '../assets/img/logo.png'
import { NavLink } from 'react-router-dom'
export default function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-dark navbar-expand-lg bg-dark  ">
                    <div className="container-fluid   ">

                        <a className="navbar-brand d-flex align-items-center column-gap-3 " href="#">
                            <img src={logo} alt="Logo" className="d-inline-block align-text-top logo_img" />
                            <h1 className='text-white'>Super blog</h1>
                        </a>

                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation ">
                            <span className="navbar-toggler-icon "></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink className="nav-link  text-white" aria-current="page" to="/">Home</NavLink>
                                <NavLink className="nav-link text-white" to="/Posts">Post</NavLink>
                                <NavLink className="nav-link text-white" to="/About">Chi siamo</NavLink>

                            </div>
                        </div>
                    </div>
                </nav>
            </header >
        </>

    )
}