let todoList = [];
// [{
//   name: 'make dinner',
//   date: '2022-12-22'
// }];

// renderTodoList();

function renderTodoList(){
  let todoListHtml = '';

  for(i = 0; i < todoList.length; i++ ){
    const todoObject = todoList[i];
    let {name, dueDate} = todoObject;
    const html = `<div>${name}</div> <div> ${dueDate}</div> <button class="delete-button">Delete</button>`;

    todoListHtml += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHtml;
}
function addTodo(){
  
  const inputElement = document.querySelector('.js-todo-input');
  const dateInputElement = document.querySelector('.js-due-date-input');

  const name = inputElement.value;
  const dueDate = dateInputElement.value;

  todoList.push({name, dueDate});
  console.log(todoList);

  renderTodoList();
}

