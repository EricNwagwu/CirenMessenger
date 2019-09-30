import React, { Component } from 'react';
import '../Styles/landing-navbar-style.css';

class ChatRoomNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    


    render() { 
        return ( 

            <nav className="navbar navbar-expand-sm bg-dark">
                <a className="navbar-brand"  href="/" onClick={this.props.logOut}>
                <img src="../Images/logo_transparent.png" alt="logo" width="200vw"/>
                <span className="MS ml-1">MS</span>
                </a>
                <div className="nav-item-wrapper navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/" onClick={this.props.logOut} >Logout</a>
                    </li>
                </ul>
                </div> 
            </nav>
         );
    }
}
 
export default ChatRoomNavBar;