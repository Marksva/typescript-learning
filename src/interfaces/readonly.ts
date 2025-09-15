interface ProductProps {
    readonly id: string;
    name: string;
    description: string;
}

let productOne: ProductProps = {
    id: '1',
    name: 'Product 1',
    description: 'Product 1 description'
}

productOne.name = 'Produc One';

console.log(productOne)