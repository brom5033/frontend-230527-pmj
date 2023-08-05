// 객체

// 자바스크립트: 객체 지향 프로그래밍 언어

console.log(typedof([]));
// Array.isArray(배열명);  : 배열 형태에 대한 값을 받을수있는 메소드

//! 객체(object)의 정의
// 객체: 고유한 특성 & 동작을 가지는 모든 것
// 속성(특성: 이름, 나이, 직업 등) & 메서드(동작: 걷다, 말하다, 먹다) 구성

//! 2. 객체를 생성

//? 2-1. 객체 리터럴
// 중괄호{}를 이용하여 생성
// 그안에 키와 값이 콜론(:)으로 구분되는 속성

let person = {
  //속성
  name: "Seung Ah",
  age: 97,
  job: "Developer",

  // 메서드
  walk: function () {
    console.log("Walking...");
  } , 
  talk: function() {
    console.log("Talking...");
  }
}

//? 2-2. 생성자 함수
// 함수를 사용해 객체를 생성하는 방법
// 코드를 재사용 하는것이 용이
// new 키워드를 사용하여 객체를 새 객체로 생성, 관례적으로 함수명의 첫글자는 대문자로 시작

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

let person1 = new Person("Seung Ah", 97, "Developer");
let person2 = new Person("Min A", 95, "doctor");

//? 2-3. Object.create()
// 명시적으로 프로토타입을 설정할수있는 새로운 객체를 생성

let presonProto = {
  greet: function(){
    console.log(`Hello, my name is ${this.name}`);
  }
}

let person3 = Object.create(personProto);
person3.name = "Park Seo Jun";
person3.age = 34;
person3.job = "Actor";

person3.greet();

//? 2-4. 클래스

class Person2 {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`)
  }
}

let person4 = new Person2("Lee seung Ah", 97, "Developer");
person4.greet();

//! 객체의 참조 타입
// 원시 타입: 문자열, 숫자, 불린, null, undefined, symbol
// 참조 타입: 주로 객체를 포함한 나머지 데이터 타입

//? 참조 타입
// 메모리에 직접 저장된 값(주소)을 참조하는 데이터 타입
// : 객체, 배열, 함수 등

let computer1 = {namd: "Samsung Book3"};
let computer2 = computer1;

computer2.name = "Samsung Book3 Ultra";
console.log(computer1.name);

//? 참조에 의한 함수 호출
function changeName(computer) {
  computer.name = 'Samsung Book3 Ultra';
}

let computer3 = { name: "Samsung Book3"};
changeName(computer3);
console.log(computer3.name);

//! 속성(Property) & 메서드(Method)
// 속성: 객체가 가지고 있는 정보
// 메서드: 그 정보를 사용하여 수행하는 동작

let book = {
  title: "Little prince",
  author: "Saint Exupery"
  publishYear: 1943,

  getSummary: function(){
    reture `{this.title} was written by ${this.auther} in ${this.publishYear}`;
  }
}

//? 객체의 속성에 접근하는 방법

// 점 표기법
// 객체명.속성명
console.log(book.title);

// 대괄호 표기법
// 속성 이름이 동적으로 결정될때 사용 가능

console.log(book["author"]);

let propertyName = "author";
console.log(book[propertyName]);

//? 속성 존재 확인
// in 연산자
console.log("title" in book); // true
console.log("publishYears" in book); // false

//? 속성 삭제
// delete 객체명.속성명

delete book.author;
console.log("title" in book); // false <-- 없어진거

//! 메소드

//? 메소드 정의
// 객체의 속성 중 함수인 속성
// 객체와 관련된 동작을 캡슐화하여 코드의 구조를 개선하고 재사용성을 높일 수 있다.

//? 메소드 형식

let name = 'Jeny';

let Human = {
  name: "seung ah"

  // Human 객체의 메소드
  greet: function(){
    console.log(`Hello, my name is ${this.name}`);
  }
}

//? 메소드 호출
Human.greet();

//? this 키워드
// 메소드 내부에서 this 키워드를 사용하면 해당 매소드를 호출한 객체에 접근 가능
// 자기 자신이 가진 속성을 출력하고 싶을때, 자신이 가진 속성임을 분명하게 표시
// 객체의 다른 속성에 접근하거나, 객체의 상태를 변경하는 등의 작업을 수행 가능

let teacher = {
  name: 'seung ah',
  changeName: function(newname) {
    this.name = newName;
  }
}

teacher.changeName('Jeny');
console.log(teacher.name);

//? 메소드 축약 표시 < -- 복습 중요

let teacher2 = {
  name: 'seung ah',

  greet() {
    console.log('hi');
  }
} 

