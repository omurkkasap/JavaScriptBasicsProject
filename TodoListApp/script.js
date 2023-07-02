const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if(inputBox.value === '') {
    alert('Bir Görev Eklemelisin')
  }else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span);
  }

  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData()
  }else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData()
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data")
}

showTask()


let moon = document.getElementById("moon")
let sun = document.getElementById("sun")
let root = document.querySelector(':root')


function changetoDark() {
  moon.style.visibility = "hidden";
  moon.style.opacity = "0";
  sun.style.visibility = "visible";
  sun.style.opacity = "1";

  root.style.setProperty("--body-background", "linear-gradient(135deg, #021130, #1d0124)")
  root.style.setProperty("--box-background", "rgba(0, 0, 0, 0.35)")
  root.style.setProperty("--head-text-color", "#fff")
  root.style.setProperty("--main-text-color", "#fff")
}

function changetoMain() {
  sun.style.visibility = "hidden";
  sun.style.opacity = "0";
  moon.style.visibility = "visible";
  moon.style.opacity = "1";

  root.style.setProperty("--body-background", "linear-gradient(135deg, #153677, #4e085f)")
  root.style.setProperty("--box-background", "#fff")
  root.style.setProperty("--head-text-color", "#002765")
  root.style.setProperty("--main-text-color", "#000")
}