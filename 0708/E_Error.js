// 자바스크립트 오류와 예외처리

//! 구문오류 VS 런타임 오류

//? 구문오류(SyntaxError)
// 코드가 자바스크립트의 언어 규칙을 따르지 않을 때 발생
// let name = "John
// SyntaxError: Invalid or unexpected token

//? 런타임오류
// 코드 실행 중에 발생하는 오류
// 존재하지 않는 함수를 호출 || 정의 되지 않은 변수를 참조 || 숫자를 0으로 나누려고 할때 런타임 오류 발생
console.log(undefinedVariable);
// RefernceError: undefinedVariable is not defined

//?  자바스크립트의 오류의 종류와 특징 - 깃허브 참고

//! 자바 스크립트 예외 처리 구문

//? try...cach...finally 구문 <-- 정말 중요!!!
try {
  // 실행할코드
} catch(error){
  //에러 처리코드
} finally {
  // 항상 실행될 코드
}

// try블록: 에러가 발생할 수 있는 코드를 포함, 이 코드가 정상적으로 실행되면 catch 블록은 건너뛰고, finally 블록이 실행

// catch블록: try블록에서 에러가 발생하면, 실행이 중단되고 제어는 해당 에러 정보와 함께 catch블록으로 이동

// finally블록: try와 catch 블록의 실행 후에 항상 실행

function exampleFunction () {
  let value = 'value';
  try {
    console.log(value);
    console.log(nonExistentVariable);
    console.log("This massge will not be displayed")
  } catch (error) {
    console.log("An error has occured", error.message);
  } finally {
    console.log("Finally block has been executed")
  }
}

exampleFunction();

//? throw 구문
// 사용자 정의 에러를 발생시킬 때 사용
// throw 키워드를 사용하면 실행이 즉시 중지,
// 가장 가까운 예외 처리블록(catch)으로 제어가 넘어갑니다.
// catch 블록이 없으면 프로그램 실행을 중지

// 단순하게 예외를 발생시킴
//throw 문자열

// 조금 더 자세하게 예외를 발생시킴
// throw new Error("This is an error message");

function divide (a, b) {
  if (b === 0) {
    throw '0으로는 나눌 수 없습니다.'
  }
  reture a / b;
}

console.log(divided(10, 2));
console.log(divided(10, 0));