// 자바스크립트의 조건문

// 조건문 : 프로그램에게 특정 조건을 검사하고, 그 결과에 따라 다른 행동을 하도록 명령하는 방식

// 조건문의 종류 : if, else (if)문 , if-else문, swich문

//! 1. if문 <가장 기본적인 조건문>
// 특정 조건이 참 일 경우에 코드 블록이 실행됨

// if문의 기본형태

// if (조건작성) {
//   // 조건이 참 일때 실행되는 코드 작성
//   // 조건이 거짓 일 경우 코드블럭은 무시됨
// }

// 조건에는 보통 비교 연산자 (==, !=, ===, !==, <, >, <=, >=) 사용

let number = 10; 

if (number > 0) {
  console.log("The number is positive");
}

//! if else문 
// else문은 if문과 함께 사용, if의 조건이 거짓일 경우 else 뒤의 있는 코드 블록이 실행됨

// else문의 기본형
if (조건) {
  // 조건이 참일 때 실행되는 코드
} else {
  // 조건이 거짓일 때 실행되는 코드
}

if (조건) // 조건이 참일때
else // 조건이 거짓일때  <-- 나중에는 이렇게 생략하는데 당분간은 이렇게 x

let number2 = -10;

if (number2 > 0 ) {
  console.log("The numvber is positive");
} else {
  console.log("The numvber is not positive")
}

//! 3. else-if 문
// else if문은 if와  else 사이에 여러개의 조건을 추가한것
// if문과 else문 사이에 위치한다, 여러 개의 조건을 확인 할수있게 해주는 제어 구조 이다

// else if 문의 기본형

if (조건1) {
  //조건1이 참 일때 실행되는 코드
} else if (조건2) {
  // 조건1이 거짓이고 조건 2가 참일때 실행되는 코드
} else if (조건3) {
  // ... else if 계속 작성가능
} else {
  // 모든 조건이 거짓일때 실행되는 코드
}

if(조건1) {
  // 조건1이 참일때
} else {
  if(조건2) {

  }
} //<--- 이 형태를 위에것으로 요약한것

let number3 = 0;

if (number3 > 0) {
  console.log("The number is positive");
} else if (number3 < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero")
}

//! 4. switch문 
// switch문은 여러 가지 경우 중 하나를 선택하는데 사용
// 표현식의 값을 확인하고 해당 값과 일치하는 case문의 코드 블록을 실행

// switch문은 여러 가지 가능한 케이스 중에서 하나를 선택하여 해당하는 코드 블록을 실행하는 제어 구조이다.

//else문, else-if문이 복잡하게 겹쳐질때 사용하면 코드를 간결하고 이해하기 쉽게 만든다.

// switch문의 기본형

switch (식) {
  case 값1:
    // 식이 값1과 일치할 때 실행하는 코드
  case 값2:
      // 식이 값2와 일치할때 실행하는 코드
  case 값3:
        // 식이 값3와 일치할 때 실행하는 코드
  default:
          // 식이 어떤 값과도 일치하지 않을 떄 실행되는 코드이다
}

let fruit = "apple"

switch (fruit) {
  case "banana":
    console.log("I am a banana");
    break;
    // break 문을 만나면 switch 문을 빠져나온다.
  case "apple":
    console.log("I am a apple");
  case "strawberry":
    console.log("I am a strawberry");
  default:
    console.log("I am not a banana or apple or strawberry")
    // 어떤 case와도 일치 하지 않는 경우
}

// switch문은 주어진 식의 결과값과 case에 명시된 값들을 순차적으로 비교한다

//! 조건 연산자 (삼향 연산자) <-- 제일 많이 사용됨
// 조건 연산자는 자바스크립트에서 세 개의 피연산자(향)를 가지는 유일한 연산자이다
// if-else문을 다 간결하게 표현 <-중요

// 조건 연산자의 기본형이다

// 조건 ? 표현식1(조건이 참인 경우) : 표현식2 <-- 형태

// 조건 연산자 : 주어진 조건을 평가한 후,
// 그 결과가 true이면 표현식1을 실행 , false이면 표현식2를 실행함 : (if)-else문과 동일한거)

if (조건) {
  표현식1
} else {
  표현식2
}

let numcondision = 15;

let message = numcondition > 10 ? "The number is greater than 10." :"The number is not greater than 10." ;

console.log(message);

// OR 연산자
// 피연산자 2개 중에서 true가 하나라도 있으면 결과값은 true

false || false == false;
false || true == true;
true || false == true;
true || true == true;

let numberOne = prompt('50미만인 숫자를 입력하새요');
let numberTwo = prompt('50미만인 숫자를 입력하새요');

if (numberOne < 10|| numberTwo < 10) alert('숫자 2개중에서 최소한 하나는 10미만입니다.');
else alert('숫자 2개중에서 10미만인 수가 없습니다');

//AND 연산자
// 피연산자 2개중에서 false가 하나라도 있으면 결과값이 false

false && false == false;
false && true == false;
true && false == false;
true && true == true;

// 조건이 2가지 이상일 경우 동시에 함께 체크하는 조건식을 만들때는 
// 첫 번째 조건을 보고 빠르게 판단 할수있도록 로직을 구성해야 합니다

((x === 10)&& (y === 20))

// AND연산자: 첫번째 조건식에 false가 될 확률이 높은 조건을 사용하는것이 좋다
// 그래야 컴퓨터가 데이터를 적게소모하고 빨리 읽는다
// OR연산자 : 첫번째 조건식에 true가 될 확률이 높은 조건을 사용하는것이 좋다