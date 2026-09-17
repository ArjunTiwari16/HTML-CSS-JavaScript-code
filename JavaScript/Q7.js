/* For a given array with price of 5 items -> [250,645,300,900,50]
   All items have an offer of 10% off on them. Change the array to store final 
   price after applying offer. */

   let price = [250,645,300,900,50];

   console.log("Before applying 10% offer, price off item is :");
   for(let index in price){
    console.log(`price at index ${index} = ${price[index]}`);
   }

   //updation loop
   for(let i=0;i<price.length;i++){
       price[i] = price[i] - price[i]/10;
    }
    
   console.log("After applying 10% offer, price of item will be :");
   for(let el of price){
    console.log(el);
   }