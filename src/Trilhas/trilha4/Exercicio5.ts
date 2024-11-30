interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao  {
  private livros: LivroBiblioteca[] = [];

  public adicionarLivro(livro: LivroBiblioteca): void {
    this.livros.push(livro);
  }

  public buscarLivrosDisponiveis(): LivroBiblioteca[]{
    return this.livros.filter(livros => livros.disponivel === true);
  }

  public filtrarPorGenero(genero: string): LivroBiblioteca[]{
    return this.livros.filter(livros => livros.genero === genero && livros.disponivel === true);
  }

  public filtrarPorAutor(autor: string): LivroBiblioteca[]{
    return this.livros.filter(livros => livros.autor === autor && livros.disponivel === true);
  }

  public obterLivrosDisponiveisOrdenados(): LivroBiblioteca[]{
    return this.livros.filter(livros => livros.disponivel === true)
    .sort((a, b) => a.titulo.localeCompare(b.titulo));
  }
}


const bibliotecaGestao = new BibliotecaGestao();

const livro3: LivroBiblioteca = { titulo: "Harry Potter", autor: "JK Holling", genero: "Ficção Científica", disponivel: true };
const livro4: LivroBiblioteca = { titulo: "A vida de Pi", autor: "Yann Martel", genero: "Fantasia", disponivel: false };
const livro5: LivroBiblioteca = { titulo: "Turma da Mônica", autor: "Maurício de Souza", genero: "Infantil", disponivel: true };
const livro6: LivroBiblioteca = { titulo: "Contramão", autor: "Henrique Schneider", genero: "Ação", disponivel: true };


bibliotecaGestao.adicionarLivro(livro3);
bibliotecaGestao.adicionarLivro(livro4);
bibliotecaGestao.adicionarLivro(livro5);
bibliotecaGestao.adicionarLivro(livro6);

console.log(bibliotecaGestao.buscarLivrosDisponiveis());
console.log(bibliotecaGestao.filtrarPorGenero("Infantil"));
console.log(bibliotecaGestao.filtrarPorAutor("JK Holling"));
console.log(bibliotecaGestao.obterLivrosDisponiveisOrdenados());