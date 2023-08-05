//! Async & Await
// : ES2017에 도입
// async를 함수에 붙여, 이 키워드가 붙은 함수는 항상 Promise를 반환
// await는 Promise가 resolve될 때까지 기다리는 역할, async 함수 내부에서만 사용 가능

//! async/await 구문 사용법

// async 함수 선언
async function functionName() {
  // await 키워드 사용(해당 Promise가 resolve 될때까지 기다림)
  let value = await promise;
}

function downloadFile(filename: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Downloaded file: ${filename}`);
    }, 2000);
  });
}

async function downloadAllFiles() {
  const file1 = await downloadFile2('file1.txt')
  console.log(file1);
  const file2 = await downloadFile2('file2.txt')
  console.log(file2);
  const file3 = await downloadFile2('file3.txt')
  console.log(file3);
}