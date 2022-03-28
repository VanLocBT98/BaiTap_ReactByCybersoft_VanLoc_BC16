import React, { Component } from 'react';

export default class HeaderLayout extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:'#212529'}}>
                <div className="container px-lg-5" style={{maxWidth:1338}}>
                    <a className="navbar-brand" href="#!" style={{ marginRight:16}}>Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse" style={{marginLeft:886}} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
