import "../Seats/style.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Seat from "./Seat";

export default function Seats (){

    const {idSessao} = useParams();
    const [screenings, setScreenings] = useState([]);
    const [seats, setSeats] = useState([])
    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(()=>{

        const requisition = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        requisition.then(response => {
            const {data} = response

            setScreenings(data);
            setSeats(data.seats)

            console.log(data)
        });
    },[]);

    function selected (id){
        console.log (selectedSeats.id)
        for(let i=0;i<selectedSeats.length;i++){
            if (selectedSeats.id === id){
                return true
            } else {
                return false
            }
        }
    }

    function toggle (id, number){
        const nowSelect = selected(id)
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
                    {selected(id)}
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
        </>
    )
}