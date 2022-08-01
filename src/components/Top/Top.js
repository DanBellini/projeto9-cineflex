import styled from "styled-components"

export default function Top (){
    return (
        <>
            <Topbar>
                <h1>CINEFLEX</h1>
            </Topbar>
        </>
    )
}

const Topbar = styled.div `
    width: 100%;
    height 67px;

    display:flex;
    justify-content: center;
    background-color: #C3CFD9;

    position:fixed;
    top:0px;
    left:0px;
    right:0px;

    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #E8833A;
    }

`

