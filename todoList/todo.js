// var clicked = 1;
// var count = 1;
// function addToList() {
//   count++;
//   if (count > 9) {
//     const ht = document.getElementById("div");
//     ht.style.height = "100%";
//   }
//   var input = document.getElementById("inputItem");
//   let para = document.createElement("p");
//   if (input.value === "") {
//     alert(`Please Enter today's task`);
//   } else {
//     para.innerText = input.value;
//     let container = document.getElementById("items");
//     container.append(para);
//     input.value = "";
//   }

//   para.addEventListener("click", () => {
//     if (clicked % 2 !== 0) {
//       para.style.textDecoration = "line-through";
//       para.style.background = "red";
//       para.style.color = "white";
//     } else {
//       para.style.textDecoration = "none";
//       para.style.background = "#f4f4f4";
//       para.style.color = "#644ee6";
//       para.style.borderWidth = "8px";
//       para.style.borderLeftStyle = "solid";
//     }
//     clicked++;
//   });
//   para.addEventListener("dblclick", () => {
//     para.style.display = "none";
//   });
// }
// let count = 0;
let clicked = 1;
let inputtext = document.getElementById("inputItem");
let btn = document.getElementById("btn");

const writeTask = () => {
  console.log('clicked');
  if(localStorage.getItem('task') === null)
  {
    let jsonarray = [];
    jsonarray.push(inputtext.value);
    let jsonarrobj = JSON.stringify(jsonarray);
    localStorage.setItem('task',jsonarrobj);
  }
  else
  {
    let jsonarray = JSON.parse(localStorage.getItem('task'));
    jsonarray.push(inputtext.value);
    localStorage.setItem('task',JSON.stringify(jsonarray));
  }
  
}

btn.addEventListener('click',writeTask);

