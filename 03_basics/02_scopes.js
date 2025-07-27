// scope start with three things( let, var and const)
/**
 * here why we have bring the let  we  the var is properly working basically it is because of for the block  it is not working  so for that they bring the let
 *  so what happen is {} this curly bracses we called it as a scope this we have seen in many area like array, object and many more but at object we called it as a (object decalartion)
 * Basically problem tab ki hai jab basically humnea
 * var c = 30 --- this is for the if condition--- this is we called as a (Global scope)
 * if (true) {
    let a = 10
    const b = 20
    var c = 30 
} as per the logic all the value that is inside the is only access that because we haven't use this outside and or we can say we haven't declared or init 
 console.log(a); we are getting error their it says that we cannot access
 console.log(b);  we are getting error their it says that we cannot access
 console.log(c);  but here we are not getting error their we are gettingthe value which is inside the function
 * now the problem is thatif mutiple devloper are working then it create a keosh dubbing and  all 
 * and even if you initilize it above also then also you will get the inside value only 
 * And This if(){} -- is called (Block scope)  
 * the block scope  cannot be acessible outside of that but Global scope elemnt is acess 
 */


//   Note : Global scope is different at the browser environment and different at the node environment



//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


// nested Scope********
/**
 * This  we called it as a (Closer Element) basically which means child function can access the parent elemt but parent can not access the elemt that are inside the child scope from the out side of the parent
 */


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){ // here addTwo this is called as a expression
    return num + 2
}

// we get error because we are doing hosting decalartion sea pahlea