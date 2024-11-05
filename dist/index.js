"use strict";
// function greet(name: string): string {
//     return `Hello, ${name}!`;
//   }
//   console.log(greet("World"));
function acao(qntIteracoes) {
    while (qntIteracoes > 0) {
        if (qntIteracoes % 2 != 0) {
            console.log(qntIteracoes);
        }
        qntIteracoes--;
    }
}
acao(10);
