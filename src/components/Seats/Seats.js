import "../Seats/style.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import Seat from "./Seat";
import Footer from "../Footer/Footer";
import styled from "styled-components";

export default function Seats ({finish}){

    const {idSessao} = useParams();
    const navigate = useNavigate();
    const [screenings, setScreenings] = useState([]);
    const [screeningsDay, setScreeningsDay] = useState([]);
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [purchaseData, setPurchaseData] = useState({person:"", cpf:""});
    const [movieHour, setMovieHour] = useState("")

    useEffect(()=>{

        const requisition = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        requisition.then(response => {
            const {data} = response

            setScreenings(data.movie);
            setScreeningsDay(data.day)
            setSeats(data.seats)
            setMovieHour(data)
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

    function confirmPurchase(event){
        event.preventDefault();
        if(selectedSeats.length > 0){
            const requisition = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", {
                ids: selectedSeats.map(seat => seat.id),
                name: purchaseData.person,
                cpf: purchaseData.cpf
            });

            requisition.then(response =>{
                finish({
                    movie: screenings.title,
                    day: screeningsDay.date,
                    hour: movieHour.name,
                    seats: selectedSeats,
                    buyer: purchaseData
                });
                navigate('/sucesso');
            });

            requisition.catch(error => alert(error.response.statusText));
        } else {
            alert('Selecione pelo menos um assento!');
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
            <Form onSubmit={confirmPurchase}>
                <label htmlFor="person">Nome do comprador</label>
                <input type="text" id="person" value={purchaseData.person} placeholder="Digite o seu nome..." required
                    onChange={(e) => setPurchaseData({...purchaseData, person: e.target.value})}/>
                <label htmlFor="cpf">CPF do comprador</label>
                <input type="text" id="cpf" value={purchaseData.cpf} placeholder="Digite o seu CPF..." required
                    onChange={(e) => setPurchaseData({...purchaseData, cpf: e.target.value})}/>
                <button type="submit">Reservar assento(s)</button>
            </Form>
        </div>
        <Footer image= {screenings.posterURL} title={screenings.title} date={screeningsDay.date} weekday={screeningsDay.weekday}/>
        </>
    )
}

const Form = styled.form`
    width:100%;
    height:210px;
    padding: 0px 15px;

    display:flex;
    flex-direction: column;
    align-items: stretch;

    label {
        height: 25px;

        display: flex;
        align-items: center;

        font-size: 18px;
        color: #293845;
    }

    input {
        height: 50px;

        font-family: 'Roboto';
        font-style: italic;
        font-size: 18px;

        display: flex;
        align-items: center;
    }

    button{
        width: 225px;
        height: 42px;
        margin:auto;

        font-family: 'Roboto';
        font-size: 18px;
        letter-spacing: 0.04em;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #E8833A;

        color: #FFFFFF;
    }
`