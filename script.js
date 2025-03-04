const toContainer = document.querySelector(`.Todo-container`);

const submitButtons = document.getElementById(`todo_button`);

const inputField = document.getElementById(`todo_input`);

const showPandingTask = document.getElementById(`panding_task`);

const checkTask = document.querySelector(`.check`)
let count = 0;

submitButtons.addEventListener(`click`,function(e){
    e.preventDefault();


    let inputValue = inputField.value;

    if(inputValue === ""){
        alert(`task connot be empty!!!`)
    }

    let newToDo = document.createElement(`div`);
    newToDo.classList.add("newToDo");

    newToDo.innerHTML = `
        <p class="todo_items">
           <span id="bar_icons">
            <i class="fa-solid fa-bars"></i>
           </span>
           <span class="newTask">${inputValue}</span>
        </p>
        <div class="buttons">
            <button class="check">
                <i class="fa-solid fa-check"></i>
            </button>
            <button class="delete">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `;

    toContainer.appendChild(newToDo);
    inputField.value = ``;
    
    // let count = 0;
    // checkTask.addEventListener(`click`,function(){

    // });
    newToDo.querySelector(`.delete`).addEventListener(`click`,function(){
        newToDo.remove();
    });

})


