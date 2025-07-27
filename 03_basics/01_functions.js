//  function is the code that we have written ushea humnea ek package mai bandh kar diya and 
//  hum jaha chale  waha ushea ush kar sakate hai 

// ***********1********* how to  initliaze and pass and acess and call the function

function sayMyName(){  // here is function initiallization (function keyword)-- (along with functionName-- sayMyName)
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
sayMyName() // this is reference basically excution



// ************How to pass the number number inside the function in calculation format for add to cards method**********2**********************


function addTwoNumbers(number1, number2){ // (number1 , number2) this we called as a paramertes -- at initialllization section

    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) // and this (3, 5) we called it as arrugement -- basically when we used to call the function 

console.log("Result: ", result);


// function koa kaha value retutn karoa ushnea kar diya but kaha store karoa voh nahi bataya

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}


loginUserMessage("hitesh") // 1.  function koa kaha value retutn karoa ushnea kar diya but kaha store karoa voh nahi bataya

console.log(loginUserMessage("hitesh")) // 2. now  ab joa value store hua hai ushea mainea print kanea instruction diya hai thenvoa ab print hoga
// console.log(loginUserMessage(()) // 3. if no value has been passed then we get the undefined result in print console
console.log(loginUserMessage("hitesh"))

// *************************4*****************

/*  this ... we called it as a rest opertaor basically 
as per the use cases we name it  now for current this scenerio we called it as Rest operator please
 basically Rest means  -- this 3 dot (...)  basically asumble all the number that comes in that please
  and it will Return number in the array
*/


//Method 1  to use the Rest Operator generaflly we use in add to card concept section

function calculateCartPriceForinfinitNumber(...num1){
    return num1
}

console.log(calculateCartPriceForinfinitNumber(400,500,9000))


// 2. Method : sometime we prefer to use it like this  below basiocally here 1 input value goes to val1 and same goes to val2 and then rest all goes  niside the ...num1

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

// ****************How to pass the object inside the function********************5**********************

//1.Method  initiallizing the object to pass inside the function
const user = {
    username: "hitesh",
    prices: 199
}

//  Basically here we are passing the above initlize object inside the function
function handleObject(anyobject){ // here we have pass the  Generaic name
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // here we dont know ki kya aanea wala hai inside the {} so we have taken the anyobjectof username and price using the dot
}
handleObject(user) // call the object

//2. Method (To directly init and pass the object) --we can directly pass the object like the below  using  inspite of pas the above ways
handleObject({
    username: "sam",
    price: 399
})


//  How to pass the array inside the function *************7**********

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));