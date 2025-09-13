// type any | unknown not recommended

let product: any; 

product = 'A';
product = 1;

product = {
    name: 'A',
    price: 10
}

console.log(product);
