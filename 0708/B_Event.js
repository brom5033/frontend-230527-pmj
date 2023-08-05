// 이벤트 발생 객체

// document.addEventListener('DOMContentLoaded', () => {
//   const textarea = document.querySelector('textarea')
//   const h1 = document.querySelector('h1')

//   textarea.addEventListener('keyup', (event) => {
//     const length = textarea.value.length
//     h1.textContent = `글자수 : ${length}`
//   })
// })

// 이벤트 리스너 내부에서 변수에 접근할수 없는 경우
// 아래 코드는 작동하지 X
// const listener =  (event) => {
//   const length = textarea.value.length
//   h1.textContent = `글자수 : ${length}`
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const textarea = document.querySelector('textarea')
//   const h1 = document.querySelector('h1')

//   textarea.addEventListener('keyup', listener)
//   })

// 이벤트를 발생시킨 객체(현재 코드에서는 textarea)에 접근 할수있는 방법

//? event.currentTarget 속성 <- 많이사용
// 해당 속성의 경우 화살표 함수와 function 키워드 함수에 모두 사용 가능

//? this 키워드 <- 많이사용
// function키워드 함수 사용시에만 사용가능
// 화살표 함수 사용 불가능

let h1; // h1을 전역변수로 변경
const listener =  (event) => {
  const length = event.currentTarget.value.length
  // 현재 블록에서는 textarea 변수를 사용할수 없다 (외부에서 지정되서)
  h1.textContent = `글자수 : ${length}`
}

document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.querySelector('textarea')
  const h1 = document.querySelector('h1')

  textarea.addEventListener('keyup', listener)
  })