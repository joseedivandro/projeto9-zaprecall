import { useState } from "react";
import styled from "styled-components";
import seta_play from "./assets/seta_play.png"
import seta_virar from "./assets/seta_virar.png"
import icone_erro from "./assets/icone_erro.png"
import icone_perto from "./assets/icone_certo.png"
import icone_quase from "./assets/icone_quase.png"




export default function Perguntas(props, index) {

	const { perguntaIndex } = props
	const [botaoNaoClicado, setbotaoNaoClicado] = useState('')
	const [botaoClicado, setBotaoClicado] = useState(false)
	const [icone, setIcone] = useState(seta_play)

function fazerQuestao(){
	const botaoStatus = (botaoClicado || botaoNaoClicado)
        if (botaoStatus) {
            return
        }
		botaoClicado ? setBotaoClicado(false) : setBotaoClicado(true);
}

	return (

		<Pergunta botaoClicado={botaoClicado}>
			<Inicio botaoClicado={botaoClicado}>
				{!botaoClicado ? `pergunta 0${perguntaIndex} ` : `blaubau`}
			</Inicio>

			<ImagemInicial 
			   botaoClicado={botaoClicado} > <img src={icone} alt="imagem" onClick={fazerQuestao}/> 
				
				</ImagemInicial>
		</Pergunta>



	)
}


const Pergunta = styled.div`
align-items:center;
justify-content:space-between;
display:flex;
margin:auto;
	margin-bottom: 25px;
    width:300px;
    height:${props => props.botaoClicado ? "131px" : "65px;"};
	background-color:white;
	font-size: 20px;
	font-weight: 700;

`
const Inicio = styled.div`
	
	height:30px;
	margin-left: 15px;

`

const ImagemInicial = styled.div`
height:30px;

	img{
		margin-right: 22px;
	}
`