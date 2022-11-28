import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand">Jewel Shop</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <Link to='home'>
                        <li className="nav-item active">
                            <div className="nav-link">Home <span className="sr-only">(current)</span></div>
                        </li>
                    </Link>


                    <li className="nav-item">
                        <div className="nav-link" >Contact</div>
                    </li>

                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <Link to='/login'>
                        <button className="btn btn-secondary" type="button" data-toggle="dropdown" aria-expanded="false">Login</button>
                    </Link>
                </form>
            </div>
        </nav>


}

export default NavBar