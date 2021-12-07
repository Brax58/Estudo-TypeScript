import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController{

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private readonly _negociacoes: Negociacoes = new Negociacoes();

    constructor(){
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }

    public adiciona() : void 
    {
        this._negociacoes.AddNegociacao(this.CriaNegociacao());
        
        console.log(this._negociacoes.ListNegociacao());
        
        this.LimpaFormulario();
    }

    private CriaNegociacao() : Negociacao
    {
        var data = new Date(this._inputData.value.replace(/-/g,','));
        var quantidade = parseInt(this._inputQuantidade.value);
        var valor = parseFloat(this._inputValor.value);

        return new Negociacao(data,quantidade,valor);
    }

    private LimpaFormulario() : void 
    {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
}