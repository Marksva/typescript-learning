
// Propriedade Decorator.

function validaNome(tamanho: number) {
    // target = cosntrutor da nossa classe
    // key = nossa propriedade

    return (target: any, key: string) => {

        let valor: string = "";

        const getter = () => valor;

        const setter = (value: string) => {
            if (value === "") {
                console.log("Você nao pode deixar em branco");
            } else if (value.length < tamanho) {
                console.log("Você nao pode criar com esse tamanho");
            } else {
                valor = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}

class Jogo {
    @validaNome(5)
    nome!: string;

    @validaNome(15)
    titulo!: string;

    constructor(nome: string, titulo: string) {
        this.nome = nome;     // chama o setter
        this.titulo = titulo; // chama o setter
    }
}

const jogo1 = new Jogo("GTA 5 Online", "JOGO");
console.log(jogo1.nome);
console.log(jogo1.titulo); 