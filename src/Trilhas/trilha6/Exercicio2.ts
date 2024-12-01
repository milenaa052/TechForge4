//CLASSE COM BAIXA COESÃO
/*class UserManager {
    private users: { name: string; email: string }[] = [];
  
    public createUser(name: string, email: string): void {
      const user = { name, email };
      this.users.push(user);
      this.sendEmailNotification(user);
      console.log(`Usuário ${name} criado com sucesso.`);
    }
  
    private sendEmailNotification(user: { name: string; email: string }): void {
      console.log(`Email enviado para ${user.email}: "Olá, ${user.name}!"`);
    }
  
    public listUsers(): void {
      console.log(this.users);
    }
}
  
const userManager = new UserManager();
userManager.createUser("Milena", "milena@gmail.com");
userManager.createUser("Amanda", "amanda@gmail.com");
userManager.listUsers();*/

//CLASSE COM ALTA COESÃO
class EmailNotification {
    public sendEmail(user: { name: string; email: string }): void {
      console.log(`Email enviado para ${user.email}: "Olá, ${user.name}!"`);
    }
  }
  
  class UserManager {
    private users: { name: string; email: string }[] = [];
    private emailNotification: EmailNotification;
  
    constructor() {
      this.emailNotification = new EmailNotification();
    }
  
    public createUser(name: string, email: string): void {
      const user = { name, email };
      this.users.push(user);
      this.emailNotification.sendEmail(user);
      console.log(`Usuário ${name} criado com sucesso.`);
    }
  
    public listUsers(): void {
      console.log(this.users);
    }
  }
  
const userManager = new UserManager();
userManager.createUser("Milena", "milena@gmail.com");
userManager.createUser("Amanda", "amanda@gmail.com");
userManager.listUsers();