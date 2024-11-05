class Pedido {
    private numeroPedido: number;
    private itens: string[];
    private total: number;

    constructor(numPedido: number, produtos: string[], valorTotal: number) {
        this.numeroPedido = numPedido;
        this.itens = produtos;
        this.total = valorTotal;
    }

    public getNumeropedido(): number {
        return this.numeroPedido;
    }

    public setNumeroPedido(nPedido: number) {
        if (nPedido > 0 && nPedido < 50) {
            this.numeroPedido = nPedido;
        }
    }

    public adicionarItem(produto: string, valorProduto: number) {
        this.itens.push(produto);
        this.total = this.total + valorProduto;
    }

    public exibirResumo() {
        console.log(`Resumo do pedido. Número: ${this.numeroPedido}, Produtos: ${this.itens}, Valor total: ${this.total}`);
    }
}

const pedido1 = new Pedido(1, ["brinco", "pulseira"], 30);
pedido1.exibirResumo();
pedido1.adicionarItem("relógio", 20);
pedido1.exibirResumo();