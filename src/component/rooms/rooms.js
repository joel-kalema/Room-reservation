import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../header/header";
import { fetchRooms } from "../../redux/reducers/rooms/roomSlice";
import Room from './room'
import { rooms, homeImage } from "../../redux/actions/datas";
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
                {rooms.length > 0 ? rooms.map(room => (
                    <div key={room.name} className="room">
                        <div className="room-name">{room.name}</div>
                        <div className="room-description">{room.description}</div>
                    </div>
                )) : <div>Loading...</div>}
                <h1>Rooms</h1>
            </div>
        </div>

    )
}

export default Rooms;