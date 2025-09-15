interface CursoProps {
    id: string;
    name: string;
    price: number;

    // Definir apenas a funcao e o que ela deve esperar e retornar
    promotion: (price: number) => void

}

function ShowPromotion(price: number): void {
    console.log(`por função: Promoção no curso por apenas ${price} reais!`);
}


const newCourse: CursoProps = {
    id: '1',
    name: 'TypeScript',
    price: 10,
    promotion: (price: number): void => {
        console.log(`Função anonima:Promoção no curso por apenas ${price} reais!`);
    }
}

console.log(newCourse.promotion(350));


interface SumProps {
    (a: number, b: number): number;
}

let sumNumbers: SumProps = (a: number, b: number): number => {
    console.log('Resultado: ', a + b);
    return a + b
}

const result = sumNumbers(10, 20);

console.log('result: ', result);

