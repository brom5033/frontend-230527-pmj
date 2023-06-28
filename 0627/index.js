
// 돈이 5000원 이상 있을때 택시를타고 아니면 걸어간다

if(money > 5000) {
  rideTaxi();
} else {
  Walk();
}


// 확장식 2000원 이상이면 버스를 탄다
// 두번째의 조건을 걸때는 else if 로 계속 늘리면됨


if(money > 5000) {
  rideTaxi();
} else if(money > 2000) {
  rideBus();
} else {
  walk();
}

// if(moeny > 5000) {}  <--- 여기 들어가는 내용은 (moeny > 5000) 이 부분이 참일때 실행시켜줄 내용들 

// console.log();  <-- print랑 같은 효과 콘솔창에 메세지를 출력할때 사용함

let money = 6000

if(money > 5000) {
  console.log("택시를탄다");
}

// if - 조건문 for - 반복문

