import "../Seats/style.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Seat from "./Seat";
import Footer from "../Footer/Footer";

export default function Seats (){

    const {idSessao} = useParams();
    const [screenings, setScreenings] = useState([]);
    const [screeningsDay, setScreeningsDay] = useState([]);
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(()=>{

        const requisition = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        requisition.then(response => {
            const {data} = response

            setScreenings(data.movie);
            setScreeningsDay(data.day)
            setSeats(data.seats)

            console.log(data)
        });
    },[]);

    function toggle (id, number){
        const nowSelect = selectedSeats.some(seat => seat.id === id)
        if(!nowSelect){
            setSelectedSeats([...selectedSeats, {id, number}]);
        } else {
            const freshSeats = selectedSeats.filter(seat => seat.id !== id)
            setSelectedSeats(freshSeats)
        }

    }

    return (
        <>
        <div className="mainSeats">
            <div className="titleSeats">
                <p>Selecione o(s) horário(s)</p>
            </div>
            <div className="menuSeats">
                {seats.map(seat => {
                    const {id, name, isAvailable} = seat;
                    const selected = selectedSeats.some(seat => seat.id === id)
                    
                    return(
                        <Seat
                            key={id}
                            id={id}
                            number={name}
                            available={isAvailable}
                            selected={selected}
                            onSelect={(id, number) => toggle(id, number)}
                    />)
                })}
            </div>
        </div>
        <Footer image= {screenings.posterURL} title={screenings.title} date={screeningsDay.date} weekday={screeningsDay.weekday}/>
        </>
    )
}