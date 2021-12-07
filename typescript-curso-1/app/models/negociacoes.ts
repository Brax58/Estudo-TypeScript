import { Negociacao } from "./negociacao";

export class Negociacoes{
    private readonly _negociacoes: Negociacao[] = [];

    public AddNegociacao(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    public ListNegociacao(): Negociacao[] {
        return this._negociacoes;
    }
}