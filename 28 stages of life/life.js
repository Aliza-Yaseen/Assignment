"use strict";
// if the person is less than 2 years old, print a message that the person is a baby.
let age = 65;
if (age < 2) {
    console.log('The person is a baby.');
}
// if the person is 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("the person is a toddler.");
}
// if the person is 2 years old but less than 4, print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("the person is a kid.");
}
// if the person is 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log("the person is a teenager.");
}
// if the person is 20 years old but less than 65, print a message that the person is a adult.
else if (age >= 20 && age < 65) {
    console.log("the person is a adult.");
}
// if the person is 65 years old and older than that, print a message that the person is a older.
else if (age >= 65) {
    console.log("the person is a older.");
}
