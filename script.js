const todoList = [{
  name,
  dueDate}];
// const todo = {
//   name,
//   dueDate
// };
renderTodoList();

function renderTodoList(){
  let todoListHtml = '';

  for(i = 0; i < todoList.length; i++ ){
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject;
    const html = `<div>${name}</div> <div> ${dueDate}</div> <button>delete</button>`;

    todoListHtml += html;
  }
  document.querySelector('.js-todo-list') = todoListHtml;
}
function addTodo(){
  
  const inputElement = document.querySelector('.js-todo-input')
  const dateInputElement = document.querySelector('.js-due-date-input')

  const todoName = inputElement.value;
  const dueDate = dateInputElement.value;

  todoList.push({todoName, dueDate});
  console.log(todoList);

  renderTodoList();
}

