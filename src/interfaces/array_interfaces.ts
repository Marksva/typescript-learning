// interface TecnologiesProps {
//     id: string;
//     name: string;
//     slug: (string | number)[];
// }

// let Tecnologies1: TecnologiesProps = {
//     id: '1',
//     name: 'TypeScript',
//     slug: ['typescript', 'js', 55]
// }

interface TecnologiesProps {
    id: string;
    name: string;
    description: string;
}


interface NamesProps {
    tecnologies: TecnologiesProps[];
}

let frontend: NamesProps = {
    tecnologies: [
        {
            id: '1',
            name: 'TypeScript',
            description: 'TypeScript'
        },
        {
            id: '2',
            name: 'JavaScript',
            description: 'JavaScript'
        }
    ]
}

console.log(frontend.tecnologies);