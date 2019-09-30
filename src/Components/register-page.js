import React, { Component } from 'react';
import LandingNavBar from './landing-navbar';
import axios from 'axios';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            valid: 0
          }
          this.setUsername = this.setUsername.bind(this);
          this.setPassword = this.setPassword.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
    }

    setUsername(event){
       this.setState({
         username: event.target.value
       });
    }

    setPassword(event){
        this.setState({
            password: event.target.value
          });
    }

    onSubmit(event){
        event.preventDefault();//prevents reload on submit
        const user = {
            username: this.state.username,
            password: this.state.password,
            online: false
        } 
        console.log(user)
        axios.post('http://ciren-ms.herokuapp.com/register/add', user)
        .then(res =>{
            axios.get(`http://ciren-ms.herokuapp.com/chatrooms/user/${user.username}/${user.password}`)
            .then(res=> window.location = `/chatrooms/${res.data}`)
        }).catch(this.setState({
            valid: 1
        }));

    }

    render() { 
        return ( 
            <React.Fragment>
                <LandingNavBar/>
                <h1 className="text-center">Register</h1>
                <div className="container">
                    <form>
                        <div className="form-group">
                        <h4 style={{opacity: this.state.valid, color: "orange"}}>*That username is already taken</h4>
                            <p>UserName:</p>
                            <input required className="form-control" type="text" onChange={this.setUsername}/>
                        </div>
                        <div className="form-group">
                            <p>Password:</p>
                            <input required className="form-control" type="text" onChange={this.setPassword}/>
                        </div>
                        <button className="btn btn-primary" type="submit" onClick={this.onSubmit}>Create Account</button>
                    </form>
                </div>
            </React.Fragment>
         );
    }
}
 
export default RegisterPage;