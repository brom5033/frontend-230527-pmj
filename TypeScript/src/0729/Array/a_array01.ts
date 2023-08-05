//! 배열 (Array)
// : 연관된 데이터를 연속적인 메모리에 저장하고
// : 각 데이터를 인덱스를 통해 참조하는 자료 구조

//! 배열 선언(2가지)
//? Type[]
let array1: number[] = [1, 2, 3];

//? Array<Type>
let array2: Array<number> = [1, 2, 3];

// array1.push('4'); Error - 타입 오류

//! 다차원 배열 (2차원 이상의 배열)

// 2차원 배열: Type [][]
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// metrix [0][2] = 3
// metrix [1][1] = 5
