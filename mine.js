// document.addEventListener("DOMContentLoaded" , function() {
//     document.querySelector("#submit").disabled = true;
//     document.querySelector("#task").onkeyup = function(){
//         if(document.querySelector("#task").value.length > 5) {
//             document.querySelector("#submit").disabled = false;
//         }else {
//             document.querySelector("#submit").disabled = true;
//         }
//     }
//     document.querySelector("form").onsubmit = function(){
//     var task =  document.querySelector("#task").value;
//     var li = document.createElement("li");
//     li.innerHTML = task;
//     document.querySelector("#list").appendChild(li);
//     document.querySelector("#task").value = ""
//     return false;
//     }
// })
var input  = document.querySelector("#Task");
var but =  document.querySelector("#button");

but.addEventListener("click", addList)

function addList(){
    var not = document.querySelector("#not");
    var completed = document.querySelector("#Completed");
    var checkBtn = document.createElement("button");
    var delBtn = document.createElement("button");
    var newLi = document.createElement("li");
    checkBtn.innerHTML = "<i class='fa-solid fa-check'></i>"
    delBtn.innerHTML = "<i class='fa-solid fa-trash'></i>"

    if(input.value !== "" &&  input.value.length > 5){
        newLi.textContent = input.value;
        input.value = "";
        not.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
        checkBtn.addEventListener("click" , function(){
            var parent = this.parentNode;
            parent.remove()
            completed.appendChild(parent)
            checkBtn.style.display = "none"
        })
        delBtn.addEventListener("click" , function(){
            var parent = this.parentNode;
            parent.remove();
        })
    }else{
        alert("Please enter a task with more than 5 characters")
    }
    checkBtn.style.marginLeft= "600px"
    
    
}