import React from 'react'
import{Link} from 'react-router-dom';
function Navbar() {
    return (
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        <div className='container'>
            <a className="navbar-brand" href="#">
                React_CURD
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link" >Home</Link>
                    </li>

                    <li className="nav-item active">
                        <Link to="/about" className="nav-link">About </Link>
                    </li>

                    <li className="nav-item active">
                        <Link to="/contact" className="nav-link" >Contact</Link>
                    </li>

                    <li className="nav-item active">
                        <Link to="/shop" className="nav-link">shop </Link>
                    </li>

                </ul>
            </div>
           
            <Link to="/adduser" className='btn btn-outline-light'>Add users</Link>
            </div>
        </nav>
     
    )
}

export default Navbar