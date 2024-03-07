const inputBox = document.getElementById("input-box");
const item = document.getElementById("items");
let addBtn = document.querySelector("button");

addBtn.addEventListener('click',function(){
    if(inputBox.value === ''){
        alert("you must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        item.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();
});

item.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", item.innerHTML)
}
function showTask(){
    item.innerHTML = localStorage.getItem("data")
}
showTask();
