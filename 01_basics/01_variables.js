const accountId = 4556
let accountEmail = "priya@gmail.com"
var accountPassword = "45558"
accountCity="Hubli"
let accountState;

//accountId=2 // not allowed 
console.log(accountId);

accountEmail="pop@gmail.com"
accountPassword="4784"
accountCity="bengaluru"

/*
Prefer not to use var 
because of  issue in block scope and functional scope
*/ 

console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);