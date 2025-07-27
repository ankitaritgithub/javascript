// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// comparison with two different datatype - somtimes it give correct by converting that one datatype as per other value but 
// somtimes it woulnt give correct answer  so its recomended to not to do that below comparison is 
// console.log("2" > 1); // true
// console.log("02" > 1); //true



//comparison convert null to a number traeted it as 0
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true


//  the reason is thar eqality operator == and comparison operator work differentlt
//  comparison convert the null as number and treates as 0 and  that  is why 3 is tru eand 1 and 2 is false

console.log(undefined == 0); // false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// ===  <-  check value along with datatype stcklly ---- strick check

console.log("2" === 2);