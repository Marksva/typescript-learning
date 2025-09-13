
let numbers: number[] = [1, 2, 3, 4, 5];
// let numbers: Array<number> = [1, 2, 3, 4, 5];
// let number: (string | number)[] = [1, 2, 3, 4, 5, "6"];

// let movies: string[] = ["Star Wars", "Matrix"];
// let movies: Array<string> = ["Star Wars", "Matrix"];
let movies: Array<string | number> = ["Star Wars", "Matrix"];

numbers.push(6);
movies.push("Ted");

console.log(numbers);
console.log(movies);
