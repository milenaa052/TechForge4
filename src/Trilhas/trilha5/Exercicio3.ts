abstract class FavoriteManager {
    protected favorites: string[] = [];
  
    public abstract addFavorite(item: string): void;
  
    public getFavorites(): string[] {
      return this.favorites;
    }
  }
  
  class MoviesFavoriteManager extends FavoriteManager {
  
    public addFavorite(item: string): void {
      if (!this.favorites.push(item)) {
        this.favorites.push(item);
        this.favorites.sort();
        console.log(`Filme "${item}" adicionado à lista de favoritos.`);
      } else {
        console.log(`O filme "${item}" já está na lista de favoritos.`);
      }
    }
  }
  
  class BooksFavoriteManager extends FavoriteManager {
  
    public addFavorite(item: string): void {
      if (!this.favorites.push(item)) {
        this.favorites.unshift(item);
        console.log(`Livro "${item}" adicionado à lista de favoritos.`);
      } else {
        console.log(`O livro "${item}" já está na lista de favoritos.`);
      }
    }
  }
  
const moviesManager = new MoviesFavoriteManager();
moviesManager.addFavorite("Harry Potter e as Relíquias da morte");
moviesManager.addFavorite("Harry Potter e o Cálice de fogo");
moviesManager.addFavorite("Harry Potter e o Cálice de fogo");
console.log("Filmes Favoritos:", moviesManager.getFavorites());

const booksManager = new BooksFavoriteManager();
booksManager.addFavorite("Turma da Mônica");
booksManager.addFavorite("Divergente");
booksManager.addFavorite("Divergente");
console.log("Livros Favoritos:", booksManager.getFavorites());