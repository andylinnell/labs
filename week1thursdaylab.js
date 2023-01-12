//write a for loop that outputs "I will never give up" 10 times. Log your results

for(let i = 0 ; i < 10; i++){
    console.log("I will never give up");
}

// Create a function that returns the number of vowels in a given string. log results

const vowels= ["a","e","i","o","u"]

function countVowels (anArray) {
    let numVowels = 0
    for (let i = 0; i < anArray.length ; i++) 
        
        if (vowels.indexOf(anArray[i]) >= 0){
            numVowels++
    }
    return numVowels;
}
console.log(countVowels("here are some words"))