// const getCurrentDate = document.getElementById(`date`).dataset.getDate();

const toContainer = document.querySelector(`.Todo-container`);

const submitButtons = document.getElementById(`todo_button`);

const inputField = document.getElementById(`todo_input`);

const showPandingTask = document.getElementById(`panding_task`);

const currentDate = document.getElementById(`date`);


var today = new Date();
const formattedDate = today.toLocaleDateString('en-US'); 
currentDate.innerText = formattedDate;


let count = 0;

submitButtons.addEventListener(`click`,function(e){
    e.preventDefault();


    let inputValue = inputField.value;

    if(inputValue === ""){
        alert(`task connot be empty!!!`);
        return;
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

    newToDo.querySelector(`.check`).addEventListener(`click`,function(){
        if(!newToDo.classList.contains(`completed`)){  
            newToDo.classList.add(`completed`);
            count--;
        }else{
            newToDo.classList.remove(`completed`);
            count++;
        }
        showPandingTask.innerHTML = count;
    })

    newToDo.querySelector(`.delete`).addEventListener(`click`,function(){
        if(!newToDo.classList.contains(`completed`)){
            count--;
        }
        newToDo.remove();
        showPandingTask.innerHTML = count;
    });

    toContainer.appendChild(newToDo);
    inputField.value = ``;
    count++;
    showPandingTask.innerHTML = count;
})


