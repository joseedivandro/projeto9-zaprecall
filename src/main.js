import styled from "styled-components";
import logo from "./assets/logo.png"
import Perguntas from "./Perguntas";
import cards from "./cards";

export default function Main() {



    return (
        <Total>
            <Header>
                <img src={logo} alt="logo" />
                <p>ZapRecall</p>
            </Header>

            <Corpo>

                {cards.map((card, index) => (
                    <Perguntas cards={card}
                        perguntaIndex={index + 1} />

                ))}
            </Corpo>

            <Footer><p>0/4 CONCLUÍDAS</p></Footer>
        </Total>
    );
}





const Header = styled.div`
height: 60px;
background-color: blue;
margin-top: 42px;
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
background-color: red;
height: 600px;
overflow-y: scroll;


`;


const Total = styled.div`

margin: auto;
width: 375px;
background: #FB6B6B;
border: 1px solid #DBDBDB
height: 667px;
`


const Footer = styled.div`

display:flex;
justify-content: center;
    align-items: center;
width: 375px;
height: 70px;
background: #FFFFFF;
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
position:fixed;
background-color: yellow;

p{
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 25px;
    line-height: 22px;  
    color: #333333;
   
    font-style: normal;

}

`