import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                <br />
                <section>
                    <div className="jumbotron jumbotron-fluid py-5">
                        <div className="container text-center py-5">
                            <h1 className="display-4">Welcome to Chatty</h1>
                            <p className="lead">A great place to share your thoughts with friends</p>
                            <div className="mt-4">
                                <Link className="btn btn-primary px-4 m-2" to="/signup">Create New Account</Link>
                                <Link className="btn btn-primary px-4 m-2" to="/login">Login to Your Account</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
