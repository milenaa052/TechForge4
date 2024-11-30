abstract class TaskManager {
    protected tasks: Set<string> = new Set();
  
    public abstract addTask(task: string): void;
  
    public listTasks(): string[] {
      return Array.from(this.tasks);
    }
  }
  
  class Project extends TaskManager {
    
    public addTask(task: string): void {
      if (!this.tasks.has(task)) {
        this.tasks.add(task);
        console.log(`Tarefa do projeto: "${task}" adicionada.`);
      } else {
        console.log(`A tarefa do projeto: "${task}" já existe.`);
      }
    }
  }
  
  class DailyTasks extends TaskManager {
    
    public addTask(task: string): void {
      if (!this.tasks.has(task)) {
        this.tasks.add(task);
        console.log(`Tarefa diária: "${task}" adicionada.`);
      } else {
        console.log(`A tarefa diária: "${task}" já existe.`);
      }
    }
  }
  
const projeto = new Project();
projeto.addTask("Implementar herança");
projeto.addTask("Criar trigger para auditoria");
projeto.addTask("Implementar herança");

console.log("Tarefas do Projeto:"); 
console.log(projeto.listTasks());

const tarefasDiarias = new DailyTasks();
tarefasDiarias.addTask("Responder emails");
tarefasDiarias.addTask("Reunião com a equipe");
tarefasDiarias.addTask("Responder emails");

console.log("Tarefas Diárias:"); 
console.log(tarefasDiarias.listTasks());  