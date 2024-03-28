// Test with equality & enequity with strings

let moon = 'night';
let sun = 'day';
console.log(moon === sun);

let star = 'mars';
let ice = 'water';
console.log(star !== ice);

// USING_THE_LOWER_CASE_FUNCTION

const mixedCaseString = 'Helloworld';
console.log(mixedCaseString.toLowerCase() === 'Helloworld'); 
// const learnCss = 'hey world';
// console.log(learnCss.toLowerCase() !== 'hey world');


// NUMERIC TEST, LESS THAN GREATER THAN, EQUITY & ENQQUALITY AND MORE....
let num1 = 10;
let num2 = 5;

console.log(num1 == num2);
console.log(num1 !== num2);
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);


// USING "AND" & "OR" OPERATOR.
let condition1 = true;
let condition2 = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);

// TEST WETHER AN ITEM IS IN A ARRAY.
let fruit_name = ['apple' , 'mango' , 'orange' , 'banana' , 'grapes']
console.log(fruit_name.includes('apple'));

// TEST WETHER AN ITEM IS NOT IN A ARRAY.
let fruits_name = ['apple' , 'mango' , 'orange' , 'banana' , 'grapes']
console.log(fruits_name.includes('pineapple'));