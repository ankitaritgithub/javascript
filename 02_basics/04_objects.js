// const tinderUser = new Object()  //  decalred object -- singleton object

// 1. A ways to decalred and access the object the object and get it access
const tinderUser = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

// 2. Another ways to decalred  and access the object the object and get it access

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

// to merze the object  and combined them we have to use this ways belows

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj5 = { obj1, obj2 }
console.log(obj5)
const obj6 = Object.assign({}, obj1, obj2, obj4)
console.log(obj6)


// we prefer to usde this  --spread operator

const obj3 = {...obj1, ...obj2}
console.log(obj3);



//  when database sea value come
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]


//Property-- objects
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));  // basically here what happening that is we are taking all the keys and put in the array
console.log(Object.values(tinderUser)); // same goes to value basically it also takes all the value and place it as array
console.log(Object.entries(tinderUser)); // to get the array inside the array --basically fpr each property element convert it into the array
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //from the  object that is is that property exist or not please

//************* */ Object destucturing
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

course.courseInstructor

const {courseInstructor} = course  //  try to  prefer to use that to destructure and get that
const {courseInstructor: instructor} = course  // hum courseinstructor name to modify kar instructure dea acccess kar rahea hai

console.log(courseInstructor);
console.log(instructor);


// Objects destructuring and JSON API
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
