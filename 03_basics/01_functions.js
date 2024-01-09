function sayMyName(){
    console.log("R");
    console.log("M");
    console.log("C");
    console.log("S");
}
// Reference
// sayMyName

// Execution
// sayMyName()

// keyword function_name(parameters)

function addTwoNum(num1, num2){
    // console.log(num1 + num2);

    // let result= num1 + num2
    // return result

    return num1 + num2
}

// function_name(arguments)

// addTwoNum() //NaN
// addTwoNum(3, 4)  //7
// addTwoNum(3, '4')  //34
// addTwoNum(3, 'a')  //3a
// addTwoNum(3, null)  //3

const result = addTwoNum(3, 5)
// console.log("Result: "+ result)

function loginUserMessage(username = "default user"){
    // if(username === undefined){
    //     console.log("Please enter username")
    //     return
    // }
    if(!username){
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`   
}

console.log(loginUserMessage("RMCS"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage()) //undefined

function calculateCartPrice(val1, val2, ...number1){
    return number1
}

console.log(calculateCartPrice(200, 400, 600, 1200));
const user= {
    username:  "RM-CS",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user);
handleObject({
    username:"Maya",
    price: 399
});


const myNewArray = [200, 500, 600]

function returnSecondVal(getArray){
    return getArray[1]
}

// console.log(returnSecondVal(myNewArray));
console.log(returnSecondVal([300, 700, 600, 800]));