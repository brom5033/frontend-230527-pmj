// TODO 리스트를 구현하는 실습

import { resolve } from "path";

type TodoPractice = {
  id: number; // 항목 ID
  text: string; // 항목 내용
  done: boolean; // 항목 완료 상태
}

let todos: TodoPractice[] = [];

async function fetchTodos(): Promise<TodoPractice[]> {
  return new Promise(resolve => {
    // 1초 후 현재 todos 배열을 반환
    setTimeout(() => resolve(todos), 1000);
  })
}

// 할일 추가
async function addTodo(todotext: string): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      // TodoPractice 타입의 객체 생성
      const newTodo: TodoPractice = {
        id: Date.now(),
        text: todotext,
        done: false,
      };
      // 생성된 객체를 todos배열에 추가
      todos.push(newTodo);
      resolve();
    }, 1000);
  });
}

// 할일 삭제
async function deleteTodo(id: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      todos = todos.filter(todo => todo.id !== id);
      resolve();
    }, 1000);
  });
}

// HTML 요소를 가져와 이벤트 리스너 등록
const formE1 = document.getElementById('todo-form') as HTMLFormElement;
const inputE1 = document.getElementById('todo-input') as HTMLInputElement;
const listE1 = document.getElementById('todo-list') as HTMLUListElement;


// 할일을 추가
formE1.addEventListener('submit',async (event) => {
  event.preventDefault();

  const newTodoText = inputE1.value.trim();
  if (newTodoText) {
    await addTodo(newTodoText);
    inputE1.value = '';
    renderTodos();
  }
})

// 할일 목록을 렌더링
async function renderTodos() {
  // 최신 할일 목록을 가져옴.
  const todos = await fetchTodos();
  listE1.innerHTML = '';

  todos.forEach(todo => {
    // 새로운 'li' HTML 요소 생성
const listItemE1 = document.createElement('li');

  // 새로 생성한 li 요소에 todo-list class 명 추가
  listItemE1.classList.add('todo-list');

  // li 요소의 텍스트를 현재 할일의 텍스트로 설정
  listItemE1.textContent = todo.text;

  // 새로운 button HTML 요소 생성
  const deleteButton = document.createElement('button');

  // 생성한 버튼의 텍스트를 Delete로 설정
  deleteButton.textContent = 'Delete';

  // Delete 버튼에 이벤트 추가(할일 삭제)
  deleteButton.addEventListener('click', async () => {
    await deleteTodo(todo.id);
    // 삭제 후 전체 할일을 렌더링
    renderTodos();
  })    

  // li 요소에 설정한 Delete 버튼 추가
  listItemE1.appendChild(deleteButton);

  // 전체 할일 목록ul에 현재 li 요소를 추가
  listE1.appendChild(listItemE1);
});
}
  

renderTodos();
