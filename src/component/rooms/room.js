import React from "react";
import { Link } from "react-router-dom";
import { rooms } from "../../redux/actions/datas";
import './rooms.css';

const Room = () => {
    return (
        <>
            <div className="room_data">
                {rooms.map(room => (
                    <div className="room">
                        <img src={room.picture} alt="google advertising" />
                        <h1 className='font-bold'>{room.name}</h1>
                        <h4 className='font-bold'>{room.price}$</h4>
                        <Link to={`/room/${room.id}`}>details</Link>
                    </div>
                ))}
            </div>
        </>

    )
}

export default Room;
