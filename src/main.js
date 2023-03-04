import styled from "styled-components";
import logo from "./assets/logo.png"
import Perguntas from "./Perguntas";
import cards from "./cards";
import { useState } from "react";

export default function Main(props) {
    const [respondidos, setRespondidos] = useState(0)
    

    return (
        <Total>
            <Header>
                <img src={logo} alt="logo" />
                <p>ZapRecall</p>
            </Header>

            <Corpo>

                {cards.map((cards , index) => (
                    <Perguntas
                        cards={cards}
                        perguntaIndex={index + 1}
                        tamanhoCards={cards.length}
                        respondidos={respondidos}
                        setRespondidos={setRespondidos}
                    />

                ))}
            </Corpo>

            <Footer data-test="footer">
                <p>  {respondidos}/{cards.length} CONCLUÍDAS</p>
            </Footer>
        </Total>


    );
}





const Header = styled.div`
height: 60px;


display:flex;
margin-bottom:25px;

>p{
    color: white;
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    margin-left:15px;
}

img{
    width: 52px;
    height: 60px;

}

`;

const Corpo = styled.div`

height: 667px;
overflow-y: scroll;


`;


const Total = styled.div`

margin: auto;
width: 375px;
background: #FB6B6B;
border: 1px solid #DBDBDB

`


const Footer = styled.div`
z-index: 1;
position:fixed;
display:flex;
justify-content: center;
    align-items: center;
width: 375px;
height: 70px;
background: #FFFFFF;
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);



p{
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 25px;
    line-height: 22px;  
    color: #333333;
   
    font-style: normal;

}

`