interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class Biblioteca  {
  private livros: LivroBiblioteca[] = [];

  public adicionarLivro(livro: LivroBiblioteca): void {
    this.livros.push(livro);
  }

  public buscarLivrosDisponiveis(): LivroBiblioteca[]{
    return this.livros.filter(livros => livros.disponivel === true);
  }
}


const biblioteca = new Biblioteca();

const livro1: LivroBiblioteca = { titulo: "Harry Potter", autor: "JK Holling", genero: "Ficção Científica", disponivel: true };
const livro2: LivroBiblioteca = { titulo: "A vida de Pi", autor: "Parker", genero: "Fantasia", disponivel: false };

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);

console.log(biblioteca.buscarLivrosDisponiveis());