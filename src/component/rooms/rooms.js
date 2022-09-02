import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRooms } from "../../redux/reducers/rooms/roomSlice";
import './rooms.css';

const Rooms = () => {
    const dispatch = useDispatch();
    const rooms = useSelector(state => state.rooms.rooms);
    console.log('asd:', rooms);
    useEffect(() => {
        dispatch(fetchRooms());
    } , [dispatch]);
    return (
        <div>
            <div className="rooms">
                {rooms.length > 0 ? rooms.map(room => (
                    <Link to={`/room/${room.id}`} key={room.id} name={room.name} price={room.price} description={room.description} image={room.image} reserved={room.reserved} className="room">
                        <img src={room.image} alt="google advertising" />
                        <div className="room-name">{room.name}</div>
                        <div className="room-description">{room.description}</div>
                    </Link>
                )) : <div>Loading...</div>}
                <h1>Rooms</h1>
            </div>
        </div>

    )
}

export default Rooms;