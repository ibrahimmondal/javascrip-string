const fruit = [
    "apple",
    "mango",
    "banna",
    20,
    40,
    true,
    // {
    //     name: "ibo",
    //     age: 20,
    // }
];
console.log(fruit);
// console.log(fruit[6].name);

// push add kora
// fruit.push ("oreng");
// console.log(fruit);


// length koto gulo a6a 
// console.log(fruit.length);

//  pop remove kora last thak
// fruit.pop ();
// console.log(fruit);

// shift ar kaj holo remove from first 
// fruit.shift();
// console.log(fruit);

// unshift add from first position 
// fruit.unshift("pineapple");
// console.log(fruit);

// concat add to propaty 

// let moreFruit = ["ibo", "tani"];
// let newFruit = fruit.concat(moreFruit);
// console.log(newFruit);

// slice 
// let animals = ["dog", "cat", "lion", "cow", "zebra"]

// console.log(animals.slice(2, 5));

// // splice 

// let splice = animals.splice(2, 0, "ljnb", "djbkg");
// console.log(animals);

// // sort a b c d e f 

// animals.sort();
// console.log(animals);

// // reverse 
// animals.reverse();
// console.log(animals);


const language = ["html", "css", "javascript", "php", "tailwinecss"]
console.log(language);
console.log(language[2]);
language[3] = "ibo";
language[4] = "tania";
console.log(language.toString());
console.log(language.length);
language.pop


const x = [1, 2, 3, 4];
const y = [5, 6, 7, 8];
const p = [9, 10, 11, 12];
const z = x.concat(y, p)
console.log(z);
