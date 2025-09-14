

function login(username: string): boolean | string {
    let message = 'User logged in: ' + username;
    console.log(message);
    return username;
}

const logged = login('Elon');

console.log(logged);

function sum(a: number, b: number): number {
    return a + b;
}

let total = sum(1, 2);

console.log(total);
