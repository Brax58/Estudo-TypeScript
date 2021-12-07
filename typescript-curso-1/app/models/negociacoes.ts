import { Negociacao } from "./negociacao";

export class Negociacoes{
    private readonly _negociacoes: Array<Negociacao> = [];

    public AddNegociacao(data: Date,quantidade: number, valor: number) : void {
        this._negociacoes.push(new Negociacao(data,quantidade,valor));
    }

    public RemoveNegociacao() : void {
        
    }
}