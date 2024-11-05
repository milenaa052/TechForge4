class Profissional {
    private nome: string;
    private idade: number;
    private profissao: string;
  
    constructor(nome: string, idade: number, profissao: string) {
      this.nome = nome;
      this.idade = idade;
      this.profissao = profissao
    }
  
    public apresentar(): void {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  
    public apresentacaoProfissao(): void {
      console.log(`Minha profissão é: ${this.profissao}`);
    }
  }
  
  const pessoa = new Profissional("Milena", 18, "Desenvolvedora de Software");
  pessoa.apresentar();
  pessoa.apresentacaoProfissao();
  
  const pessoa2 = new Profissional("Amanda", 18, "Engenheira Civil");
  pessoa2.apresentar();
  pessoa2.apresentacaoProfissao();