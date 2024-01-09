// {} //scope (function, if and else)

// var c = 300
let a = 300

if(true){                                  // _
    let a = 10                             //  |
    const b = 20                           //  |-> Block scope
    // c = 30                              //  |
  //console.log(`Inner value of a: ${a}`); //  |
}                                          // _|



// console.log(`Outer value of a: ${a}`); 
// console.log(b); 
// console.log(c);

function one(){
    const username = "rm-cs"
    function two(){
        const website = "hostinger"
        // console.log(username);
    }
    // console.log(website); //error because website variable is in two function block which can't be access outside function
    two()
}
one()

if(true){
    const username="rm-cs"
    if(username === "rm-cs"){
        const website = "facebook"
        // console.log(username + " " + website);
    }
    // console.log(website);
}

// console.log(username);


console.log(addOne(5))
function addOne(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}

