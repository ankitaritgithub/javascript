// const tinderUser = new Object()  //  decalred object -- singleton object

// 1. A ways to decalred and access the object the object and get it access
const tinderUser = {} // non singleton object

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


// we prefer to usde this 

const obj3 = {...obj1, ...obj2}
console.log(obj3);


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
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Object destucturing
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
