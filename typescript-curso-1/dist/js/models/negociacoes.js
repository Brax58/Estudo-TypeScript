export class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    AddNegociacao(negociacao) {
        this._negociacoes.push(negociacao);
    }
    ListNegociacao() {
        return this._negociacoes;
    }
}
