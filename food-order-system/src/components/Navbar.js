import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Usercontext } from '../App';


export default function Navbar() {

    const { state } = useContext(Usercontext);

    const Navbarmenu = () => {
        if (state) {
            return (
                <>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/order'>Order</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/contact'>Contact</Link>
                        </li>
                    </ul>

                    <Link className="nav-link active" aria-current="page" to='/logout'><button className="btn btn-outline-success" type="button">Logout</button></Link>
                </>
            )
        } else {
            return (
                <>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/order'>Order</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/contact'>Contact</Link>
                        </li>
                    </ul>

                    <Link className="nav-link active" aria-current="page" to='/login'><button className="btn btn-outline-success" type="button">Login</button></Link>
                    <Link className="nav-link active" aria-current="page" to='/signup'><button className="btn btn-outline-success" type="button">Signup</button></Link>
                </>
            )
        }
    }

    return (

        <nav className="navbar bg-dark navbar-expand-lg border-bottom border-body fixed-top" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <Navbarmenu />

                </div>
            </div>
        </nav>

    )

}
