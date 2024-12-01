//CLASSE COM BAIXA COESÃO
/*class EmailSender {
    public sendEmail(contact: { name: string, email: string }, message: string): void {
      if (this.validateContact(contact)) {
        console.log(`Email enviado para ${contact.email}: "${message}"`);
      } else {
        console.log(`Informações de contato inválidas para ${contact.name}. E-mail não enviado.`);
      }
    }
  
    private validateContact(contact: { name: string, email: string }): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return contact.name.length > 0 && emailRegex.test(contact.email);
    }
  }
  
const emailSender = new EmailSender();
emailSender.sendEmail({ name: "Milena", email: "milena@gmail.com" }, "Olá, Milena!");
emailSender.sendEmail({ name: "Amanda", email: "amandagmail.com" }, "Olá, Amanda!");*/

//CLASSE COM ALTA COESÃO
class ContactValidator {
    public validate(contact: { name: string, email: string }): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return contact.name.length > 0 && emailRegex.test(contact.email);
    }
  }
  
  class EmailSender {
    private validator: ContactValidator;
  
    constructor(validator: ContactValidator) {
      this.validator = validator;
    }
  
    public sendEmail(contact: { name: string, email: string }, message: string): void {
      if (this.validator.validate(contact)) {
        console.log(`Email enviado para ${contact.email}: "${message}"`);
      } else {
        console.log(`Informações de contato inválidas para ${contact.name}. Email não enviado.`);
      }
    }
}
  
const validator = new ContactValidator();
const emailSender = new EmailSender(validator);
emailSender.sendEmail({ name: "Milena", email: "milena@gmail.com" }, "Olá, Milena!");
emailSender.sendEmail({ name: "Amanda", email: "amandagmail.com" }, "Olá, Amanda!");