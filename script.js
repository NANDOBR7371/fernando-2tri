const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "isso e um quizz de sekiro então você precisa ter jogado o jogo primeiro, ok?",
        alternativas: [
            {
                texto: "vamo nessa!",
                afirmacao: "afirmação"
            },
            {
                texto: "vamos, sekiro!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Vamos começar fácil. Qual e o animal que sekiro leva em seu "nome"?",
        alternativas: [
            {
                texto: "lobo",
                afirmacao: "verdadeira"
            },
            {
                texto: "coruja.",
                falso: "falso"
            }
        ]
    },
    {
        enunciado: "Ok vamos lá então! Qual ferramenta prostética e responsável por retirar itens e dinheiro dos seus inimigos?",
        alternativas: [
            {
                texto: "furto.",
                falso: "falso"
            },
            {
                texto: "leque dourado",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual a identidade do homen que nos da a possibilidade de aprender as habilidades do estilo Ashina?",
        alternativas: [
            {
                texto: "genichiro ashina.",
                falso: "falso"
            },
            {
                texto: "ishin ashina",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual o nome da espada que Genichiro usa para tentar matar o herdeiro divino no final do jogo ",
        alternativas: [
            {
                texto: "segunda lamina mortal",
                afirmacao: "afirmação"
            },
            {
                texto: "lamina negra matadora de imortais",
                falso: "falso"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
