class Pessoa {
    protected nome: string;
    protected idade: number;
    private endereco: string;

    constructor(nome: string, idade: number, endereco: string) {
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
    }

    public apresentar() {
        console.log(`Meu nome é: ${this.nome}, idade: ${this.idade}`)
    }

    public apresentarEndereco() {
        console.log(`Endereço: ${this.endereco}`)
    }

}