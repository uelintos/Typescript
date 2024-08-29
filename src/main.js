"use strict";
class Aluno {
    constructor(nome, nota) {
        this.multiplicaNota = (a, b) => `O resultado da multiplicacao de ${a} e ${b} é ${a * b}`;
        this.nome = nome;
        this.nota = nota;
    }
    dizOla() {
        console.log(`Ola, ${this.nome}`);
    }
}
const aluno1 = new Aluno('Joao', 20);
const aluno2 = new Aluno('Maria', 25);
aluno1.nota = 10;
aluno2.nota = 5;
console.log(aluno1.multiplicaNota(aluno1.nota, aluno2.nota));
aluno1.dizOla();
aluno2.dizOla();
