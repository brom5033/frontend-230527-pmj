// 타입 명칭(type alias): 이미 존재하는 타입에 다른 이름을 붙여 복잡한 타입을 간단하게 쓰는도구

// 타입 별칭 형태
// type NewType = Type;

// 타입 별칭을 갖게 될 타입(형태에서 Type의 위치)의 자리에는 기본 타입을 포함한 모든 타입이 올수있다

type UUID = string;
type Height = number;
type AnotherUUID = UUID; // 이미 선언된 UUID 와 동일하게 처리

type Animal = [];
type Animals = Animal[];
type User = { // 이름과 높이라는 두개의 속성을 가진 객체 타입으로 처리
  name: string;
  height: number;
}

function getUser(uuid: User) {
  return `${uuid.name}, ${uuid.height}`;
}

let Jeny: User = {
  name: 'Jeny',
  height: 169
};

console.log(getUser(Jeny));

// getUser2(7);

//? 유니언 타입을 활용한 타입 별칭
type MyType = boolean | number | string | null | undefined;

//! 할당 가능성(타입 호환성)
console.log("할당 가능성");

type OddNumber = 1;
const one: OddNumber = 1;
const num: number = one;
// OddNumber 타입은 number타입에 할당가능

type OneDigitOdd = 1 | 3 | 5 | 7 | 9;
const three; OneDigitOdd = 3;
num = three;

const four: number = 4;
num = four;
// const one2: OddNumber = four;
