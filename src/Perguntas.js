import { useState } from "react";
import styled from "styled-components";
import seta_play from "./assets/seta_play.png"
import seta_virar from "./assets/seta_virar.png"
import icone_erro from "./assets/icone_erro.png"
import icone_perto from "./assets/icone_certo.png"
import icone_quase from "./assets/icone_quase.png"




export default function Perguntas(props) {

	const { perguntaIndex, cards} = props
	const [botaoNaoClicado, setbotaoNaoClicado] = useState('')
	const [botaoClicado, setBotaoClicado] = useState(false)
	const [icone, setIcone] = useState(seta_play)
	const [questaoVirada, setQuestaoVirada] = useState(false)
	const [iconeStatus, setIconeStatus] = useState(icone_erro)


	const iconeMudar = (botaoClicado ? seta_virar :
		(!botaoNaoClicado ? seta_play :iconeStatus))

	function fazerQuestao() {
		
		const botaoStatus = (botaoClicado || botaoNaoClicado)
		if (botaoStatus) {

			return
		}
		botaoClicado ? setBotaoClicado(false) : setBotaoClicado(true);
	}

	function virarPergunta(){
		if(!botaoClicado){
			return
		}else{
			setQuestaoVirada(true)
		}
	}

	return (

		<Pergunta botaoClicado={botaoClicado} questaoVirada={questaoVirada} onClick={fazerQuestao}>
			<Inicio botaoClicado={botaoClicado}>
				{!botaoClicado ? `pergunta 0${perguntaIndex} ` : (questaoVirada ? cards.answer: cards.question)}
			</Inicio>

			<ImagemInicial
				botaoClicado={botaoClicado} > <img src={iconeMudar} alt="imagem" onClick={virarPergunta} />

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
	background-color:${props => props.botaoClicado ? "#FFFFD4" : "#FFFFFF"};
	font-size: 20px;
	font-weight: 700;S

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