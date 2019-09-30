
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"//npm install bootstrap
import {BrowserRouter as Router, Route} from "react-router-dom";//npm install react-router-dom
import './App.css';
import LandingPage from "./Components/landing-page";
import RegisterPage from "./Components/register-page"
import ChatRoom from "./Components/chat-room";
import LoginPage from "./Components/login-page"



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
   
  }

  render() { 
    return (
      <Router>
         <Route path="/" exact component={()=><LandingPage/>}/>
         <Route path="/register"  exact component={() => <RegisterPage />}/>
         <Route path="/login" exact component={() => <LoginPage/>}/>
         <Route path="/chatrooms/:id" exact component={ChatRoom}/>
      </Router>
        
    );
  }
}
 
export default App;




