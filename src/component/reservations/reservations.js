import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRooms } from "../../redux/reducers/rooms/roomSlice";
import { postReservations } from "../../redux/reducers/reservations/reservationSlice";
import requestLogin from '../../redux/actions/logUserIn';


const Reservations = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRooms());
    } , [dispatch]);
    const rooms = useSelector(state => state.rooms.rooms);
    const id = localStorage.getItem('user');
    console.log(id);
    console.log(rooms);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value);
        const reservation = {
            check_in: e.target[0].value,
            check_out: e.target[1].value,
            user_id: id,
            room_id: e.target[3].value,
            city: e.target[2].value,
        };
        dispatch(postReservations(reservation));
    }

    return (
        <>
            <h1>Reservations</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label for="cars">check in:</label>
                <input className="ml-64" type="date" id="start" name="trip-start"
                    min="2022-10-01" max="2023-12-31" />
                <label for="cars">check out:</label>
                <input className="ml-64" type="date" id="start" name="trip-start"
                    min="2022-10-01" max="2023-12-31" />
                <input type="text" placeholder="City" />
                <label for="cars">Choose a room:</label>
                <select className="ml-64" name="rooms">
                    {rooms.length > 0 ? rooms.map(room => (
                        <option key={room.id} value={room.id}>{room.name}</option>
                    )) : ''}
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Reservations;