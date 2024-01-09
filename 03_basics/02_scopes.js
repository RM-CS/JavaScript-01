// {} //scope (function, if and else)

// var c = 300
let a = 300

if(true){                                  // _
    let a = 10                             //  |
    const b = 20                           //  |-> Block scope
    // c = 30                              //  |
    console.log(`Inner value of a: ${a}`); // _|
}                   



console.log(`Outer value of a: ${a}`); 
// console.log(b); 
// console.log(c);