const accountId = 144553 //This cannot be changed once assigned.
// let accountEmail = "maitrik2006.kaushik.morni@gmail.com" // Can be used when there is a scope of change in value of variable.
var accountPassword = "12345" //Note 1 
accountCity = "Jaipur" //Can be written in this way but avoid because this is a worst way of doing a thing.

let accountState; //Variable can be declared in this way.

// accountId = 224896
accountEmail = "Kritika@gmail.com"
accountPassword = "4296"
accountCity = "November123"

console.log(accountId);

console.table([accountEmail, accountId, accountPassword, accountCity])

/* 
Note 1 
Although both let and var are same but prefer not to use var because of issue in block scope and functional scope.
*/

