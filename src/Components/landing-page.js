import React, { Component } from 'react';
import LandingNavBar from './landing-navbar.js'
import "../Styles/landing-navbar-style.css"

class LandingPage extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return (
            <React.Fragment>
               <LandingNavBar/>
                <h1 className="text-center">Welcome to CIREN Messenger</h1>
            </React.Fragment>
         );
    }
}
 
export default LandingPage;