// const year = 3546;
// const remainder = year % 4;
// if (remainder == 0){
//     console.log('Your year is a leap year');
// }
// else {
//     console.log('Your year is not a leap year');
// }

// function isLeapYear(year){
//     const remainder = year % 4;
//     if (remainder == 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const check = isLeapYear(2000);
// console.log(check);

// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0  != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = checkLeapYear(3012);
console.log(year);

