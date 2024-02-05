function addItem1() {}
const addItem2 = function () {};
const createItem = (value) => {
  var newLi = document.createElement("li"); // create new <li>
  var deleteButton = document.createElement("button"); // create new <button>Delete</button>
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => deleteItem(newLi);
  deleteButton.classList = "btn btn-danger";
  newLi.innerHTML = value;
  newLi.append(deleteButton);
  newLi.classList = "d-flex justify-content-between align-items-center";
  document.getElementById("root").append(newLi);
};

var tasks = [];
if (localStorage.getItem("tasks") !== null) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
}
console.log(tasks);
for (let index = 0; index < tasks.length; index++) {
  createItem(tasks[index].value);
}
const addItem = (event) => {
  event.preventDefault();
  const value = document.getElementById("task").value; // get value from input
  createItem(value);
  var lastId = localStorage.getItem("lastId");
  console.log(lastId);
  let task = {
    id: lastId?+lastId + 1:1,
    value: value,
  };
  console.log(task);
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem('lastId',+lastId+1)

  document.getElementById("task").value = "";
};
const deleteItem = (x) => {
  x.remove();
};
