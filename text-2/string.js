console.log("hrllo ja");
var a = 10;
var b = 20;
var c = a + b;
console.log(c);

// let names = "hello";
// let user = prompt("Your Text");
// let output = names.concat(" ", user.trim())
// // console.log(output);


let pLanguage = "javascrip";
let userName = "ibo";
let year = 2002;
let output2 = `Do You Know ${pLanguage} is a popular programming language It was introuded in the your of ${year}`;
// console.log(output2);
let text = "ibotania";
console.log(text.lastIndexOf("t"));
// console.log(text.charAt(4));

let search = "hello i am ibrahim mondal";
console.log(search.includes("am"));

let include = "hello i am ibrahim mondal";
let include1 = "HELLO";
console.log(include.search("am"));

console.log(include.toUpperCase());
console.log(include1.toLowerCase());

let khatun = "hello i am ibrahim mondal. i am a web designer";
console.log(khatun.substring(5, 18) + "....");

let khatu = "hello i am ibrahim mondal. i am a web designer";
console.log(khatu.slice(-15, -8));

let age = 25;
if (age >= 20) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}






// let sentence = "    Bangladesh is an      Independent country    ";
// // console.log(sentence);

// //trim - to remove odd spacing
// // console.log(sentence.trim());

// // concatenation - join two or more strings
// let greeting = "Good Morning";
// // let user = prompt("Enter your name: ");
// // let output = greeting.concat(" ", user.trim());
// // console.log(output);

// // template literals - ``
// let pLanguage = "javascript";
// let userName = "Ahmed";
// let year = 1996;

// let output =
//   "Do you know" +
//   pLanguage +
//   "is a popular programming language and it was introuded in the year of " +
//   year;

// let output2 = `Do you know ${pLanguage} is a popular programming language.

// It was introuded in the year of ${year}`;

// // console.log(output2);

// // index and length
// let text = "Hello World Work";
// console.log(text.length); // length - 11

// console.log("index of Work:", text.indexOf("Work")); // index - if the result is -1 then the outcome is not found
// console.log(text.indexOf("lo")); // index - 6
// console.log(text.lastIndexOf("l")); // index - 9 - strat from last index

// console.log(text.charAt(6)); // W
// // console.log(sentence.trim().length);

// //includes
// let include = text.includes("Hello");
// console.log(include); //true or false

// // search
// let search = text.search("Work");
// console.log(search); // 12

// // uppercase
// let upper = text.toUpperCase();
// console.log(upper); // HELLO WORLD WORK

// // lowercase
// let lowercase = text.toLowerCase();
// console.log(lowercase); // hello world work

// // substring - extract part of a string

// let quote = "Life is short! Enjoy it";
// let lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
//       quibusdam, assumenda eligendi tenetur, temporibus tempora sint eveniet
//       animi magni quas ex nulla accusantium molestias autem, veritatis porro
//       quod consequatur pariatur? Blanditiis iusto nobis aliquam expedita
//       sapiente cupiditate totam natus necessitatibus!
//     `;
// // let indexof = quote.indexOf("r");
// // console.log(indexof);
// // let substring = quote.substring(4, 11);
// // console.log(substring);

// let shortText = lorem.substring(10, 40);
// console.log(shortText + ".... Read more");

// //slice - slice takes negative index as well
// let word = "Time Flies";
// let sliceText = word.slice(-8, -1);
// console.log(sliceText + ".. Read more");