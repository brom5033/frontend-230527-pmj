console.log("Literal 타입");

// Literal
// : 특정 값으로 제한 된 타입을 나타내는 것

const student = "Jun kuk";
student.toUpperCase();

// 재할당을 할수없는 student 변수의 경우 string 타입보다 더 구체화 된 Jun kuk 이라는 타입을 가짐

let student2 = "eun jin"; // string(일반적인 원시타입)
student2.toUpperCase();

// 유니언 타입에서는 리터럴 타입과 원시 타입을 섞어서 사용가능
let student3: number | "junkuk" | "eunjin";

student3 = 123;
student3 = 21;
student3 = 1;
// student3 = "gum ji"
student3 = "eunjin"

// 리터럴 타입 사용
// : 구체적인 값을 강제 | 특정 값들만 허용하는 API 설계시 유용


//? boolean 리터럴 타입

type YesorNo = "yes" | "no";
let answer: YesorNo;
answer = "yes";
answer = "no";

//? Enum 리터럴 타입

enum Color {
  Red,
  Blue,
  Green,
}