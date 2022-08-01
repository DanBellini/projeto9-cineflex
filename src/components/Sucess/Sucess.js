import { useNavigate } from "react-router-dom"
import "../Sucess/style.css"

export default function Sucess ({loadOrder}){

    const navigate = useNavigate();
    const {movie, day, hour, buyer, seats} = loadOrder

    function backToHome(){
        navigate('/');
    }

    return(
       <div className="mainSucess">
            <div className="titleSucess">
                <h5>Pedido feito com sucesso!</h5>
            </div>
            <div className="MenuSucess">
                <div className="info">
                    <h5>Filme e Sessão</h5>
                    <div>
                        <p>{movie}</p>
                        <p>{day} {hour}</p>
                    </div>
                </div>
                <div className="info">
                    <h5>Ingressos</h5>
                    <div>
                        {seats.map(({number})=>{
                            return (
                                <p key={number}> Assento {number} </p>
                            )
                        })}
                    </div>
                </div>
                <div className="info">
                    <h5>Comprador</h5>
                    <div>
                        <p>Nome: {buyer.person}</p>
                        <p>CPF: {buyer.cpf}</p>
                    </div>
                </div>
            </div>
            <div className="backToHome" onClick={backToHome}>Voltar pra Home</div>
       </div>
    )
}