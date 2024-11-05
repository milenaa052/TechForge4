class Cachorro {
    private nome: string;
    private raca: string;
    private idade: number;

    constructor(nome: string, raca: string, idade: number) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }

    public idadeCachorro() {
        let idade: number = this.idade * 7;
        console.log(`O seu cachorro ${this.nome} da raça ${this.raca} tem ${idade.toFixed(1)} anos na idade de cachorro.`);
    }
}

const cachorro = new Cachorro("Pretinha", "Preta", 1.6);
cachorro.idadeCachorro();