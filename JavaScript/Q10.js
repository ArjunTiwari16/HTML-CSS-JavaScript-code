// For a given array of number, print the square of each value using the for each loop.

let arr = [1,2,3,4];

arr.forEach((num,index) => {
    console.log(index,num*num);
});


///////////////////////////////////////////

let squareNumber = (num) =>{
    console.log(num*num);
}
arr.forEach(squareNumber);





//////////////////////////////////////////
arr.forEach(function square(num){
    console.log(num*num);
});


/////////////////////////

function square(num){
    console.log(num*num);
}
arr.forEach(square);