class Livro {
    private titulo: string;
    private autor: string;
    private paginas: number;
    private lido: boolean;

    constructor(titulo: string, autor: string, paginas: number, lido: boolean) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }

    public marcarComoLido() { 
        this.lido = true; 
        console.log(`Livro "${this.titulo}" foi marcado como lido.`); 
    }
}

const meuLivro = new Livro("Diário de um banana", "Não sei", 312, false); 
meuLivro.marcarComoLido();