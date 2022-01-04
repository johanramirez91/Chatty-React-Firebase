import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';

function Header() {
    return (
        <header className='mb-5'>
            <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
                <Link className="navbar-brand m-3" to="/">Chatty</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end m-3" id="navbarNavAltMarkup">
                    {auth().currentUser
                        ? <div className="navbar-nav">
                            <Link className="nav-item nav-link m-3" to="/chat">Profile</Link>
                            <button className="btn btn-danger m-3" onClick={() => auth().signOut()}>Logout</button>
                        </div>
                        : <div className="navbar-nav">
                            <Link className="nav-item nav-link mr-3" to="/login">Sign In</Link>
                            <Link className="nav-item nav-link mr-3" to="/signup">Sign Up</Link>
                        </div>}
                </div>
            </nav>
        </header>
    )
}

export default Header
