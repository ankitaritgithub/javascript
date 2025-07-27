// Arrow Function---- 
/* this keyword basically its tells us the current context
* Basically to understand the Arrow function we have to understand the -- this keywords
* This function --- retun the current context koa refer karta  hai --context matlab simple value

*/

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // we have use the this.username to refer the current context that is place inside the parent elemt
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


/* we are getting this { } empty parenthesis if we do the console.log(this) outside at the global of function
 but when we do that same things inside the browser then we get  window and sort of 
  why it is :  Earliar javascript excute only  ways is through the engine
  know  abhi humnea ush engine koa nikal kar ushea alag alag name diya some we say node some dino and etc so know we have (standalone engine)
  so inside the browser we have (window object) that is why we can access and capture kar patea hai global object koa
  * and inside the Node we have empty {} object
  * And inside the function if we try to do console.log -- then we have lot of valure--- so we can say that a lot of value placed inside the this 
  * function chai(){
    console.log(this.username);
    }

    chai()
  *  basically we get that same global value inside that this

*/

function chai(){
    let username = "hitesh"
    console.log(this.username);
}

chai()


// Note: the conclusion is that This function object kea under hi kamm kar raha  hai but Function kea under kaam nahi kar raha hai



//  how to decalred the function espacially throughthe arrow function ***

const chai = function () {  // through the decalred function
    let username = "hitesh"
    console.log(this.username);
}

const chai =  () => { // throughthe arrow function
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } // basiac arrow function basically its is called as a explicite return( we have to use and put the return keyword)

console.log(addTwo(3, 4)) // Basic Arrow function

// const addTwo = (num1, num2) =>  num1 + num2 // implicit return arrow function --in one line
// const addTwo = (num1, num2) => ( num1 + num2 ) // curly bracese mai (return keyword likana hoga) and without curly braces mai return keywords nahi likhana hoga

const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3, 7))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()