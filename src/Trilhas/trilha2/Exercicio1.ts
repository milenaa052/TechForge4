class ContaBancaria {
    private titular: string;
    private saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    public depositar(valor: number) {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor} realizado. Saldo atual: R$ ${this.saldo}`);
    }

    public sacar(valor: number) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado. Saldo atual: R$ ${this.saldo}`);
        } else {
            console.log("Saldo insuficiente para saque.");
        }
    }
}

const minhaConta = new ContaBancaria("Milena", 1000); 
minhaConta.depositar(500); 
minhaConta.sacar(100);