import React, { Component } from 'react';
import ChatRoomNavBar from './chat-room-navbar';
import axios from 'axios';
import '../Styles/chat-room-style.css'

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: "Guest",
            message: "",
            messages: [],
            time: 0
         }
         this.onSubmit = this.onSubmit.bind(this);
         this.setMessage = this.setMessage.bind(this);
         this.logOut = this.logOut.bind(this);
         this.refreshChat = this.refreshChat.bind(this);
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
        axios.get(`http://ciren-ms.herokuapp.com/chatrooms/${this.props.match.params.id}/isOnline`)
        .then(res=>{
            if(res.data.online){
                this.setState({
                    user: res.data.username
               })
            }
        })

        
        setTimeout(()=>{
            axios.get(`http://ciren-ms.herokuapp.com/chatrooms/getmessages`)
            .then(res => this.setState({
                messages: res.data
            }))
        },100);
    
    }


     onSubmit(event){
         axios.post("http://ciren-ms.herokuapp.com/chatrooms/addmessage", {message: this.state.message, username: this.state.user})
        this.setState({
            message: ""
        })
        event.preventDefault();
     }

     refreshChat(event){
        axios.get(`http://ciren-ms.herokuapp.com/chatrooms/getmessages`)
        .then(res => this.setState({
            messages: res.data
        }))
     }

     setMessage(event){
        this.setState({
            message: event.target.value
        });
     }

     logOut(event){
        axios.get(`http://ciren-ms.herokuapp.com/chatrooms/logout/${this.state.user}`)
        .then(()=>{
            console.log(this.state.user + "Logged Out")
        })
     }

    render() { 
        return (<React.Fragment>
                <ChatRoomNavBar logOut={this.logOut}/>
                <h1 className="text-center">Welcome to the ChatRoom {this.state.user}!</h1>
                <div className="container">
                    <div className="chat-window">
                            {this.state.messages.map((message,index)=>
                           
                            <div class="card mb-2">
                                <div class="card-body">
                                {message.username}: {message.message}
                                </div>
                            </div>
                            )}
                    </div>
                    <form>
                        <input type="text" className="form-control col-md-12" onChange={this.setMessage}/>
                        <button type="submit" onClick={this.onSubmit} className="btn btn-primary col-md-12">Send</button>
                    </form>
                    <button type="submit" onClick={this.refreshChat} className="btn btn-dark col-md-12">Refresh Chat!</button>
                </div>
                 </React.Fragment> );
    }
}
 
export default ChatRoom;