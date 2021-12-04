import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { Negociacao } from "./models/negociacao.js";


// const negociacao = new Negociacao(new Date(),1,200);

// console.log(negociacao.quantidade + " , " + negociacao.valor);

const controller = new NegociacaoController();

const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});


