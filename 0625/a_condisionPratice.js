//조건문 
// 코드의 실행 흐름을 제어하고, 사용자 입력을 검증한다(중요). 접근 권한을 제어 등의 로직에 사용한다

//?if문

//! 입력 값을 검증하는 예제실습

// age 변수에 사용자로 부터 입력 받은 나이를 할당해주고
// 조건문을 사용해서 0 미만이거나, 200초과 일경우 알림 창으로 "Invalid age." 띄우기

let age = prompt("Please enter your age. ");

if (age < 0 || age > 200) {
  aleat("Invalid age.") ;
}

//! 특정 조건에 따른 경고 메세지 출력하는 예제 실습

// 특정 조건이 충족되면 경고 메세지를 출력하는 등의 동작을 하도록 만들기

let temperature = 37.5;
if (temperature> 37.2) {
  console.log("You may have a fever.");
}

---슬랙보고 밑에 작성하기


let job = prompt("What is your job?")

switch (job) {
  case "doctor":
    alert("You heal people.");
    break;
  case "teacher":
    alert("You teach students");
    break;
  case "engineer":
    alert("You desing and build things.");
    break;
  default:
    alert("I don't know about that job");
}

//요일 예제 주어진 날짜의 요일을 반환합니다 
// 0은 일요일 1~5 월~금, 6은 토요일

//조건 연산자 (삼향 연산자)

//!조건에 따른 변수값 할당

// 변수 isPainingCondition에 true 값을 할당.
// 해당 값이 참일경우 "Stay home and read a book" 문자열 값을 activity변수에 할당
// 해당 값이 거짓일 경우 "Go for a walk" 문자열 ㄱ밧을 activity 변수에 할당

// activity 변수를 console 창에 출력

let massege = isPainingCondition ? "Stay home and read a book" : "Go for a walk" ; 

--------------
//정답

let isPainingCondition = true;

let activity = isPainingCondition ? "Stay home and read a book" :  "Go for a walk" 

console.log(activity);
