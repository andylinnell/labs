// // Write a simple temperature converter. Given a temp in C. output the equivlent temp in F
// // To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.
function toFahrenheit(celcius) {
    let calc = (celcius*1.8) + 32;
    return calc; 

}
let cel = 23
console.log(`${cel}C° is ${toFahrenheit(cel)} F°`)

// // convert one currency to USD
// // 4726 yen is $11 US

function convertToUSD(rupee){
    let calc = rupee * 0.012
    return calc
}

let rup = 25307

console.log(`${rup} Rupee is $${convertToUSD(rup).toFixed(2)}US`)

// given a number of rows and colums, ouput a grid of *


function spitGrid(rows, columns) {
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let k = 0; k < columns; k++) {
            row += '* ';
                }
        console.log(row)
    }
}
spitGrid(5, 9)

// 4 create a multiplication grid for 1x1 to 10x10 using loops
function mathGrid(x, y) {
    let result = ""

    for (let i = 1; i <= x ; i++) {
        for (let k = 1; k <= y ; k++) {
        result += i * k + " "

    }
    result += "\n\n"
}
return result
}
console.log(mathGrid(10,10))

// 5 given a random string, capitlize first letter, lowercase all others and add a period

function grammar(randomstring){
    let newString = randomstring[0].toUpperCase() + randomstring.substring(1, randomstring.length).toLowerCase() + ".";
    
return newString
}
console.log(grammar("tHis iS a random String"))


// 6 given a string check if it s apalindrome

function checkPalindrome(string) {

    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

//take input

checkPalindrome("moma");


