class Aluno extends Pessoa {
    private ra: number;

    constructor(nome: string, idade: number, endereco: string, ra: number) {
        super(nome, idade, endereco);
        this.ra = ra;
    }

    public apresentar() {
        console.log(`O RA do aluno é: ${this.ra}`)
    }

}

//chama o método apresentar da classe Pessoa
const pessoa1 = new Pessoa("Milena", 18, "Campo Mourão - PR")
pessoa1.apresentar();
pessoa1.apresentarEndereco();

//chama o método apresentar da classe Aluno e apresentarEndereco da classe Pessoa
const aluno1 = new Aluno("Milena", 18, "Paraná", 2312122);
aluno1.apresentar();
aluno1.apresentarEndereco();