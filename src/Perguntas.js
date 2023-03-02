import styled from "styled-components";
import seta_play from "./assets/seta_play.png"




export default function Perguntas (props, index){

const {perguntaIndex} = props
    return (
        <Pergunta>
			pergunta 0{perguntaIndex} 
			
		</Pergunta>

    )
}


const Pergunta = styled.div`
margin:auto;
	margin-bottom: 25px;
    width:300px;
    height:65px;
	background-color:white;
	font-size: 20px;

`
