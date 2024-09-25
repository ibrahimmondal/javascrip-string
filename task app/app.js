// selectors
const taskFrom = document.getElementById("task-form");
const submit = document.getElementById("submit");
const taskInput = document.getElementById("task-input");

function createTesk() {
    let inputValue = taskInput.value;
   console.log(inputValue);
   if (inputValue){
    console.log(inputValue);
   } else {
    alert("pleace enter a text")
   }
}
createTesk();