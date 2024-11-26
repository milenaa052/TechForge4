class Veiculo {
    private cor: String;

    constructor(cor: String) {
        this.cor = cor;
    }

    public mover() {
        console.log("O veículo está se movendo");
    }
}

class Carro extends Veiculo {
    private marca: String;
    private modelo: String;
    private ano: number;

    constructor(cor: String, marca: String, modelo: String, ano: number) {
        super(cor);
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano
    }

    public mover() {
        console.log("O carro está dirigindo");
    }
}

class Bicicleta extends Veiculo {
    private aro: number;

    constructor(cor: String, aro: number) {
        super(cor);
        this.aro = aro
    }

    public mover() {
        console.log("A bicicleta está pedalando");
    }
}

const veiculo = new Veiculo("prata");
veiculo.mover();

const carro = new Carro("Preto", "Mitsubish", "Lancer", 2013);
carro.mover();

const bicicleta = new Bicicleta("Branco", 29);
bicicleta.mover();