function filterArray(numbers, value){
// empty operator
   let number = [];
   // use circle for each elements
for (let i = 0; numbers.length > i  ; i++){
    // use operator if for check each elements and add them to massif;
    if(numbers[i] > value){
 number.push(numbers[i]);
    } 
       

    
    
}
return number;

}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]