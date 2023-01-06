const firstName = "sharon";
const birthYear = 1999;
const job = "teacher";
const year = 2023;
const sharon = "i'm " + firstName + ', a ' + (year-birthYear) + " year old " + job;
console.log(sharon);

const sharonNew = `i'm ${firstName}, a ${year-birthYear} old ${job}`; //using backticks to avoid the + sign
console.log(sharonNew);
console.log ("Every day we wake up; \n\ We brush, \n\ We take breakfast and go to school."); //using the normal way or writing strings
console.log (`I love teaching:
Music;
Kiswahili;
How to cook and
Business`); //using string literal

const age = 15;
const isAdult = age >= 18;
//taking decisions 
if (isAdult) {
    console.log('Sarah can start her driving classes')//will be executed if the value is true
}

else{const waitYear = 18-age;
    console.log(`Sarah to wait ${waitYear} years to start driving classes`)//will be executed if the value 
}
