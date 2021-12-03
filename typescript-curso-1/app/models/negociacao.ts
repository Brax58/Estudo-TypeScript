export class Negociacao
{
    private Data: Date;
    private Quantidade: number;
    private Valor : number;

    get valor() { return this.Valor; }

    get quantidade() { return this.Quantidade; }

    get data(){ return this.Data; }

    constructor(data: Date,quantidade: number,valor: number)
    {   
        this.Data = data;
        this.Quantidade = quantidade;
        this.Valor = valor;
    }

}