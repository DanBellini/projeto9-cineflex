import styled from "styled-components"

function backgroudColor (selected, available){
    if(selected){
        return '#8DD7CF'
    } else if (available){
        return '#C3CFD9'
    } else{
        return '#FBE192'
    }
}

export default function Seat ({id, number, available, selected, onSelect}){

    function clickOnSeat(){
        if (!available){
            return alert('Esse assento não pode ser escolhido')
        } else {
            onSelect(id, number)
        }
    }


    return(
        
        <Position onClick={clickOnSeat}
                  available={available}
                  selected={selected} >
            {number}
        </Position>
    )
}

const Position = styled.div`
    width: 26px;
    height: 26px;

    border: 1px solid #808F9D;
    border-radius: 12px;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 7px 7px;

    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.04em;
    color: #000000;

    background-color: ${({selected, available}) => backgroudColor(selected, available)}

`