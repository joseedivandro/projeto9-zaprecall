import { useState } from "react";
import styled from "styled-components";
import seta_play from "./assets/seta_play.png"
import seta_virar from "./assets/seta_virar.png"
import icone_erro from "./assets/icone_erro.png"
import icone_certo from "./assets/icone_certo.png"
import icone_quase from "./assets/icone_quase.png"




export default function Perguntas(props) {

	const { perguntaIndex, cards, respondidos, setRespondidos, tamanhoCards, setTamanhoCards, MudancaIcone, setMudancaIcone, } = props
	const [botaoNaoClicado, setbotaoNaoClicado] = useState('')
	const [botaoClicado, setBotaoClicado] = useState(false)
	const [questaoVirada, setQuestaoVirada] = useState(false)

	const [SelecaoIcone, setSelecaoIcone] = useState(icone_erro)
	const [CorSelecao, setCorSelecao] = useState('#333333')
	const [DataTest, setDataTest] = useState("play-btn")


	const tipoDeResposta = [
		{
			content: "Não lembrei",
			tipo: "errado",
			icone: "no-btn"
		},
		{
			content: "Quase não lembrei",
			tipo: "parcial",
			icone: "partial-btn"
		},
		{
			content: "Zap!",
			tipo: "zap",
			icone: "zap-btn"
		}
	]



	const iconeMudar = (botaoClicado ? seta_virar :
		(!botaoNaoClicado ? seta_play : SelecaoIcone))

	function fazerQuestao() {

		const botaotipo = (botaoClicado || botaoNaoClicado)
		if (botaotipo) {

			return
		}
		botaoClicado ? setBotaoClicado(false) : setBotaoClicado(true);
		DataTest("turn-btn")
	}

	function virarPergunta() {
		if (!botaoClicado) {
			return
		} else {
			setQuestaoVirada(true)

		}
	}

	function botaoVerdadeClicado(tipo) {
		setBotaoClicado(false)
		setQuestaoVirada(false)
		setRespondidos(respondidos + 1)
		setbotaoNaoClicado(tipo)


		if (respondidos + 1 === tamanhoCards) {
			alert("acabous")
		}


		const tipoFuncoes = {
			'errado': () => {
			  setSelecaoIcone(icone_erro)
			  setCorSelecao('#FF3030')
			  setDataTest("no-icon")
			  setMudancaIcone([...MudancaIcone, icone_erro])
			},
			'parcial': () => {
			  setSelecaoIcone(icone_quase)
			  setCorSelecao('#FF922E')
			  setDataTest("partial-icon")
			  setMudancaIcone([...MudancaIcone, icone_quase])
			},
			'zap': () => {
			  setSelecaoIcone(icone_certo)
			  setCorSelecao('#2FBE34')
			  setDataTest("zap-icon")
			  setMudancaIcone([...MudancaIcone, icone_certo])
			}
		  }
		  
		  if (tipo in tipoFuncoes) {
			tipoFuncoes[tipo]();
		  }


	}


	return (

		<Pergunta botaoClicado={botaoClicado} questaoVirada={questaoVirada} onClick={fazerQuestao} data-test="flashcard">
			<Inicio botaoClicado={botaoClicado} data-test="flashcard-text" CorSelecao={CorSelecao} botaoNaoClicado={botaoNaoClicado}>
				{!botaoClicado ? `pergunta 0${perguntaIndex} ` : (questaoVirada ? cards.answer : cards.question)}
			</Inicio>

			<ImagemInicial questaoVirada={questaoVirada}
				botaoClicado={botaoClicado} > <img src={iconeMudar} alt="imagem" onClick={virarPergunta}  data-test={DataTest} />

			</ImagemInicial>

			<BotoesVerdade botaoClicado={botaoClicado} questaoVirada={questaoVirada}>
				{tipoDeResposta.map((button, index) => (
					<BotaoVerdade
						data-test={button.icone}
						key={index}
						onClick={() => botaoVerdadeClicado(button.tipo)}
					>
						<p>{button.content}</p>
					</BotaoVerdade>
				))}
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
	color: ${props => props.CorSelecao};
	text-decoration: ${props => props.botaoNaoClicado ? "line-through" : "none"};

`

const ImagemInicial = styled.div`
display: ${props => props.questaoVirada ? "none" : "flex"};


	img{
		margin-right: 22px;
		
	}
`

const BotaoVerdade = styled.button`


	width: 85.17px;
	height: 37.17px;
	border-radius: 5px;
	color: white;


	

`


const BotoesVerdade = styled.div`
display:${props => props.questaoVirada ? "flex" : "none"};
justify-content: space-evenly;
width: 100%;
margin-top: 30px;

> button:nth-child(1) {
	background: #FF3030;
}
> button:nth-child(2) {
	background: #FF922E;
}

> button:nth-child(3) {
	background: #2FBE34;
}
`