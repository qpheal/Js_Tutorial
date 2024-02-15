const age = 18;

//always use the 2 equal to instead of take
// the 3 checks for both data datatype and equivalence
/*
if ( age === 18){
    console.log("You can vote one person")
} else if (age > 18){
    console.log("You can vote two people")
}else {
    console.log("You cant vote")
}
*/

const number = 20

if (number % 2=== 0) {
    console.log("Number is even")
} else {
    console.log("Number is odd")
}


//check for leap year

const year = 2024
if (year % 4 === 0 && year % 100 !== 0){
    console.log("It is a leap year");
} else {
    console.log("It is not a leap year")
}