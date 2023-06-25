// 자바 스크립트의 반복문

// 반복문(Loops)은 동일한 코드 블럭을 여러번 실행할수 있도록 해주는 프로그래밍의 기본구조

// 조건이 만족될때까지 실행할수있는 명령의 집합 계속 설명해줌

// 반복문의 종류 : for, while, do-while, for...in, for...of

//! 자바 스크립트의 배열

// 배열같은 경우 여러개의 변수를 한번에 선언해서 다룰수있는 자료형이다
// 배열안에있는 각각의 변수들을 요소라고 부름 요쇼: 배열내부에 있는값
// 여러개의 항목들이 순차적(순서가 있다.)으로 저장된 데이터구조이다
// 숫자형 인덱스를 사용해서 각 항목(요소)에 접근할수있다

// 배열의 기본형

변수 변수명 = [요소1, 요소2..];

let fruits = ['apple', 'banana', 'strawberry'];
let numbers = [1, 2, 3, 4, 5]; // 인덱스 번호는 배열의 요소의수 -1 1=0 이라는뜻 0부터 시작해서

// 배열의 각 요소에 접근 : 0부터 시작하는 인덱스(index)를 사용해서 접근
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // strawberry

//? 배열의 길이 확인
// length 속성을 사용하여 배열의 길이를 확인할수있다
// 배열에 들어있는 항목의 수이다

console.log(fruits.length); 
// fruits.length

//! for 반복문
// for 반복문은 코드를 정해진 횟수만큼 반복 실행할때 사용한다

//for 반복문의 기본형

for (초기화; 조건; 증감) {
  // 실행할 조건
}

// 초기화 : 반복문이 시작될때 단 한번만 실행된다, 보통 카운터 변수를 초기화하는데 사용된다
// 조건 : 각 반복 사이클의 시작에서 평가되는 표현식이다,
// 이 조건이 true라면 코드 블록이 실행되고, false라면 반복문이 종료된다.
// 증감 : 각 반복 사이클이 끝날때마다 실행된다, 보통 카운터 변수를 증가 또는 감소시키는데 사용된다.

// 0~4 까지 코드출력


for (let index = 0; index < 5; index++) {
  console.log(index);
}

// let index = 0; (1)
// index < 5; (2)
//  console.log(index); (3)
// index++ (4)

// (1 - 2 - 4 - 3) - (2 - 4 - 3)

// index는 초기화에서 0으로 시작
// 조건에서 i < 5가 참인동안 반복문이 실행
// 각 반복 사이클이 끝날때마다 i는 1씩 증가

//! while 반복문
//! while 반복문은 주어진 조건이 참인동안 코드 블럭을 <계속> 실행 시킨다

// while 반복문의 기본형태

while (조건) {
  // 실행할 코드
}

// 조건이 true 일때만 코드블록이 실행된다, 조건이 처음부터 false인경우 코드 블록은 실행되지않는다

// 0~4 까지 출력

let index2 = 0;
while (index2 < 5) {
  console.log(index);
  index2++;
}


//! do-while 반복문
// do-while 반복문 : while문과 유사, 조건을 확인하기 전에 먼저 코드 블럭을 실행시킴
// 코드 블럭이 최소한 한번은 실행되는것이 보장되어있다

//do-while 반복문의 가본형

do {
  // 실행할 코드
} while (조건);

// 0~4 까지 출력

let index3 = 0;
do {
  console.log(index3);
  index3++;
  while (index3 < 5);
}

// for문을 쓰는경우는 0~9까지 쓸때

// while do-while 어떤 조건을 만족하는 동안만 사용하기위해

// 반복문은 간단한 코드로 많은 작업을 수행할수있게 해주는 도구이다
// 주의해야할점은 반복문을 사용할때는 항상 무한루프에 빠지지 않도록 주의해야한다.
// 예를들어 숫자가 계속 커진다거나 계속 코드가 생성되는것 아니면 무조건 참이게 되는 경우 무조건 거짓인경우를 주의해야함 조건식안에 코드를 제대로 작성해야함 <- 서버다운이나 프로그래밍오류생김


for (let index4 = 1; index4 < 21; index4++) {
  if (index4 % 3 === 0) {
    console.log(index4)
  }
}

//! for...in 반복문
// for...in 반복문은 객체의 속성을 반복하거나 배열의 인덱스를 반복하는데 사용된다
// 배열을 반복하는 경우에는 for...of, forEach()를 사용하는것이 일반적이다
// for...in 반복문의 기본형

for (변수 in 객체) {
  //실행할 코드
}

//! for...of 반복문
// for...of 반복문은 iterable(반복가능한) 객체(배열,문자열,map,set 등) 의 요소들을 반복하는데 사용된다

// for...of 반복문의 기본형
for (변수 of interable) {
  // 실행할 코드
}



//! forEach 반복문
// 배열의 각 요소에 대해 함수를 실행하는 간단하고 직관적인 방법을 제공한다
// for, while 반복문을 사용하는것보다 코드가 간결하고 가독성이 좋다