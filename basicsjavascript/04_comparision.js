// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // false


//  the reason is thar eqality operator == and comparison operator work differentlt
//  comparison convert the null as number and treates as 0 and  that  is why 3 is tru eand 1 and 2 is false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===  <-  check value along with datatype stcklly 

console.log("2" === 2);