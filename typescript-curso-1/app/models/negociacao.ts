export class Negociacao
{
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    get valor(): number { return this._valor; }

    get quantidade(): number { return this._quantidade; }

    get data(): Date { return this._data; }

    constructor(data: Date,quantidade: number,valor: number)
    {   
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

}