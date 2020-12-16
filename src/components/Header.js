import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent">
            <a className="navbar-brand" href="#">JediBook</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto align-items-center">
                    <li className="nav-item mr-3">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="nav-item mr-3">
                        <NavLink to="/catalogue">Catalogue</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink to="/cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                        </NavLink>
                    </li> */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink to="/login"><a className="dropdown-item" href="#">Log In</a></NavLink>
                        <NavLink to="/logout"><a className="dropdown-item" href="#">Log Out</a></NavLink>
                        <NavLink to="/cart"><a className="dropdown-item" href="#">Cart</a></NavLink>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header