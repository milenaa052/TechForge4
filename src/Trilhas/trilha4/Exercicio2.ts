interface Documento {
    titulo: string;
    conteudo: string;
}

class Texto implements Documento {
    titulo: string;
    conteudo: string;

    constructor(titulo: string, conteudo: string) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    public exibir() {
        console.log(`Título: [${this.titulo}] \n\nConteúdo: [${this.conteudo}]`);
    }

}

const doc = new Texto("Documento TypeScript", "Exercício de TechForge4, trilha 04 - Interfaces.",);
console.log(doc.exibir());