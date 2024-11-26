class Pagamento {
    protected valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    public processar(): void {}
}

class PagamentoCartao extends Pagamento {
    private numeroCartao: string;
    private validade: string;
    private cvv: string;

    constructor(valor: number, numeroCartao: string, validade: string, cvv: string) {
        super(valor);
        this.numeroCartao = numeroCartao;
        this.validade = validade;
        this.cvv = cvv;
    }

    public processar() {
        if (!this.numeroCartao || this.numeroCartao.length < 16) {
            console.log("Número do cartão inválido.");
        } else if (!this.validade || !this.validade.match(/^(0[1-9]|1[0-2])\/\d{4}$/)) {
            console.log("Data de validade inválida.");
        } else if (!this.cvv || this.cvv.length !== 3) {
            console.log("CVV inválido.");
        } else {
            console.log(`Pagamento de R$${this.valor.toFixed(2)} efetuado com sucesso no cartão.`);
        }
    }
}

class PagamentoBoleto extends Pagamento {
    private codigoBoleto: string;

    constructor(valor: number, codigoBoleto: string) {
        super(valor);
        this.codigoBoleto = codigoBoleto;
    }

    public processar() {
        if(this.codigoBoleto.length != 14) {
            console.log("Código do boleto inválido");
        } else {
            console.log(`Pagamento de R$${this.valor.toFixed(2)} gerado com sucesso. Código do boleto: ${this.codigoBoleto}`);
        }
    } 
}

function processarPagamento(pagamento: Pagamento) {
    pagamento.processar();
}

const pagamentoCartao = new PagamentoCartao(100, "1234567890123456", "10/2027", "123");
const pagamentoBoleto = new PagamentoBoleto(200, "12345678912345");

processarPagamento(pagamentoCartao);
processarPagamento(pagamentoBoleto);