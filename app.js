// selectors 
const todoBtn = document.querySelector(".todo-btn"); 
const todoInput = document.querySelector(".todo-input");
const todoContainer = document.querySelector(".todo-container");

//create ul
const todoList = document.createElement("ul");
todoList.classList.add("todo-list")
todoContainer.appendChild(todoList);


// event listeners 

todoBtn.addEventListener("click" , addTask)
todoList.addEventListener("click" , checkOrDelete )



// functions 

function addTask(e) {
    e.preventDefault();
    
    

    //create li 
    const todoLi = document.createElement("li");
    todoLi.classList.add("todo")

    //create div 
    const liDiv = document.createElement("div")
    liDiv.classList.add("todo-item")

    //add input value to div
    liDiv.innerHTML = todoInput.value;

    //create button complete 
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    

    //create trash button 
    const trashBtn = document.createElement("button");
    trashBtn.classList.add("trash-btn");
    trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'

    

    //add div + button 1 and 2 -> li 
    todoLi.appendChild(liDiv);
    todoLi.appendChild(completeBtn);
    todoLi.appendChild(trashBtn);

    //add li to ul
    todoList.appendChild(todoLi);
    


    //remove input value
    todoInput.value = "";

}

function checkOrDelete(e) {
    const item = e.target;
    if(item.classList[0] === "complete-btn") {
        item.parentElement.classList.toggle("completed");

    }else if (item.classList[0] === "trash-btn") {
        item.parentElement.classList.add("falt");
        item.parentElement.addEventListener("transitionend" , () => { item.parentElement.remove(); })
        

    }
}