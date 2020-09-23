// Name:Meadow Green
// Date:9-23-20
// Assignment: Template Literal Practice

////////////////////////Pt. 1////////////////////////
// create a var that accepts a first name as a prompt
//let firstName = prompt("please enter your first name");
let firstName = prompt(`please enter your first name`);
firstName;

// create a var that accepts a last name as a prompt

//let lastName = prompt("please enter your last name");
let lastName = prompt(`please enter your last name`);
lastName;
// Create a variable that will hold a score and a var that will hold a full name 
let score = 0;
let fullName = `${firstName}  ${lastName}`;
//var fullName = firstName + " " + lastName;

// create a var that adds the full name var and score in a message
//var scoreName = fullName + "'s score is " + score; 
let scoreName =`${fullName} 's score is ${score}`;
console.log(scoreName);
////////////////////////Pt. 2////////////////////////
//comment out the lines above then create two var's that hold numbers
let numOne = 1;
let numTwo = 2;

//create an add var that adds both vars
//var add = numOne + numTwo;
let add = `${numOne}${numTwo}`;

//console log the newly created add var
console.log(add);

//console log 3 string's using concatination that say "concatinating is easy""when using template literals,""I can even embed numbers and not have to worry about spacing!"
console.log(`concatinating is easy when using template literals, I can even embed numbers and not have to worry about spacing!`);

//console log the three strings above and add a third string that includes the add var
console.log(`concatinating is easy when using template literals, I can even embed numbers and not have to worry about spacing! ${add}`);