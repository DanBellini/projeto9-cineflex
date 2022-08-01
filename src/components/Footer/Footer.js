import styled from "styled-components"

export default function Footer ({image, title}){

    return(
        <Sidebar>
                <img src={image} alt={title} />
                <h2>{title}</h2>
        </Sidebar>
    )
}

const Sidebar = styled.div`
    width:100%;
    height:117px;

    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;

    display: flex;
    align-items: center;

    background-color: #DFE6ED;
    border: 1px solid #9EADBA;

    img{
        width:48px;
        height:72px;
        
        margin:14px;
        padding:8px;

        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
    }

    h2{
        font-size: 26px;
        line-height: 30px;

        color: #293845;
    }

`