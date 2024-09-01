// 1. Answer:
let sentence = "My Name Is Ibrahim"
let isTrue = sentence.search("Hello");

if (isTrue == -1) {
    console.log("Hello does not exist on the sentence")
} else {
    console.log("Hello is in there");
}


// 2. Answer:

// a.
let nam = "hello, ";
console.log(nam.concat("Sarah"));

// b. 
let text = "hello,";
let user = prompt("enter text");
let output = text.concat(" ", user.trim());
console.log(output);
// ========================================

// 3. Answer:

let pLanguage = "Python";
let userName = "ibrahim";
let year = 2018;
let output2 = `${userName}, you have been coding in ${pLanguage} since ${year}.`
console.log(output2);
// ========================================

// 4. Answer:

let emailAddress = "ibrahimmondal750@gmail.com";
let checkFor = "@gmail.com";
let searchGmail = emailAddress.toLowerCase().includes(checkFor.toLocaleLowerCase());
console.log(searchGmail);

if (searchGmail === true){
    console.log(emailAddress, "is a valid gmail");
} else {
    console.log(emailAddress, "is not a valid gmail");
}

// =======================================


// 5.Answer:
let digit = 10;
let number = 133;

if(number % digit === 0) {
    console.log("The number is divisile by 10");
} else{
    console.log("The number is not divisile by 10");
}


// 6.Answer

let mainNumber = 7;
if(mainNumber  % 2){
   console.log("The number ia even");
}else{
   console.log("The number is odd");
}

// 7

const char = 10;
if(typeof char == "string"){
    console.log("The given value is String");
} else{
    console.log("the given value is number");
}

// =======================================
