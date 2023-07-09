
// 타입 스크립트는 변수 선언시 변수의 타입을 명시
// ts
let naming: string = 'Jeny';
const age: number = 24;
let isMarried: boolean = false;

// js
// let naming2 = 'Jeny'
// naming2 = 24;

//! 타입스크립트의 타입

//! 원시 타입
// string, number, boolean
// Js에서 typrof연산자를 사용했을때 각각의 해당 타입이 출력되는 타입

//? boolean
// 참(true), 거짓(false) 값을 나타내는 논리 타입 <무조건 2가지값만가짐>

let isDone: boolean = false;

//? number
// 모든 숫자

let decimal: number = 6;
let hex2: number = 0xf00d;

//? string
// 텍스트타입

let colors: string = "blue";
colors = "red";

//!  Array
// 배열 타입

// type[]: number[] 
// Array<type>: Array<number> (38, 39두개 같은뜻)

// [number]: 배열타입 X

let lists: number[] = [1, 2, 3];
let lists2: Array<number> = [1, 2, 3];

//! Tuple(튜플)
// 고정된 수의 요소 타입, 순서가 있는 타입

let tuple2: [string, number];
tuple2 = ["hello", 10];
// tuple2 = [10, "hello"] // <-- 오류 작동안됨

//! void
// 주로 함수에서 반환 값이 없을 때 사용되는 타입
function introduce(): void {
  console.log("안녕하세요");
}

//! any
// 특정하게 지정된 타입으로 인해 타입 검사 오류가 발생하는 것을 원하지 않을때 사용하는 타입

let obj: any = { x: 0 };
// any타입 지정시 타입 검사가 비활성화함


// 어떤것을 넣어도 오류가 나지않음 , any 불특정하게 많이 사용하는것은 권장하지않음
obj.foo();
obj();
obj.bar = 100;
obj = "Hello";
const numberExample: number = obj;

//! null & undefined

let undefinedType: undefined = undefined;
let nullType: null = null;

// null, undefined 타입은 다른 모든 타입의 하위 타입

// any << string, number, boolean, 배열 , 객체 << undefined, null

//! 열거형(enum)
// 열거형은 enum 키워드를 사용해 정의
// 자주 사용되진 않음

// 숫자 열거형
enum Direction {
  Up = 1, // Up이 1로 초기화된 숫자 열거형을 선언
  Down, // 2선언된 이후의 열거형 안의 멤버들은 자동으로 증가된 값을 가짐
  Left, //3
  Right, // 4
}

enum Direction {
  Up2, // 0으로 자동지정
  Down2, 
  Left2, 
  Right2, 
}

// 문자 열거형 
// 열거형 멤버에 지정된 값은 유의미하고 읽기 좋은 값을 미리 지정

enum Direction {
  Up3 = "UP",
  Down3 = "UP",
  Left3 = "UP",
  Right3 = "UP",
}

//! bigint
// ES2020에 도입, 아주 큰 정수를 다루기 위한 원시 타입

// BigInt 함수를 통해서 bigint 값을 생성
const oneHundred: bigint = BigInt(100);
// const oneHundred2: bigint = 100n; 
// tscinfig.json에서 es2016으로 설정되어 있어 오류발생

//! symbol
// 고유한 참조값을(주소값) 생성하는 데에 사용할수 있는 자료형
// Symbol()함수를 사용해서 생성

// Symbol은 유일하고 변경 불가능한 값으로 생성
// const firstName = Symbol("name");
// const secondName = Symbol("name");

// if (firstName === secondName) {
//   console.log("두 이름이 같습니다.")
// } <-- 절대 실행되지않음

const nameSymbol = Symbol("name");

const firstName = nameSymbol;
const secondName = nameSymbol;

console.log(firstName === secondName); // true