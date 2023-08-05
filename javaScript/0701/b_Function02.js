// 자바 스크립트의 고급함수

//! 콜백 함수

//? 콜백함수?
// 파라미터로 전달되는 함수 
// 이벤트가 발생하거나 특정 조건이 충족되었을 때 호출
// 비동기 작업을 처리하거나 코드의 실행 순서를 제어하는데 유용

//? 콜백 함수의 용도
// 이벤트 핸들러 
// 웹에서 버튼클릭, 키입력, 마우스이동등의 이벤트가 발생했을때 처리를 위해 사용

// 타이머
// setTimeout, setInterval과 같은 함수에서 콜백 함수를 사용하여 특정 시간이 지나면 실행될 코드를 지정

// 배열 매서도 <-- 나중에 많이쓰임
// forEach, map, filter, reduce 등의 배열 매서드는 각 배열 요소에 대해 수행할 작업을 정의하는 콜백 함수를 인수로 받는다

// 비동기 작업
// fetch로 HTTP 요청을 보내거나, 파일I/O 을 처리하는 등의 비동기 작업에서 사용됨

//? 선언적 함수를 사용한 콜백함수

function callThreeTimes (callback) {
  for (let i = 0; i < 3; i++) {
    callback(i); // callback이라는 매개변수는 함수이므로 호출가능
  }
}

function print(i) {
  console.log('${i}번째 함수 호출')
}

callThreeTimes(print);
// print (0)
// print (1)
// print (2)

callThreeTimes(function (i)) { // 익명함수 사용
  console.log('${i}번째 함수 호출')
}

//? 콜백함수를 활용하는 함수: forEach
// 배열이 가지고있는 함수로 단순하게 배열 내부의 요소를 사용해서 콜백함수를 호출한다

// function (value, index, array)

const arrays = [11, 3, 6, 12, 7];

arrays.forEach(function (value, index, array)) {
  console.log('$(index)번째 요소 : ${value}')
}

//? 콜백함수를 활용하는 함수: map() 메소드 <-- 중요
// 콜백 함수에서 리턴한 값들을 기반으로 새로운 배열을 생성

arrays = arrays.map(function (value, index, array)) {
  return value * value;
}

arrays.forEach(console.log)


//? 콜백 함수를 활용하는 함수:filter() 메소드
// 콜백 함수에서 리턴하는 값이 true인 것들만 모아서 새로운 배열을 생성

const numberArray = [0, 1, 2, 3, 4, 5];

const evenNumbers = numberArray.filter(function(value)) {
  return value % 2 === 0
}

//! 타이머 함수

// setTimeout(함수, 시간): 특정 시간 후에 함수를 한번 호출
// setInterval(함수, 시간): 특정 시간 마다 함수를 호출

// 1000 == 1초

//? 1초후에 메세지를 출력하는 콜백함수?
setTimeout(function() {
  console.log ('1 second has passed')
}, 1000)

let const = 0;

setTimeout() {
  console.log ('1 second has passed${count} 번째 반복중')
  count++;
}, 5000

// 클로저 <-- 나중에 복습 , 콜백함수에 중점을 맞춰서 복습