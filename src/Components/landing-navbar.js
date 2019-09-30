import React, { Component } from 'react';

class LandingNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <nav className="navbar navbar-expand-sm bg-dark">
                <a className="navbar-brand" href="/">
                <img src="./Images/logo_transparent.png" alt="logo" width="200vw"/>
                <span className="MS ml-1">MS</span>
                </a>
                <div className="nav-item-wrapper navbar-collapse" id="navbarNav">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/register">Register</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Login</a>
                    </li>
                </ul>
                </div> 
            </nav>
         );
    }
}
 
export default LandingNavBar;