type Uuid = number | string | null; 

function access(uuid: Uuid, name: string) {
    console.log(`User ${name} has access to ${uuid}`);
}

function logUser(uuid: Uuid) {
    console.log(`User logged in: ${uuid}`);
}

// access(123, 'Elon');

// access('55', 'Jorginho');

// logUser(123);

type Coins = 'USD' | 'BRL' | 'EUR' | 'BTC';

function buyItem(coin: Coins){
    console.log(`Buying item with ${coin}`);
}

buyItem('BTC');




