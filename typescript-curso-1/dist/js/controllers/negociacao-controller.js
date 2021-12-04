import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona() {
        console.log(this.CriaNegociacao());
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
        this._inputQuantidade.value = '1';
        this._inputValor.value = '0,0';
        this._inputData.focus();
    }
}
