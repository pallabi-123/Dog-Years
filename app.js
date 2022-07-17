// how old I am
let myAge = 18;

// early dog years
var earlyYears = 2;
earlyYears *= 10.5;

// setting the value for later years because we already accounted for the last two years.
let laterYears = myAge - 2;

// Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);

// value representing my age in dog years.
var myAgeInDogYears=earlyYears + laterYears;

// variable holding my name as lowercase
var myName = 'Pallabi'.toLowerCase();

// printing as my name, my years and my years represented in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)



