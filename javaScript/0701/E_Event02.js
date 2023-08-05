// 자바 스크립트 키보드와 마우스 이벤트

//! 키보드 이벤트

// keydown: 키를 누를때 발생
// keyup: 키를 떼면 발생
// keypress: 키를 누르는 동안 발생

// addEventLister 메서드를 사용하여 키보드 이벤트 핸들러를 등록

//! 마우스 이벤트

// click: 마우스 버튼을 클릭할때 발생
// dblclick: 마우스 버튼을 빠르게 두번 클릭할때 발생
// mousemove: 마우스 버튼을 움직일때 발생
// mousedown: 마우스 버튼을 누를때 발생
// mouseup: 마우스 버튼을 떼면 발생

// addEventLister 메서드를 사용하여 마우스 이벤트 핸들러를 등록

window.addEventListener('click', function(event) {
  console.log('마우스를 클릭했습니다: ' + event.clientX + event.clientY)
}
)