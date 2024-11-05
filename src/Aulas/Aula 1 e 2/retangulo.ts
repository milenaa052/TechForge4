class Retangulo {
    private largura: number;
    private altura: number;

    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }

    public calcularArea(): number {
        return this.largura * this.altura;
    }

    public calcularPerimetro(): number {
        return 2 * (this.largura + this.altura);
    }

    public exibeInfo() {
        const area = this.calcularArea();
        const perimetro = this.calcularPerimetro();
        console.log(`O retângulo tem ${this.largura}cm de largura, ${this.altura}cm de altura, ${area}cm de aréa e ${perimetro}cm de perímetro`);
    }
}

const retangulo = new Retangulo(10, 5);
retangulo.exibeInfo();