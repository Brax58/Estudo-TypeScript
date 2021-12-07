import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona() {
        this._negociacoes.AddNegociacao(this.CriaNegociacao());
        console.log(this._negociacoes.ListNegociacao());
        this.LimpaFormulario();
    }
    CriaNegociacao() {
        var data = new Date(this._inputData.value.replace(/-/g, ','));
        var quantidade = parseInt(this._inputQuantidade.value);
        var valor = parseFloat(this._inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    LimpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
}
