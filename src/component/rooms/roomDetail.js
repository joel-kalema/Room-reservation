import React from "react";
import { rooms } from "../../redux/actions/datas";
import { Link } from "react-router-dom";
import './rooms.css';

const Details = () => {

    const room = rooms.find(p => p.id)
    return (
        <>
            <div className="rooms_detail">
                <div className="room_detail">
                    <Link to='/'>Back</Link>
                   
                    <img src={room.image} alt="google advertising" />
                    <h1 className='font-bold'>{room.name}</h1>
                    <p>{room.description}</p>
                    <h4 className='font-bold'>{room.price}$</h4>
                </div>
            </div>
        </>

    )
}

export default Details;