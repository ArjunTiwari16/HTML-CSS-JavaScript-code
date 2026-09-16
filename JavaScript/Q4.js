/* Creat a game where you start with any random game number. ask the user to keep 
 guessing the game number until the user enters the correct value. */

// let game_number = 5;
let game_number = Math.floor(Math.random() * 10) + 1;
let num = Number(prompt("Guess the number from(1-10)"));

while(num !== game_number){

num = Number(prompt("You entered wrong number, Guess again"));

if(num === game_number){
    console.log(num,"is a corret answer, Congratulation");
}

else{
    console.log(num,"is not a corret answer, Guess again");
}

} 


