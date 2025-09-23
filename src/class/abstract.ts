type DadosConta = {
    name: string;
    number: string;
    address: string;
}
abstract class ContaBanco {
    abstract abrirConta(data: DadosConta): boolean;
}
// const conta1 = new ContaBanco(); // Não pode instanciar uma classe abstrata

class pessoaFisica extends ContaBanco {
    abrirConta(data: DadosConta): boolean {
        console.log(`Conta de pessoa física criada para ${data.name}`);
        return true;
    }
}
class pessoaJuridica extends ContaBanco {
    abrirConta(data: DadosConta): boolean {
        console.log(`Conta de pessoa jurídica criada para ${data.name}`);
        return true;
    }
}
const conta1 = new pessoaFisica();

conta1.abrirConta({
    name: "João",
    number: "1234-5",
    address: "Rua A, 123"
});

const mark = new pessoaJuridica();

mark.abrirConta({
    name: "Mark",
    number: "54321-x",
    address: "Av. B, 456"
})
