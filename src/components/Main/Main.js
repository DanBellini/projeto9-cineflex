import "../Main/style.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function Main (){

    const[movies, setMovies] = useState([])

    useEffect(()=>{

        const requisition = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

        requisition.then(response => {
            const { data } = response;
            setMovies(data);
        });

    },[]);

    function Movie({id, image, title}){

        return (
            <Link to={`/sessoes/${id}`}>
                <div className="movie">
                    <img src={image} alt={title}/>
                </div>
            </Link>
        )
    };

    return (
        <div className="main">
            <div className="title">
                <p>Selecione o filme</p>
            </div>
            <div className="menu">
                {movies.map(movie => {
                    const { id, posterURL, title} = movie

                    return (
                        <Movie 
                            key={id}
                            id={id}
                            image={posterURL}
                            title={title}
                    />)
                })}
            </div>
        </div>
    )
}