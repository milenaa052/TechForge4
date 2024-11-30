abstract class Inventory {
    protected items: Record<string, number> = {};
  
    public abstract addItem(item: string, quantity: number): void;
  
    public abstract removeItem(item: string): void;
  
    public getInventory(): Record<string, number> {
      return this.items;
    }
  }
  
  
  class WarehouseInventory extends Inventory {
    
    public addItem(item: string, quantity: number): void {
      if (this.items[item]) {
        this.items[item] += quantity;
      } else {
        this.items[item] = quantity;
      }
      console.log(`Item "${item}" adicionado ao estoque com quantidade ${quantity}.`);
    }
  
    public removeItem(item: string): void {
      if (this.items[item]) {
        delete this.items[item];
        console.log(`Item "${item}" removido do estoque.`);
      } else {
        console.log(`Item "${item}" não encontrado no estoque.`);
      }
    }
  }
  
  
  class StoreInventory extends Inventory {
  
    public addItem(item: string, quantity: number): void {
      if (quantity > 10) {
        console.log(`Não é possível adicionar mais de 10 unidades de "${item}" ao estoque.`);
        return;
      }
  
      if (this.items[item]) {
        const newQuantity = this.items[item] + quantity;
        if (newQuantity > 10) {
          console.log(`A quantidade total de "${item}" não pode ultrapassar 10 unidades.`);
        } else {
          this.items[item] = newQuantity;
          console.log(`Item "${item}" atualizado no estoque com quantidade ${newQuantity}.`);
        }
      } else {
        this.items[item] = quantity;
        console.log(`Item "${item}" adicionado ao estoque com quantidade ${quantity}.`);
      }
    }
  
    public removeItem(item: string): void {
      if (this.items[item]) {
        delete this.items[item];
        console.log(`Item "${item}" removido do estoque.`);
      } else {
        console.log(`Item "${item}" não encontrado no estoque.`);
      }
    }
  }
  
const warehouse = new WarehouseInventory();
warehouse.addItem("Laptop", 50);
warehouse.addItem("Mouse", 150);
warehouse.removeItem("Keyboard");
console.log("Warehouse Inventory:", warehouse.getInventory());

const store = new StoreInventory();
store.addItem("Notebook", 5);
store.addItem("Notebook", 7);
store.addItem("Mouse", 3);
store.removeItem("Mouse");
console.log("Store Inventory:", store.getInventory());