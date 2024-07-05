const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Isso é um quiz de Sekiro. Você precisa ter jogado o jogo primeiro, ok?",
        alternativas: [
            {
                texto: "Vamo nessa!",
                afirmacao: "verdadeiro"
            },
            {
                texto: "Vamos, Sekiro!",
                afirmacao: "verdadeiro"
            }
        ]
    },
    {
        enunciado: "Vamos começar fácil. Qual é o animal que Sekiro leva em seu nome?",
        alternativas: [
            {
                texto: "Lobo",
                afirmacao: "verdadeiro"
            },
            {
                texto: "Coruja",
                afirmacao: "falso"
            }
        ]
    },
    {
        enunciado: "Qual ferramenta prostética é responsável por retirar itens e dinheiro dos seus inimigos?",
        alternativas: [
            {
                texto: "Furto",
                afirmacao: "falso"
            },
            {
                texto: "Leque dourado",
                afirmacao: "verdadeiro"
            }
        ]
    },
    {
        enunciado: "Qual a identidade do homem que nos dá a possibilidade de aprender as habilidades do estilo Ashina?",
        alternativas: [
            {
                texto: "Genichiro Ashina",
                afirmacao: "falso"
            },
            {
                texto: "Isshin Ashina",
                afirmacao: "verdadeiro"
            }
        ]
    },
    {
        enunciado: "Qual o nome da espada que Genichiro usa para tentar matar o herdeiro divino no final do jogo?",
        alternativas: [
            {
                texto: "Segunda lâmina mortal",
                afirmacao: "verdadeiro"
            },
            {
                texto: "Lâmina negra matadora de imortais",
                afirmacao: "falso"
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
    caixaAlternativas.innerHTML = ""; // Limpa as alternativas antes de mostrar as novas
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Quiz de Sekiro finalizado:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.innerHTML = ""; // Limpa as alternativas no final
}

mostraPergunta();
