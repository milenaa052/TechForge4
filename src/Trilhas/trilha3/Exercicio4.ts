class Animal {
    private energia: number;

    constructor(energiaInicial: number) {
        this.energia = energiaInicial;
    }

    public comer(valorEnergia: number): void {
        this.energia += valorEnergia;
        console.log(`O animal comeu e ganhou ${valorEnergia} de energia.`);
    }

    protected gastarEnergia(valor: number): void {
        this.energia -= valor;
        console.log(`O animal gastou ${valor} de energia.`);
    }

    public statusEnergia(): void {
        console.log(`Status de energia: ${this.energia}`);
    }
}

class Leao extends Animal {
    public comer(valorEnergia: number): void {
        console.log("O leão está caçando");
        this.gastarEnergia(20);
        super.comer(valorEnergia);
    }
}

class Passaro extends Animal {
    public comer(valorEnergia: number): void {
        console.log("O pássaro está se alimentando");
        super.comer(valorEnergia);
    }
}

function interagirComAnimal(animal: Animal, ganharEnergia: number): void {
    animal.comer(ganharEnergia);
    animal.statusEnergia();
}

const leao = new Leao(70);
const passaro = new Passaro(50);

interagirComAnimal(leao, 50);
interagirComAnimal(passaro, 20);