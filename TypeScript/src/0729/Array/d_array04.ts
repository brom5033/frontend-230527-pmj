//! 배열 인터페이스

// 각 요소가 name과 age를 속성으로 가지는 객체로 이루어진 배열을 정의
interface Student {
  name: string;
  age: number;
}

// 해당 인터페이스를 준수하는 객체만을 요소로 가질 수 있다.
let people: Student[] = [
  { name: "sumin", age: 90 },
  { name: "sam", age: 80 },
  { name: "junsu", age: 70 }
];

//! 배열 매소드에 배열 인터페이스 적용

function filterStudent(student: Student[], ageLimit: number): Student[] {
  return student.filter(student => student.age > ageLimit);
}

const ageLimit = 75;
const filterStudents = filterStudent(people, ageLimit);

console.log(filterStudent);