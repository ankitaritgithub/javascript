// Immediately Invoked Function Expressions (IIFE)
/**1. if in scenrion where we dont want any kind of population  basically clearn and  clear global scope
 * 2. and If i want  that after that it get excute after that i
 *  Basically we are facing the global scope  problem ki solve karnea kea liyea
 *  and immediate function invoke karnea liyea iife ka use kartea hai 
 *  */

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// how to do with arrow function this ifie function
( (name) => { // simple iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
