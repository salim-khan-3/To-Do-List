// const getCurrentDate = document.getElementById(`date`).dataset.getDate();

const toContainer = document.querySelector(`.Todo-container`);

const submitButtons = document.getElementById(`todo_button`);

const inputField = document.getElementById(`todo_input`);

const showPandingTask = document.getElementById(`panding_task`);

const currentDate = document.getElementById(`date`);

var today = new Date();
const formattedDate = today.toLocaleDateString('en-US'); // তারিখ ফরম্যাট করা
currentDate.innerText = formattedDate

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








// const toContainer = document.querySelector(`.Todo-container`);
// const submitButtons = document.getElementById(`todo_button`);
// const inputField = document.getElementById(`todo_input`);
// const showPendingTask = document.getElementById(`panding_task`);

// let pendingCount = 0;

// submitButtons.addEventListener(`click`, function (e) {
//     e.preventDefault();
//     let inputValue = inputField.value.trim();

//     if (inputValue === "") {
//         alert(`Task cannot be empty!!!`);
//         return;
//     }

//     let newToDo = document.createElement(`div`);
//     newToDo.classList.add("newToDo");

//     newToDo.innerHTML = `
//         <p class="todo_items">
//            <span id="bar_icons">
//             <i class="fa-solid fa-bars"></i>
//            </span>
//            <span class="newTask">${inputValue}</span>
//         </p>
//         <div class="buttons">
//             <button class="check">
//                 <i class="fa-solid fa-check"></i>
//             </button>
//             <button class="delete">
//                 <i class="fa-solid fa-trash"></i>
//             </button>
//         </div>
//     `;

//     toContainer.appendChild(newToDo);
//     inputField.value = ``;

//     // Mark task as pending
//     newToDo.querySelector(`.check`).addEventListener(`click`, function () {
//         if (!newToDo.classList.contains("completed")) {
//             pendingCount++;
//             newToDo.classList.add("completed");
//         } else {
//             pendingCount--;
//             newToDo.classList.remove("completed");
//         }
//         showPendingTask.innerText = pendingCount; // Update pending count
//     });

//     // Delete task
//     newToDo.querySelector(`.delete`).addEventListener(`click`, function () {
//         if (newToDo.classList.contains("completed")) {
//             pendingCount--; // Reduce count if it was marked completed
//             showPendingTask.innerText = pendingCount;
//         }
//         newToDo.remove();
//     });
// });








// const toContainer = document.querySelector('.Todo-container');
// const submitButtons = document.getElementById('todo_button');
// const inputField = document.getElementById('todo_input');
// const showPendingTask = document.getElementById('panding_task');

// let tasks = [];

// // লোকাল স্টোরেজ থেকে টাস্ক লোড করা
// if (localStorage.getItem('tasks')) {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//     renderTasks();
// }

// // নতুন টাস্ক যোগ করা
// submitButtons.addEventListener('click', function (e) {
//     e.preventDefault();
//     let inputValue = inputField.value.trim();

//     if (inputValue === "") {
//         alert('Task cannot be empty!!!');
//         return;
//     }

//     tasks.push({ text: inputValue, completed: false }); // টাস্ক যোগ করা
//     inputField.value = '';
//     saveTasks();
//     renderTasks();
// });

// // টাস্ক রেন্ডার করা
// function renderTasks() {
//     toContainer.innerHTML = ''; // পুরানো টাস্ক মুছে ফেলা
//     tasks.forEach((task, index) => {
//         let newToDo = document.createElement('div');
//         newToDo.classList.add('newToDo');

//         if (task.completed) {
//             newToDo.classList.add('completed');
//         }

//         newToDo.innerHTML = `
//             <p class="todo_items">
//                <span id="bar_icons">
//                 <i class="fa-solid fa-bars"></i>
//                </span>
//                <span class="newTask">${task.text}</span>
//             </p>
//             <div class="buttons">
//                 <button class="check">
//                     <i class="fa-solid fa-check"></i>
//                 </button>
//                 <button class="delete">
//                     <i class="fa-solid fa-trash"></i>
//                 </button>
//             </div>
//         `;

//         // Check Button-এ ক্লিক করলে টাস্ক কমপ্লিট করা
//         newToDo.querySelector('.check').addEventListener('click', function () {
//             tasks[index].completed = !tasks[index].completed; // টাস্কের স্টেট টগল করা
//             saveTasks();
//             renderTasks();
//         });

//         // Delete Button-এ ক্লিক করলে টাস্ক ডিলিট করা
//         newToDo.querySelector('.delete').addEventListener('click', function () {
//             tasks.splice(index, 1); // টাস্ক ডিলিট করা
//             saveTasks();
//             renderTasks();
//         });

//         toContainer.appendChild(newToDo);
//     });

//     updatePendingTaskCount(); // পেন্ডিং টাস্ক সংখ্যা আপডেট
// }

// // পেন্ডিং টাস্ক সংখ্যা আপডেট করা
// function updatePendingTaskCount() {
//     const pendingTasks = tasks.filter(task => !task.completed).length; // শুধু পেন্ডিং টাস্ক গণনা
//     showPendingTask.innerText = pendingTasks; // সংখ্যা আপডেট
// }

// // লোকাল স্টোরেজে টাস্ক সেভ করা
// function saveTasks() {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }
