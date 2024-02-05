// function addItem1() {}
// const addItem2 = function () {};
// const createItem = (value, checked, id) => {
//   var newLi = document.createElement("div"); // create new <li>
//   var deleteButton = document.createElement("button"); // create new <button>Delete</button>
//   deleteButton.textContent = "Delete";
//   deleteButton.onclick = () => deleteItem(newLi);
//   deleteButton.classList = "btn btn-danger";
//   var checkBox = document.createElement("input");
//   checkBox.type = "checkbox";
//   checkBox.checked = checked;
//   //   console.log(checked);
//   var p = document.createElement("p");
//   p.innerText = value;
//   p.classList = "m-0";
//   checkBox.onchange = () => {
//     for (let i = 0; i < tasks.length; i++) {
//       if (tasks[i].id === id) {
//         // console.log(id);
//         tasks[i].checked = checkBox.checked;
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//         p.style.textDecoration = checkBox.checked ? "line-through" : "";
//       }
//     }
//   };
//   //   console.log(checkBox);
//   newLi.appendChild(checkBox);
//   p.style.textDecoration = checkBox.checked ? "line-through" : "";

//   var right = document.createElement("div");
//   right.classList = "d-flex gap-2";
//   right.append(checkBox, p);
//   newLi.appendChild(right);

//   newLi.appendChild(deleteButton);
//   newLi.classList = "d-flex justify-content-between align-items-center";
//   document.getElementById("root").append(newLi);
// };

// const deleteItem = (x) => {
//   x.remove();
// };

// function item(id) {
//   let obj = {
//     id: id,
//     incrimentation: function () {
//       this.id = this.id + 1;
//     },
//   };
//   return obj;
// }

function item(value, checked, id) {
  this.value = value;
  this.checked = checked;
  this.id = id;
}

class Item extends item {
  constructor(value, checked, id) {
    super(value, checked, id);
  }
  add() {
    
    var newLi = document.createElement("div"); // create new <li>
    var deleteButton = document.createElement("button"); // create new <button>Delete</button>
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => this.delete(newLi, tasks);
    deleteButton.classList = "btn btn-danger";
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = this.checked;
    //   console.log(checked);
    var p = document.createElement("p");
    p.innerText = this.value;
    p.classList = "m-0";
    checkBox.onchange = () => {
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === this.id) {
          // console.log(id);
          tasks[i].checked = checkBox.checked;
          localStorage.setItem("tasks", JSON.stringify(tasks));
          p.style.textDecoration = checkBox.checked ? "line-through" : "";
        }
      }
    };
    console.log(checkBox);
    newLi.appendChild(checkBox);
    p.style.textDecoration = checkBox.checked ? "line-through" : "";

    var right = document.createElement("div");
    right.classList = "d-flex gap-2";
    right.append(checkBox, p);
    newLi.appendChild(right);

    newLi.appendChild(deleteButton);
    newLi.classList = "d-flex justify-content-between align-items-center";
    document.getElementById("root").append(newLi);
  }
  delete(x, array) {
    x.remove();
    array = array.filter((elem) => elem.id !== this.id);
    console.log(array);
    localStorage.setItem("tasks", JSON.stringify(array));
  }
}

var tasks = [];
if (localStorage.getItem("tasks") !== null) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
}
// console.log(tasks);
tasks.forEach((element) => {
  let x = new Item(element.value, element.checked, element.id);
  x.add();
});

tasks.forEach((elem) => elem.id); // just looping (for without return)
let x = tasks.map((elem) => elem.id); // return an array
let y = tasks.find((elem) => elem.id === 1); // return an element
let z = tasks.filter((elem) => elem.id === 1); // return an array
let t = tasks.some((elem) => elem.id === 6); // return boolean
let a = "k";
let array = [{ id: "h", name: "khalil" }, { id: "a" }, { id: "l" }];
let sum = array.reduce((acc, elem) => acc + elem.id, a); // number or string

const addItem = (event) => {
  event.preventDefault();
  const value = document.getElementById("task").value; // get value from input
  let x = new Item(value, false, lastId ? +lastId + 1 : 1);
  x.add();
  var lastId = localStorage.getItem("lastId");
  //   console.log(lastId);
  let task = {
    id: lastId ? +lastId + 1 : 1,
    value: value,
    checked: false,
  };
  //   console.log(task);
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("lastId", +lastId + 1);
  document.getElementById("task").value = "";
};
