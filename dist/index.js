"use strict";
let sales = 12345675678;
console.log(sales);
function render(document) {
    console.log(document);
}
let num = [1, 2, 3, 4];
let str = ["1", "2", "3"];
let tup = [1, "number"];
tup.push(1);
let Sizes = "L";
console.log(Sizes);
function CalcTax(num) {
    if (num < 5000) {
        return num * 1000;
    }
    else {
        return num * 500;
    }
}
console.log(CalcTax(7000));
let Human = { id: 1, name: "John" };
let Human2 = { id: 1 };
let Human3 = { id: 1, retire: (date) => console.log(date) };
let Segun = {
    id: 1,
    name: "Segun",
    retire: (date) => console.log(date),
};
function ConverWeight(weight) {
    if (typeof weight === "number") {
        return weight * 2;
    }
    else {
        return parseInt(weight) * 2;
    }
}
console.log(ConverWeight(20));
console.log(ConverWeight("20kg"));
//# sourceMappingURL=index.js.map