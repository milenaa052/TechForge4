class Agenda {
    private compromissos: string[];
  
    constructor() {
      this.compromissos = [];
    }
  
    public adicionarCompromisso(compromisso: string) {
      this.compromissos.push(compromisso);
      console.log(`Compromisso "${compromisso}" adicionado.`);
    }
  
    public listarCompromissos() {
      if (this.compromissos.length === 0) {
        console.log("Nenhum compromisso agendado.");
      } else {
        console.log("Compromissos agendados:");
        this.compromissos.forEach((compromisso, index) => {
          console.log(`${index + 1}. ${compromisso}`);
        });
      }
    }
}
  
const minhaAgenda = new Agenda();
minhaAgenda.adicionarCompromisso("Oftalmologista às 10:00");
minhaAgenda.adicionarCompromisso("Futzinho com os crias às 19:30");
minhaAgenda.listarCompromissos();