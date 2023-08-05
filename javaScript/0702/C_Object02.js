// 자바 스크립트의 내장 객체

// Built-in Objects(내장 객체) 제공
// 특정 작업을 수행, 복잡한 기능을 쉽게 구현할수 있도록 도와주는 메소드와 속성을 제공

//! 1. String

let str = "  Hello, world!  ";
console.log(str.length) // 문자열 길이
console.log(str.toUpperCase()); // 모든 문자를 대문자로 변경
console.log(str.trim()) // 문자열 양쪽 끝의 공백(띄어쓰기, 줄바꿈) 없애기
console.log(str.split(',')) // 문자열을 매개변수(다른문자열)로 잘라서 배열을 만들어 리턴하는 기능

//! 2. Number

let num = 123.456;
console.log(num.toFixed(2)); // 소수점 아래 2번째 자리까지 표시(반올림)

//isNaN()
//isFinite

//! 3. Array

let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 배열의 길이
arr.push(6);
console.log(arr);

//! 4. Math
console.log(Math.PI); // 원주율
console.log(Math.sqrt(16)); // 제곱근 계산
console.log(Math.random()); // 0과 1사이의 숫자를 랜덤형식(무작위)
console.log(Math.floor(Math.random() * 11)); // 0과 10 사이의 숫자

//! 5. Date
// 날짜와 시간을 처리하는 메소드

let now = new Date();
console.log(now); // 현재 시간 

//! 6. JSON
// JSON객체는 JSON 포멧 데이터를 처리하는 메소드

let obj = { name: 'Seung ah', age: 97}
let json = JSON.stringify(obj); // 객체를 JSON 문자열로 변환
console.log(json);

let parsed = JSON.parse(json);
console.log(parsed);

//! 자바스크립트 객체 프로토타입

//? 프로토타입
// 그 객체를 기반으로 생성된 다른 객체들이 공통적으로 사용할수있는 속성과 메소드를 제동
// 객체 생성 시 해당 객체의 생성자 함수의 prototype 속성이 그 객체의 프로토 타입

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello ${this.name}`) ; 
}

let korea = new Person('korea');
korea.greet();

//? 프로토타입 체인
// 객체의 속성이나 메소드에 접근 시 자바 스크립트 엔진은 먼저 그 객체 자체에서 해당속성이나 메소드를 찾는다.
// 만약 찾기 못할 경우 객체의 프로토타입에서 찾는다

let academy = new Person('IT');
console.log(academy.constructor === )

//! 객체와 배열의 차이점

// 객체: 키와 값으로 이루어진 구조
// 키는 일반적으로 문자열, 값은 어떤 데이터 타입이든 가능

let seungah = {
  name: 'sengah',
  age: 97,
  isMarried: false
};

// 배열: 순서가 있는 데이터의 목록
// 배열의 요소는 어떤 데이터 타입이든 될수 있으며, 하나의 배열에 다양한 타입의 데이터를 함께 저장 가능

let arrayFruit = ['apple', 'banana', 'cherry'];
// 타입검사: Array.isArray(배열명)

//! JSON (JavaScript Object Notation) <-- 많이 사용됨
// 데이터를 교환하는 데 주로 사용되는 가벼운 데이터 형식
// 텍스트를 기반, 자바스크립트 객체의 문법을 사용하여 데이터 객체를 설명

// key-value, key-array쌍으로 데이터를 구조화 하는데 사용

//? JSON 사용
// 서로 다른 시스템 간에 구조화된 데이터를 전송하는데 많이 사용

