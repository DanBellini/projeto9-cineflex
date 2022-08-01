import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./Top/Top";
import Main from "./Main/Main";
import Sessions from "./Sessions/Sessions";
import Seats from "./Seats/Seats";
import Sucess from "./Sucess/Sucess";

export default function App (){

    return(
        <BrowserRouter>
            <Top/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/sessoes/:idFilme" element={<Sessions/>}/>
                <Route path="/assentos/:idSessao" element={<Seats/>}/>
                <Route path="/sucess" element={<Sucess/>}/>
            </Routes>
        </BrowserRouter>
    )
}