// задаем переменные для элементов страницы
let task = document.querySelector('.task__text');
let addButton = document.querySelector('.task__btn');
let todoList = document.querySelector ('.task-list');
let deleteButton = document.querySelector('.task-container__btn');
let taskList = []; // массив для списка задач


// функция "добавить". При вводе задачи - создает объект с неактивным чекбоксом и добавляет каждую задачу в массив списка задач
//также проверяет задачу на пустое значение
//выводит задачи на экран 
addButton.addEventListener('click', function(){
    let newTask = {
        todo: task.value,
        checked: false
    };
    taskList.push(newTask);
    checkEmpyyTask ()
    showTaskList ()

    deleteButton.removeAttribute ('disabled');

});

// функция для вывода на экран списка задач. В уже имеющийся тег ul добавляет элементы li
function showTaskList (){
    let displayTask = '';
    taskList.forEach(function(item, index){
        displayTask += `
        <li class = 'task-list__item'>
            <input type='checkbox' id='item_${index}'>
            <label for='item_${index}'>${item.todo}</label>
        </li>`;
        todoList.innerHTML = displayTask;
    });
}

// функция очистить список срабатывает при нажатии на соотв.кнопку. Для её реализации мы сначала создаем новый массив, удаляем элементы
// и выводим "нет задач"
deleteButton.addEventListener ('click', function (){
    const allTasks = document.querySelectorAll ('.task-list__item');
    for (const taskItem of allTasks) {
        taskItem.remove();
    }
    todoList.innerHTML = `<p class="notasks">Нет задач</p>`;
})

// Функции ниже проверяют значение инпута на пустое, и если оно оказывается пустым, выводит на экран алерт и удаляет данное значение из массива
//не добавляя его в список задач
function checkEmpyyTask (){
    if (task.value == ''){
        taskList.splice(taskList.findIndex(isEpmtyTask), 1);
        alert ('Пустая задача');
    }
}

function isEpmtyTask(element, index, array) {
    const emptyTask = '';
    return element === emptyTask;
}