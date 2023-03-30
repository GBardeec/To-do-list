const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();

    const taskText = todoInput.value;
    // const liHTML = `<li>${taskText}</li>`;
    // todoList.insertAdjacentHTML("beforeend", liHTML);

    const newTask = document.createElement('li');
    newTask.innerText = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.setAttribute('style', 'margin-left: 15px; padding: 5px 7px; border-radius: 12px; font-size: 10px; background: #5a5959; color: white; text-transform: uppercase; letter-spacing: 1px;');
    deleteBtn.innerText = 'удалить';
    newTask.append(deleteBtn);

    deleteBtn.addEventListener('click', function() {
        this.closest('li').remove();
    })

    todoList.append(newTask)

    todoInput.value = '';
    todoInput.focus();
}