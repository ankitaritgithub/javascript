// array

const myArr = [0, 1, 2, 3, 4, 5]

/* 
 features of array:- array is object
 *** 1. collection of multiple items in single  variable mai rakh sakatea hai 
     2. array can be same and different type 
     3. javascript arrays are resizeable once declared  w3e can decrease and increase
     4. mixes of  multiple datatype
     5. arrray indexing start with 0 and we can access elemnts through indexing
     6. array --- shallow copy banata hai -- means whatever changes we will do that same xchanges we get to see in the original copy
       ----- Deep Copy -- means the copy that do not shared the smae referenece point
    7. javascript declaration--- 
              1. const myArr2 = new Array(1, 2, 3, 4)
              2. const myArr = [0, 1, 2, 3, 4, 5]
              3. const myHeors = ["shaktiman", "naagraj"]
*/

const myHeors = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

// 1. javascript method ---------push, pop

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// 2. javascript method ---------unshift, shift

myArr.unshift(9) // insert the array basically to add the elements in the start 
myArr.shift() // remove the unshift added elments from the start of the array

console.log(myArr.includes(9)); // we get the result in boolean
console.log(myArr.indexOf(3));  // we get the result in boolean


// and we try to access the value that are not exist then for this case it will give the value same 
// for all not existing element that is (-1)

// 3. javascript method ---------join

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

//As a result we get to see the same result so we get to see the different in the type of 
console.log(typeof(myArr))
console.log(typeof(newArr)) // convert the  array elements in the string along with join the element


//4.  javascript method ---------slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // last  3  elemts not get to include
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// difference
/* 1. silce operation doesnot manipulates the original array.  but splice operation manipulates the original the originhal array
   2. silce does not include the lastr elements but splice include the last elemnts while providing the final result
   And along with splice operation along with include do manipulation in the original array and remove the splice saked elements from the original array*/