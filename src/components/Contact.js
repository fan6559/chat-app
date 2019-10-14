import React from 'react';
import './Contact.css';

const Contact = ({name , avatar , online}) => {
    return (
         <div className="Contact">
            <img className="avatar" src={avatar} alt="" />
            <h1>{name}</h1>
            <div className="status">
                <div className={online ? 'status-online' : 'status-offline'} ></div>
                {
                    online ? 'Online' : 'Offline'   
                }
            </div>
        </div>
    )
}  

export default Contact