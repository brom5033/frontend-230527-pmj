//! 타입 스크립트 함수

//? 1.함수의 선언과 호출

function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet("Jeny"));

//? 2. 함수 타입 정의

{
  let greet: (name: string) => string;

  greet = function (name) {
    return `Hello, ${name}`;
  }

  console.log(greet("Jeny"));
}

//! 3. 선택적 매개변수 & 기본 매개변수

{
  function greet(name: string, greeting = "Hello") {
  if(!greeting) {
    return `Hello`; // 기본 매개변수
  }
    return `${greeting, ${name}}`;
  
  }

console.log(greet("Jeny"));
console.log(greet("Rose", "Hi"));

}

//! Rest 매게 변수
// : 0개 이상의 매개변수를 배열로 전달받는것을 가능하게함
// : 개수가 확정되지않은 매개변수를 함수에 전달가능

// 매개변수 이름앞에 ...를 표기: 배열타입으로 지정
{
  function sum(...nums: number[]): number{
    
  }
}