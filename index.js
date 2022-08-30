//grab id
let myLeads = []
let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

//add event listener to id and log message saying button is clicked from event listener    
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
    //clear input field after submit
    inputEl.value = "";
    renderLeads();
}

)

function renderLeads(){
let listItems = "";
for(let i = 0; i < myLeads.length; i++){
//Simplest way using innerHTML
    listItems += "<li> <a target='_blank' href='"> + myLeads[i] +"'>" + myLeads[i] + "</a></li>"
    console.log(listItems)
//Second Way Using Create Element
//create element
    //const newEl = document.createElement("li");
//set text content
    //newEl.innerHTML = myLeads[i]
//append to ul
    //ulEl.appendChild(newEl)
}
//render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems;
}