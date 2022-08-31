import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../header/header";
import { fetchRooms } from "../../redux/reducers/rooms/roomSlice";
import './room.css';

const Rooms = () => {
    const dispatch = useDispatch();
    const rooms = useSelector(state => state.rooms.rooms);
    console.log('asd:', rooms);
    useEffect(() => {
        dispatch(fetchRooms());
    } , [dispatch]);
    return (
        <>
            <Header />
            <div className="rooms">
                {rooms.length > 0 ? rooms.map(room => (
                    <div key={room.name} className="room">
                        <div className="room-name">{room.name}</div>
                        <div className="room-description">{room.description}</div>
                    </div>
                )) : <div>Loading...</div>}
                <h1>Rooms</h1>
            </div>
        </>

    )
}

export default Rooms;