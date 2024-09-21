// let car =["BMW", "TATA", "Volvo", "Toyota", "Tesla"];

// car.push("ibo");

// // for loop

// for (let i = 0; i < car.length; i++){
//    console.log(car[i]);
   
// }

// for in loop 

let man = {
    name: "ibrahim",
    age: 21,
    cuntry: "india", 
}
for (let i in man){
    let capletter = i.charAt(0).toUpperCase() + i.slice(1);
    console.log(capletter + ": " + man[i]);
    
}
