class Jogo {
    private servidor: string;
    private id: string = "1234";

    constructor(servidor: string) {
        this.servidor = servidor;
    }

    get getServer() {
        console.log("Acessando servidor... ");
        return this.servidor;
    }

    set setServer(servidor: string) {
        if (this.servidor === servidor) {
            throw new Error("Servidor já está em uso");
            return;
        }
        console.log("Alterando servidor... ");
        this.servidor = servidor;
    }
}

const GTA6 = new Jogo("PS5");

console.log(GTA6);
console.log(GTA6.getServer);
GTA6.setServer = "192.168.0.1";
try {
    GTA6.setServer = "192.168.0.10";
} catch(error) {
    console.log(error.message);
}


