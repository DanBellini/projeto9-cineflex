import "../Sessions/style.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Sessions (){

    const {idFilme} = useParams();
    const [movie, setMovie] = useState([]);
    const [daysSession,setDaysSession] = useState([])

    useEffect(()=>{

        
        const requisition = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);

        requisition.then(response => {
            const { data } = response;
            setMovie(data);
            setDaysSession(data.days);
        });
    },[]);

    function RenderButton({hour, idHour}){
        return(
            <Link key= {idHour} to={`/assentos/${idHour}`}>
            <div className="button">{hour}</div>
            </Link>
        )
    }

    function RenderSession({ weekday, showtimes, date}){
        return(
            
            <div className="session">
                <div>
                    <p>{weekday} - {date}</p>
                </div>
                <div>
                    {showtimes.map(value => {
                        const {id, name} = value

                        return (
                            <RenderButton
                                key={id}
                                hour={name}
                                idHour={id}
                        />)
                    })}
                </div>
            </div>
        )
    }
    
    return (
        <>
            <div className="mainSession">
                <div className="titleSession">
                    <p>Selecione o horário </p>
                </div>
                <div className="menuSession">
                { daysSession.map(value=>{
                        const {id, weekday, showtimes, date} = value

                        return( 
                            <RenderSession
                                key={id}
                                weekday={weekday}
                                showtimes={showtimes}
                                date={date}
                        />)
                    })}
                </div>
            </div>
            <Footer image={movie.posterURL} title={movie.title}/>
        </>
    )
}