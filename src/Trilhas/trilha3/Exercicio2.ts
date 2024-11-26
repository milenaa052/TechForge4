abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}
  
  
class Circulo implements FiguraGeometrica {
    private raio: number;
  
    constructor(raio: number) {
      this.raio = raio;
    }
  
    calcularArea(): number {
      return Math.PI * Math.pow(this.raio, 2);
    }
}
  
  
class Quadrado implements FiguraGeometrica {
    private lado: number;
  
    constructor(lado: number) {
      this.lado = lado;
    }
  
    calcularArea(): number {
      return Math.pow(this.lado, 2);
    }
}
  
  
class Triangulo implements FiguraGeometrica {
    private base: number;
    private altura: number;
  
    constructor(base: number, altura: number) {
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea(): number {
      return (this.base * this.altura) / 2;
    }
}
  
  
function imprimirAreas(figuras: FiguraGeometrica[]) {
    figuras.forEach((figura) => {
      console.log(`Área de ${figura.constructor.name}: ${figura.calcularArea()}`);
    });
}
  
  
const figuras: FiguraGeometrica[] = [
    new Circulo(10),
    new Quadrado(4),
    new Triangulo(3, 6),
];
  
imprimirAreas(figuras);