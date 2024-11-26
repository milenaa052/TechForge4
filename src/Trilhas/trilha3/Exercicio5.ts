abstract class Funcionario {
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    public getSalario(): number {
        return this.salario;
    }

    public getNome(): string {
        return this.nome;
    }

    public abstract calcularBonus(): number;

    public calcularSalarioComBonus(): number {
        return this.salario + this.calcularBonus();
    }
}

class Gerente extends Funcionario {
    public calcularBonus(): number {
        return this.getSalario() * 0.1;
    }
}

class Operario extends Funcionario {
    public calcularBonus(): number {
        return this.getSalario() * 0.05;
    }
}

function calcularSalariosComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        console.log(
            `${funcionario.getNome()} - Salário com bônus: R$${funcionario.calcularSalarioComBonus().toFixed(2)}`
        );
    });
}

const gerente = new Gerente("Milena", 8000);
const operario1 = new Operario("Amanda", 3000);
const operario2 = new Operario("Nicolly", 3200);

const funcionarios: Funcionario[] = [gerente, operario1, operario2];

calcularSalariosComBonus(funcionarios);