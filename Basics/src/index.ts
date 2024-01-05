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
function CalcTax(num: number) {
	// unused parameter can be losely or tightly catched under the tsconfig under
	// type-checking: noUnusedParameters = false/true
	// noUnusedLocals is for unused local variable
	if (num < 5000) {
		return num * 1000;
	} else {
		return num * 500;

		// if we remove this else block, it will underline the type set for the main funtion. This is because of implicit return that occur when num !< 5000. It return undefined. To keep this in-check, configure the tsconfig:noImplicitReturns=true
	}
}
console.log(CalcTax(7000));

// OBJECTS
// declaration:
let Human: { id: number; name: string } = { id: 1, name: "John" };
// The Human object can only accommodate the shape defined in the type-parameter
// To make a property optional, use ? e.g
let Human2: { id: number; name?: string } = { id: 1 };
// Avoid this as iit makes no sense

// Modifiers for parameters
//  Readonly: If you want to prevent the value of a param from being changed
let Human3: {
	readonly id: number;
	name?: string;
	// How to initialize methods. If not assigned a value, the object name will be underlined
	retire: (date: Date) => void;
} = { id: 1, retire: (date: Date) => console.log(date) };

// ALIASES
// declaration of the global type aliase
type Employee = {
	readonly id: number;
	name: string;
	retire: (date: Date) => void;
};
// use the template in any object
let Segun: Employee = {
	id: 1,
	name: "Segun",
	retire: (date: Date) => console.log(date),
};

// UNION
// This allows us to set diffeent types to a particualr variable. Let say a variable can either store a number or alphabets.
function ConverWeight(weight: number | string): number {
	if (typeof weight === "number") {
		return weight * 2;
	} else {
		return parseInt(weight) * 2;
	}
}
console.log(ConverWeight(20));
console.log(ConverWeight("20kg"));

//  INTERSECTION
// Here we use the AND annotation which means the variable must have all the specified types.
// For example:
type FatherTrait = {
	name: string;
	age: number;
	haveWife: boolean;
	noOfKids: number;
	ownAhouse: boolean;
};
type WorkTrait = {
	gradeLevel: string;
	salary: number;
	workplaceName: string;
};
// Now these two types can be assigned to one person who is a man
type Man = FatherTrait & WorkTrait;

// We can now assign the type Man to any man's variable
let maleUser: Man = {
	name: "John",
	age: 20,
	haveWife: true,
	noOfKids: 20,
	ownAhouse: true,
	gradeLevel: "ABO",
	salary: 500_000,
	workplaceName: "Stanbic IBTC",
};

// LITERAL TYPE
// This means that we can set a literal value we expect for a variable just the way we assign types to them.
// For example:

type Metrics = "inch" | "cm";
let Measurement: Metrics = "cm";
// Any value outside inch and cm will be rejected

// NULLABLES
// In some instance you might want to use a value if available and display a generic text if not available.
// For instance in the Hello, User on most app
function GreetUser(user: string | null) {
	// the null here signifies that the parameter can be passed or not into the function call
	if (user) console.log("Hello " + user);
	else console.log("Hola Alien");
}
GreetUser(null);
GreetUser("Segun");

// OPTIONAL CHAINING
//  there are many cases where you might want to call a variable that might not be available. Rather than using the long if statemement to catch the error, you can use optional chaining
// This works for properties. eg.
type Customer = {
	birthday?: Date;
};

function getCustomer(id: number): Customer | null {
	return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// if we try to print the customer customer birthday, it will underline the customer because it might actually be null
// console.log(customer.birthday);
// To rectify this, we need to specifically let it only run if the value is not null
console.log(customer?.birthday?.getFullYear());
