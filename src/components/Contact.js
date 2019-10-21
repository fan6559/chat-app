import React, { Component } from "react";
import './Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOnline: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.setState({isOnline : !this.state.isOnline })
    }

    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt="" />
                <h1>{this.props.name}</h1>
                <div className="status" onClick={this.handleClick}>
                    <div className={this.state.isOnline ? 'status-online' : 'status-offline'}></div>
                    {this.state.isOnline ? 'Online' : 'Offline'}
                </div>
            </div>
        )
    }

}
export default Contact;