// Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
// a. Remove the first company from Array
// b. Remove Uber & add Ola in its place 
// c. add Amazon at end

let companies = [ "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(`Before companies : ${companies}`);
companies.shift();
companies.splice(1, 1, "Ola");
companies.push("Amazon");
console.log(`After companies : ${companies}`);