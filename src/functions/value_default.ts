// Como deixar um valor default ou opcional

function cadastro(email: string, senha: string, nome = 'Anônimo', idade?: number): void {
    let data = {
        email,
        senha,
        nome,
        idade
    }
    console.log(data);
}

cadastro('v9oOw@example.com', '123456', 'Elon', 45);

cadastro('v9oOw@example.com', '123456');