//! 프로미스(Promise)
// : 비동기 작업의 결과를 나타내는 객체
// : 비동기 작업의 성공 또는 실패를 처리한다, 결과를 받을수 있도록 도와주는 일을 하는 객체이다

import { isFunctionExpression } from "typescript";

//? Promise 생성
// : Promise 생성자는 비동기 작업을 수행하는 함수를 인자로 받는다.
// : 생성자의 인자로 resolve(성공), reject(실패) 상태를 받는다.

function fetchDataP(): Promise<any> {
  return new Promise((resolve, reject) => {
    // 비동기 작업 수행
    // 작업이 성공적으로 완료: resolve 호출하여 결과 전달
    // 작업 중 에러 발생: reject 를 호출하여 에러 전달
  })
}

function getRandomPromise() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(function() {
      const destiny = Math.random();
      if (destiny > 0.5) {
        // 무작위 수가 0.5보다 클 경우 : 프로미스가 성공적으로 실행: resolve()가 호출
        resolve();
      } else {
        reject();
      }
    })
  })
}

getRandomPromise().then(() => {
  console.log('Promise was resolved');
}).catch(() => {
  console.log('Promise was rejected')
})

//? Promise 체이닝(Chaning)
// : .then()메서드가 또 다른 Promise를 반환하게 해서 비동기
// : .then()의 콜백 함수가 Promise를 반환하면, 다음 .then은 이전 Promise가 resolve 된 이후에 실행

fetchDataP()
  .than((result1) => {
    // result1을 가지고 다음 작업 처리
    // 처리하고 남은 데이터를 result2로 전달
  })
  .than((result2) => {
    // result2를 가지고 다음 작업 처리
    // 마지막 작업일 경우 .catch()를 사용하여 에러처리
  })
  .catch((error) => {
    // 에러처리
    console.log(error);
  })

  let promiseChaining = new Promise<number>((resolve, reject) => {
    // 첫번째 Promise는 1초 후에 1을 resolve하는 객체
    setTimeout(() => resolve(1), 1000);
  })
  .then(result => {
    console.log(result); // 1
    return result * 2; // 이 값을 resolve 하는 새로운 Promise를 반환
  })
  .then(result => {
    console.log(result); // 2
    return result * 3; // 이 값을 resolve 하는 새로운 Promise를 반환
  })
  .then(result => {
    console.log(result); // 6
  })

  console.log(promiseChaining);

//? Promise Chaining 실행 예제
function downloadFile(filename: string): Promise<void> {
  return new Promise((reslove) => {
    setTimeout(() => {
      console.log(`파일 다운로드 완료: ${filename}`);
      resolve();
    }, 2000);
  });
}

function main() {
  downloadFile("file1.txt")
  .then(() => downloadFile("file2.txt"))
  .then(() => downloadFile("file2.txt"))
  .then(() => console.log("모든 파일이 다운로드 되었습니다"))
  .catch((error) => console.log(error));
}

main();

//! Promise.all()
// : 복잡한 상황에서 여러개의 Promise를 동시에 처리하고 싶을때 사용
// : 여러 개의 Promise를 배열로 받아, 모든 Promise가 resolve되면 그 결과를 배열로 반환하는 새로운 Promise를 생성

let promise1 = Promise.resolve(3);
let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'hello')
});
let promise3 = promise.resolve(99);

Promise.all([promise, promise, promise3])
  .then((value) => console.log(value)); // [ 3, 'hello', 99 ]

//! Promise.race()
// : 여러개의 Promise 중 가장 먼저 결과를 반환하는 Promise의 결과만 반환하는 새로운 Promise를 생성

let promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

let promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise4, promise5])
  .then(value => {
    console.log(value); // two
  })