import React from "react";
import { useSelector } from "react-redux";
import { rooms } from "../../redux/actions/datas";
import { Link, useParams } from "react-router-dom";
import './rooms.css';

const Details = () => {
    const { id } = useParams();
    const rooms = useSelector(state => state.rooms.rooms);
    return (
        <>
            <div className="rooms_detail">
                <div className="room_detail">
                    {rooms.length > 0 ? rooms.filter(room => room.id === parseInt(id)).map(room => (
                        <div key={room.id} className="room">
                            <img src={room.picture} alt="google advertising" />
                            <div className="room-name">{room.name}</div>
                            <div className="room-description">{room.description}</div>
                            <div className="room-price">{room.price}</div>
                            <Link to="/reservations" className="bg-amber-300">Reserve</Link>
                        </div>
                    )) : <div>Loading...</div>}
                    
                    <Link to='/' className="back">Back</Link>
                </div>
            </div>
        </>

    )
}

export default Details;