import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <>
            <div className="nav">
                <h1>Logo</h1>
                <NavLink to="/rooms">Rooms</NavLink>
                <NavLink to="/reservations">Reservations</NavLink>
                <NavLink to="/sessions">Sessions</NavLink>
            </div>
        </>
    )
}

export default Header;