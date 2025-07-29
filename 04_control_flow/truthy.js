const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false' -- basically the value that we get inside the atring are truly value, " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
//  basically this is val1 = 5 ya 10 this ?? is ya basically ya toh yeh assign karoa ya toh 10 this we are using when 
//  we are doing or using the database basically we  dont know what value we are getting is it null or or else the actual vale
/**
 * that is why in val1 case it is giving 5 value
 * but in val2- case we are getting 10 value  (basically it check agar value aai hai toh use karea varna given value assign  kar deata hai)
 * and in val3- case we are getting the undefined value (same logic)
 * this is for null and undifen operator
 * val1 = null ?? 10 ?? 20 in this case--- the first value is going to assign 
 */

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);


/* Nullish Coalescing Operator (??) and terniary operator  are different from each other
from each other
*/

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")