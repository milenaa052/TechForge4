class Produto {
    private nome: string;
    private preco: number;
    private quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public calculaEstoque() {
        let estoque = this.preco * this.quantidade;
        console.log(`A quantidade do produto ${this.nome} em estoque é: ${estoque}`)
    }
}

const produto1 = new Produto("Notebook", 2500, 10);
produto1.calculaEstoque();