let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

displayTodo();

function addTodo() {
  let inputElement = document.querySelector('#work');
  let inputDate = document.querySelector('#todo-date');
  let inputText = inputElement.value;
  let inputDateValue = inputDate.value;

  todoList.push({
    item: inputText,
    dueDate: inputDateValue,
  });

  inputElement.value = '';
  inputDate.value = '';

  localStorage.setItem("todoList", JSON.stringify(todoList));
  displayTodo();
}

function displayTodo() {
  let containerElements = document.querySelector('.todo-container');
  let newHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    let item = todoList[i].item;
    let dueDate = todoList[i].dueDate;

    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class="btn-delete" onclick="deleteTodo(${i})">Delete</button>
    `;
}

containerElements.innerHTML = newHtml;
}

function deleteTodo(index) {
todoList.splice(index, 1);
localStorage.setItem("todoList", JSON.stringify(todoList));
displayTodo();
}

