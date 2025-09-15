
type Info = {
    id: number;
    name: string;
    description?: string;
}

const productInfo: Info = {
    id: 1,
    name: 'Placa de video',
    // description: 'RTX 3050'
}

type Category = {
    slug: string;
    amountProducts: number;
}

const category1: Category = {
    slug: 'hardware',
    amountProducts: 10
}

type productInfo = Info & Category; // intersection with Info and Category

const newProduct: productInfo = {
    id: 54321,
    name: 'Teclado Gamer',
    slug: 'teclado-mecanico',
    amountProducts: 10
}

console.log(newProduct);