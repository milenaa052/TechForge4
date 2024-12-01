//CLASSE COM BAIXA COESÃO
/*class Order {
    private items: { name: string, price: number }[] = [];
    private totalPrice: number = 0;
    private paymentStatus: string = 'pendente';
    private shippingStatus: string = 'não enviado';
  
    public addItem(item: { name: string, price: number }): void {
      this.items.push(item);
      this.calculateTotalPrice();
    }
  
    private calculateTotalPrice(): void {
      this.totalPrice = this.items.reduce((total, item) => total + item.price, 0);
    }
  
    public processPayment(): void {
      if (this.totalPrice > 0) {
        this.paymentStatus = 'completo';
        console.log('Pagamento processado com sucesso.');
      } else {
        console.log('O carrinho está vazio. Adicione itens para processar o pagamento.');
      }
    }
  
    public updateShippingStatus(status: string): void {
      this.shippingStatus = status;
      console.log(`Status de envio atualizado para: ${status}`);
    }
  
    public getOrderDetails(): void {
      console.log(`Itens: ${JSON.stringify(this.items)}`);
      console.log(`Preço total: $${this.totalPrice}`);
      console.log(`Status de pagamento: ${this.paymentStatus}`);
      console.log(`Status de envio: ${this.shippingStatus}`);
    }
}
  
const order = new Order();
order.addItem({ name: 'Celular', price: 1200 });
order.addItem({ name: 'Mouse', price: 35 });
order.getOrderDetails();
order.processPayment();
order.updateShippingStatus('enviado');
order.getOrderDetails();*/


//CLASSE COM ALTA COESÃO
class Cart {
    private items: { name: string, price: number }[] = [];
  
    public addItem(item: { name: string, price: number }): void {
      this.items.push(item);
    }
  
    public getItems(): { name: string, price: number }[] {
      return this.items;
    }
  
    public calculateTotalPrice(): number {
      return this.items.reduce((total, item) => total + item.price, 0);
    }
  }
  
  class Payment {
    private status: string = 'pendente';
  
    public process(totalPrice: number): void {
      if (totalPrice > 0) {
        this.status = 'completo';
        console.log('Pagamento processado com sucesso.');
      } else {
        console.log('O carrinho está vazio. Adicione itens para processar o pagamento.');
      }
    }
  
    public getStatus(): string {
      return this.status;
    }
  }
  
  class Shipping {
    private status: string = 'não enviado';
  
    public updateStatus(status: string): void {
      this.status = status;
      console.log(`Status de envio atualizado para: ${status}`);
    }
  
    public getStatus(): string {
      return this.status;
    }
  }
  
  class Order {
    private cart: Cart;
    private payment: Payment;
    private shipping: Shipping;
  
    constructor() {
      this.cart = new Cart();
      this.payment = new Payment();
      this.shipping = new Shipping();
    }
  
    public addItem(item: { name: string, price: number }): void {
      this.cart.addItem(item);
    }
  
    public processPayment(): void {
      const totalPrice = this.cart.calculateTotalPrice();
      this.payment.process(totalPrice);
    }
  
    public updateShippingStatus(status: string): void {
      this.shipping.updateStatus(status);
    }
  
    public getOrderDetails(): void {
      const items = this.cart.getItems();
      const totalPrice = this.cart.calculateTotalPrice();
      const paymentStatus = this.payment.getStatus();
      const shippingStatus = this.shipping.getStatus();
  
      console.log(`Itens: ${JSON.stringify(items)}`);
      console.log(`Preço Total: $${totalPrice}`);
      console.log(`Status do pagamento: ${paymentStatus}`);
      console.log(`Status de envio: ${shippingStatus}`);
    }
  }
  
const order = new Order();
order.addItem({ name: 'Celular', price: 1200 });
order.addItem({ name: 'Mouse', price: 35 });
order.getOrderDetails();
order.processPayment();
order.updateShippingStatus('enviado');
order.getOrderDetails();