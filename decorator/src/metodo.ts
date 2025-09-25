// Decorator Método, ele só é chamado quando nosso método for chamado em algum local.
import { verificaPessoa } from "./decorator/verificaPessoa.js";

class Pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    @verificaPessoa(16)
    cadastrarPessoa() {
        console.log(`Bem vindo ${this.nome} ao sistema.`)
    }

}

const pessoa1 = new Pessoa("Matheus F");


pessoa1.cadastrarPessoa();