import React from "react";
import Room from './room'
import { rooms, homeImage } from "../../redux/actions/datas";
import './rooms.css';

const Rooms = () => {
    return (
        <div>
            <div className="home_image">
                <span></span>
                <div className="home-title">
                    <h1 className='font-bold'>Good service</h1>
                    <p>A hotel reservation system enables guests to schedule
                        dates and length of stay, room selection, extras, 
                        and payment all in one place.</p>
                </div>
                <img src={homeImage} alt="home_image" />
            </div>
            <div className="rooms">
                <Room rooms={rooms} className="room-data"/>
            </div>
        </div>

    )
}

export default Rooms;