import { useState } from "react";
import styled from "styled-components";
import seta_play from "./assets/seta_play.png"
import seta_virar from "./assets/seta_virar.png"
import icone_erro from "./assets/icone_erro.png"
import icone_certo from "./assets/icone_certo.png"
import icone_quase from "./assets/icone_quase.png"




export default function Perguntas(props) {

	const { perguntaIndex, cards,  respondidos, setRespondidos, tamanhoCards, setTamanhoCards} = props
	const [botaoNaoClicado, setbotaoNaoClicado] = useState('')
	const [botaoClicado, setBotaoClicado] = useState(false)
	const [icone, setIcone] = useState(seta_play)
	const [questaoVirada, setQuestaoVirada] = useState(false)
	const [iconeStatus, setIconeStatus] = useState(icone_certo)
	


	const iconeMudar = (botaoClicado ? seta_virar :
		(!botaoNaoClicado ? seta_play : iconeStatus))

	function fazerQuestao() {

		const botaoStatus = (botaoClicado || botaoNaoClicado)
		if (botaoStatus) {

			return
		}
		botaoClicado ? setBotaoClicado(false) : setBotaoClicado(true);
	}

	function virarPergunta() {
		if (!botaoClicado) {
			return
		} else {
			setQuestaoVirada(true)

		}
	}

	function botaoVerdadeClicado(cor){
		setBotaoClicado(false)
		setQuestaoVirada(false)
		setRespondidos(respondidos+1)
		setbotaoNaoClicado(cor)
		

		if(respondidos+1 ===tamanhoCards){
			alert("acabous")
		}


		
	}


	return (

		<Pergunta botaoClicado={botaoClicado} questaoVirada={questaoVirada} onClick={fazerQuestao} data-test="flashcard">
			<Inicio botaoClicado={botaoClicado} data-test="flashcard-text">
				{!botaoClicado ? `pergunta 0${perguntaIndex} ` : (questaoVirada ? cards.answer : cards.question)}
			</Inicio>

			<ImagemInicial questaoVirada={questaoVirada}
				botaoClicado={botaoClicado} > <img src={iconeMudar} alt="imagem" onClick={virarPergunta} data-test="turn-btn"/>

			</ImagemInicial>

			<BotoesVerdade botaoClicado={botaoClicado} questaoVirada={questaoVirada}>
				<button className="red" data-test="no-btn" onClick={botaoVerdadeClicado}>Não lembrei </button>
				<button className="yellow" data-test="partial-btn" onClick={botaoVerdadeClicado }> Quase não lembrei</button>
				<button className="green" data-test="zap-btn" onClick={botaoVerdadeClicado } > Zap!</button>
			</BotoesVerdade>
		</Pergunta>



	)
}


const Pergunta = styled.div`

align-items:center;
justify-content:space-between;
display:${props => props.botaoClicado ? "column" : "flex"};
margin:auto;
	margin-bottom: 25px;
    width:300px;
    height:${props => props.botaoClicado ? "131px" : "65px;"};
	background-color:${props => props.botaoClicado ? "#FFFFD4" : "#FFFFFF"};
	font-size: 20px;
	font-weight: 700;
	border-radius: 5px;


	>img{
		
	}
`
const Inicio = styled.div`
	
	height:30px;
	margin-left: 15px;

`

const ImagemInicial = styled.div`
display: ${props => props.questaoVirada ? "none" : "flex"};


	img{
		margin-right: 22px;
		
	}
`

const BotoesVerdade = styled.div`

display:${props => props.questaoVirada ? "flex" : "none"};
justify-content: space-evenly;
width: 100%;
margin-top: 30px;


button{
	width: 85.17px;
	height: 37.17px;
	border-radius: 5px;
	color: white;
}

.red{
	background: #FF3030;
}

.yellow{
	background: #FF922E;
}

.green{
	background: #2FBE34;
}
`