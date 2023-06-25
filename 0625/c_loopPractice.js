// 자바스크립트의 반복문 예제 실습

//? for문

//! 배열의 모든 요소 출력하기

let fruits = ['apple', 'banana', 'cherry'];
//배열의 길이 확인하는 length 속성: 배열명.length

for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
}

//? while 문

//! 배열의 모든 요소를 출력하기

let index = 0;
while (index < fruits2.length) {
  console.log(fruits2[index]);
  index++;
}

//! 숫자를 2로 계속 나누기

// num 변수에 100을 초기화
// 조건 1 초과일때


let num = 100;
while (num > 1) {
  num /= 2; // num = num / 2;
  console.log(num);
}

//? do-while문

let fruits = ['apple', 'banana', 'cherry'];
//배열의 길이 확인하는 length 속성: 배열명.length

for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
}

//! 사용자 입력 받기


// 실행문 시작전에 userInput의 변수를 선언해주세요
// do 실행 코드 블럭에 사용자로부터 숫자를 입력받아 userInput변수에 할당해주세요.
// 사용자가 10보다 큰 숫자를 입력할때까지 계속해서 사용자에게 입력을 요청합니다.

let userInput;
do {
  userInput = prompt("Enter a number greater than 10", "");
} while (userInput <= 10);

//? for...in 반복문

//! 객체의 속성 반복하기

let car = {
  company: "HyunDai"
  model: "hdcar"
  year: 2023
};

for (let property in car) {
  console.log(property + ": " + car[property]);
}

//! 배열의 인덱스 반복하기 (for...of, forEach 사용 권장)
let fruits4 = ["apple", "banana", "cherry"];
for (let index in fruits4) {
  console.log (index + ": " + fruits4[index])
};

//? for...of 반복문

//! 배열의 요소 반복하기

let fruits5 = ["apple", "banana", "cherry"];
for (let fruit of fruits5) {
  console.log(fruit);
}


//? forEach 반복문

let fruits6 = ["apple", "banana", "cherry"];

fruits6.forEach(function(fruit){
  console.log(fruit);
  console.log("index " + index + ": " + fruit);
});