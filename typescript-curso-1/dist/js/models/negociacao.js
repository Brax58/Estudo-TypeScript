export class Negociacao {
    constructor(data, quantidade, valor) {
        this.Data = data;
        this.Quantidade = quantidade;
        this.Valor = valor;
    }
    get valor() {
        return this.Valor;
    }
    get quantidade() {
        return this.Quantidade;
    }
    get data() {
        return this.Data;
    }
}
