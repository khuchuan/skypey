import React from "react";
import './Header.css';

const User = ({ user }) => {
    const { name, status } = user;

    //console.log('Header.user' + JSON.stringify({user}));
    return (
        <header className="Header">
            <h1 className="Header__name">{name}</h1>
            <p className="Header__status">{status}</p>
        </header>
    )
}

export default User;