class Temperatura {
    private valor: number;
  
    constructor(valor: number) {
      this.valor = valor;
    }

    public converterEmFahrenheit(): number {
      return (this.valor * 9/5) + 32;
    }
  
    public converterEmKelvin(): number {
      return this.valor + 273.15;
    }
  
    public getValorCelsius(): number {
      return this.valor;
    }
}

const tempo = new Temperatura(25);
  
console.log(`Temperatura em Celsius: ${tempo.getValorCelsius()}°C`);
console.log(`Temperatura em Fahrenheit: ${tempo.converterEmFahrenheit()}°F`);
console.log(`Temperatura em Kelvin: ${tempo.converterEmKelvin()}K`);  