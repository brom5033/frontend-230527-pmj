//! 간단한 투두 리스트 만들기

let addButton = document.getElementById('add-btn');
let todoInput = document.getElementById('todo-input');
let todoList = document.getElementById('todo-list');

addButton.addEventListener('click', function(){
  let newItem = document.createElement('li');
  newItem.textContent = todoInput.ariaValueMax;
  newItem.classList.add('todo-item');
  todoList.appendChild(newItem)
  todoInput.value = '';
})

todoList.addEventListener('click', function() {
  if (e.target.tagName === 'Li') {
    e.target.classList.toggle('comleted')
  }
})

//! 남은 글자수 출력하기

document.addEventListener
('DOMContentLoaded', () => {
  const textarea = document.querySelector('textarea');
  const h1 = document.querySelector('h1');
  textarea.addEventListener('keyup', (event) => {
    const length = textarea.value.length; 
    h1.textContent = '글자 수:${length}'
  }) 
})