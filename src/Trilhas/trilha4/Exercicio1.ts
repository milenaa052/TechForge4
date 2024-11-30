interface ProdutoIN {
    idProduto: number;
    nomeProduto: string;
    precoProduto: number;
}

class ItemLoja implements ProdutoIN {
    idProduto: number;
    nomeProduto: string;
    precoProduto: number;

    constructor(id: number, nome: string, preco: number) {
        this.idProduto = id;
        this.nomeProduto = nome;
        this.precoProduto = preco;
    }

}

const item1 = new ItemLoja(1, "Camiseta", 49.90);
console.log(item1);