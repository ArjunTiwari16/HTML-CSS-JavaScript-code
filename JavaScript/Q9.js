//Create a function using the "function" keyword that takes a String as an argument &
// return the number of vowels in the String;


let str = prompt("Eneter the word for counting vowels in it");

function countVowels(str){
    let count = 0;
    for(let char of str){
        // console.log(char);
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
            count++;
        }
    }
    console.log(`Number of Vowels in ${str} is : ${count}`);
}

countVowels(str);

//-----Same task with arrow function-----
console.log("using arrow function");

const arrowcountVowels = (str) => {
     let count = 0;
    for(let char of str){
        // console.log(char);
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
            count++;
        }
    }
    return count;
}

console.log(`Number of Vowels in ${str} is : ${arrowcountVowels(str)}`);