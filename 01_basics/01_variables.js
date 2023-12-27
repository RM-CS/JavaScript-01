const accountId = 144553
let accountEmail = "rmcs@google.com"
var accountPassword = "12345"
accountCity = "Delhi"

let accountState; //undefined

// accountId = 2 //not allowed
/* 
    Prefer not to use var keyword
    because of issue in block scope and functional scope
*/

accountEmail = "rm@gmail.com"
accountPassword = "54545"
accountCity = "Jaipur"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])