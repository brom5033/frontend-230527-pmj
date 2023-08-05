// DOM

// Document Object Model
// 웹 페이지를 프로그래밍 방식으로 조작하고 관리할수있는 인터페이스
// HTML 문서의 구조를 트리 구조로 표현, 이를 이용해 js를 사용하여 문서의 내용, 구조, 스타일을 동적으로 변경할수있다.

//! DOM의 정의
// HTML 문서는 트리 구조로 표현
// 노드: 트리의 각 요소(웹 페이지의 각 부분)
// 노드타입: Document, Element, Text, Comment 등

//! DOM 사용 <-- 웹개발의 핵심
let heading = document.getElementById('myHeading');
heading.textContent = 'Hello, World';

//! DOM 요소 선택



//! DOM 요소 이벤트
let button = document.querySelector('button');

button.addEventListener('click', function(){
  alert('Button Clicked!');
});

//? DOM 요소 생성하기
// document.createElement(): 새로운 요소를 생성, 그 요소를 반환

let newDiv = document.createElement('div');

//? DOM 요소에 내용 추가
// textContent, innerHTML 

newDiv.textContent = 'Hello JS';

//? DOM 요소 페이지에 추가
// appendChild(), insertBefor()

let body = document.querySelector('body');
body.appendChild(newDiv);

//? 특정 위치에 DOM 추가
// insertBefore(추가할 요소, 새 요소를 삽입할 위치 바로 앞에 있는 요소)

let firstChild = body.firstChild;
body.insertBefore(newDiv, firstChild);

//? DOM 요소 삭제
// removeChild(삭제할 자식요소 <-- 인수로 받음)
// body.removeChild(newDiv);

//! 문서 속성 조작

// 문서객체.setAttribute(속성이름, 값)
// 특정 속성에 값을 지정

// 문서객체.getAttribute(속성이름)
// 특정 속성을 추출

document.addEventListener('DOMContentLoaded', () => {
  //특정 클래스로 요소를 선택
  const rects = document.querySelectorAll('.rect')
  
  rects.forEach((rect, index) => {
    // index값은 [0, 1, 2, 3]이 반복
    // 1을 더해서 1,2,3,4 가 되도록 지정 후 100을 곱해서 너비를 지정
    const width = (index +1) * 100 // 값 100,200,300,400
    // const src = `url/너비/높이` // `이미지/${width}/250`
    const src = ``
    rect.setAttribute('src', src) // src 속성에 값을 지정
    // HTML 표준에 정의된 속성은 간단한 사용방법을 제공
    // 메소드를 사용하지 않고 온점을 찍고 속성을 바로 읽는것이 가능
    rect.src = src

  })

})

//! 스타일 조작
// 문서 객체의 스타일을 조작 할 때는 style 속성을 사용

// CSS != 자바스크립트의 속성이름 설정방식 다름

// background-color: backgroundColor
// text-align: textAlign
// font-size: fontSize <-- 자바로오면 뒤에께 대문자

//? style객체 조정방식
h1.style.background // 제일 많이 사용
h1.style['backgroundColor']
h1.style['background-color']
