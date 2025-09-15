interface GameProps {
    readonly id:string; 
    name: string; 
    description: string;
    platforms:string[];
}

const left4dead: GameProps = {
    id: '1',
    name: 'Left 4 Dead',
    description: 'Survival Horror',
    platforms: ['Windows', 'Linux', 'Mac']
}

// console.log(left4dead);

// interface DLC extends GameProps {
//     newContent: string[];
// }

// const left4DeadDLC: DLC = {
//     id: '2',
//     name: 'Left 4 Dead 2',
//     description: 'Survival Horror 2',
//     platforms: ['Windows', 'Linux', 'Mac'],
//     newContent: ['New Zombie', 'New Zombie 2']
// }

// console.log(left4DeadDLC);

interface DLC extends GameProps {
    gameOriginal: GameProps;
    newContent: string[];
}

const left4DeadDLC: DLC = {
    id: '2',
    name: 'Left 4 Dead 2',
    description: 'Survival Horror 2',
    platforms: ['Windows', 'Linux', 'Mac'],
    newContent: ['New Zombie', 'New Zombie 2'],
    gameOriginal: left4dead
}

console.log(left4DeadDLC);