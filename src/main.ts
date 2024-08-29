class Aluno {
    nome: string;
    nota: number;

    constructor(nome: string, nota: number) {
        this.nome = nome;
        this.nota = nota;
    }

    dizOla(): void {
        console.log( `Ola, ${this.nome}`);
    }
    
    multiplicaNota = (a:number, b:number): string => `O resultado da multiplicação de ${a} e ${b} é ${a * b}`;
}

const aluno1 = new Aluno('Joao', 20);
const aluno2 = new Aluno('Maria', 25);

aluno1.nota = 10;
aluno2.nota = 5;

console.log(aluno1.multiplicaNota(aluno1.nota, aluno2.nota));

aluno1.dizOla();
aluno2.dizOla();