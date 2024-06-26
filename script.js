const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listContainer");
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
} else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);
}
inputBox.value = "";
saveData();
}
listContainer.addEventListener(
    "click",
    (e) => {
        if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
},
false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();

document.body.addEventListener("mouse",(e)=>{
  console.log(e.target)
})