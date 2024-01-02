// Config explanation
// Checking category
// - noUnusedParameters:  when set to true prevent declaring a variable without uing
// - noImplicitReturns: when set to true ensures that when a condition is not met, it shouldn't be an error

let sales: number = 12_345_675_678;
console.log(sales);

// Any type
function render(document: any) {
	console.log(document);
}
// To ensure the removal of the error, you can either pass the type any to the parmeter or configure the tsconfig.json file
// Under checking, set noImplicitAny to false

// ARRAY
let num: number[] = [1, 2, 3, 4];
let str: string[] = ["1", "2", "3"];

// TUPLES
let tup: [number, string] = [1, "number"];
tup.push(1);

//  ENUMS
const enum Size {
	Small = "S",
	Medium = "M",
	Large = "L",
}
let Sizes: Size = Size.Large;
console.log(Sizes);

// FUNCTIONS
function CalcTax(num: number): number {
	if (num < 5000) {
		return num * 1000;
	} else {
		return num * 500;
		// if we remove this block, it will underline the type set for the main funtion
	}
}
