// 자바 스크립트의 이벤트

//! 이벤트
// 웹 페이지에서 발생하는 대부분의 일(사건)
// 사용자가 버튼을 클릭, 웹 페이지가 로드. 인풋필드에 값을 입력하는것 <-- 다 이벤트에해당

//! 이벤트 핸들링
// 특정 이벤트에 반응하여 특정 동작을 실행하는것을 의미한다
// 이벤트 핸들러(또는 이벤트 리스너)는 특정 이벤트가 발생했을때 호출되는 함수

//! 이벤트 핸들러 등록 방법

//? 1, HTML 이벤트 핸들러 속성
// HTML 요소에 직접 on키워드(onclick, onload, onchange ...)를 사용해서 속성에 함수를 할당하여 이벤트를 연결

//? 2. DOM 프로퍼티에 할당: 자바 스크립트에서 HTML 요소의 이벤트 핸들러 프로퍼티에 함수를 할당하는 방법

//? 3. addEventListener 매서드 : HTML 요소의 addEventListener매서드를 사용하여 이벤트 핸들러 등록
// 표준 이벤트 모델, 한 요소에 여러개의 이벤트 핸들러 등록가능
// DOM요소에 이벤트 리스너를 추가하는데 사용
// 첫번째 매개변수로 이벤트 유형(click, load, input), 두번째 매개변수로 이벤트 핸들러 함수를 받는다.

// Element.addEventListener('click', funcion() {
  // 이벤트 핸들링 코드
// });

//! 이벤트 객체
// 이벤트 핸들러가 호출될때 , 브라우저가 자동으로 이벤트 객체를 생성하여 이벤트 핸들러에전달
// 마우스 이벤트의 경우 마우스 위치 정보
// 키보드 이벤트의 경우 어떤 키가 눌려졌는지에 대한 정보

//! 이벤트 전파
// 이벤트는 일반적으로 특정 요소에서 발생
// 해당 이벤트는 해당 요소의 부모 요소들로 '전파'


// let btn = document.getElementById('myBtn');

// btn.addEventListener('click', function() {
//   aleat('버튼이 클릭되었습니다.');
// })

//! 이벤트 버블링
// 특정 요소에서 이벤트가 발생했을때, 그 이벤트가 상위요소들로 전달되는현상

//! 이벤트 캡처링
// 이벤트 버블링과 반대방향으로 이벤트가 전달되는 현상
// 최상위요소에서 시작-> 이벤트가 발생한 요소까지 이벤트를 전달

//! event.stopPropagation() 메서드
// 이벤트 전파를 중지
// 현재 이벤트 이후의 전파가 중지, 버블링 또는 캡처링에서의 전파를 방지


let parent = document.getElementById('parent');
let child = document.getElementById('child');

parent.addEventListener('click', function(event) {
  alert('부모요소클릭');
  event.stopImmediatePropagation(); // 캡처링 중지
}
)

child.addEventListener('click', function(event) {
  alert('자식요소클릭');
  event.stopImmediatePropagation(); // 버블링 중지
}
)