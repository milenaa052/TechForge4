interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
  private produtos: ProdutoLoja[] = [];

  public adicionarProduto(produto: ProdutoLoja): void {
    this.produtos.push(produto);
  }

  public buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
    return this.produtos.find(produto => produto.codigo === codigo);
  }
}


const loja = new Loja();

const produto3: ProdutoLoja = { codigo: 1, nome: "Notebook" };
const produto4: ProdutoLoja = { codigo: 2, nome: "Mouse" };

loja.adicionarProduto(produto3);
loja.adicionarProduto(produto4);

console.log(loja.buscarProdutoPorCodigo(1));
console.log(loja.buscarProdutoPorCodigo(3));
