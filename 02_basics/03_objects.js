/* Object can be declared in two ways
  1. Literals
  2. constructors

And their is another concept for singletons  which means that :-
 if we try to make any kind of constuctor on which we are making then a singleton  object gets created -- yeh apnea tarah ka ek hi object hai 
  and agar hum dhusari tarh sea banatea hai then voa singleton object nahi hoata hai
  in short summary   ---- if we try to make through literals then singletons nahi banega 
  leakin agar hum construtor ki tarah declared karegea then singleton baneaga
*/

// singleton 
// Object.create  --- this is method we called it to declared  through constructor
// *******************************************
// object literals ---- (keys: values) -- decaration

const mySym = Symbol("key1") // how to initiallise, decalred and access a symbole and gets  it access in object 


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",  // decalred  as symbole that particular keys value of sybole
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])  // to access the symbole  from object

// to do the modification the object elemts by using then keys values
JsUser.email = "hitesh@chatgpt.com"
// if you want to noboby can changes that particular object make  that object  keys freez
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

// use this  when jabbhi humea same object koa refence karna hai
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());