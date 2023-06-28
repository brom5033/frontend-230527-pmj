// 3. 비교연산자

// 두 값을 비교하고, 그 결과를 불리언 값으로 반환합니다.
// 동등(==), 부등(!=, not), 일치(===), 불일치(!==)
// 크다(>), 작다(<), 크거나 같다(>=), 작거나 같다(<=)

let b = 10;
let c = '10';

console.log(b == c); // true (타입을 고려하지 않은 동등 비교)
console.log(b != c); // false (타입을 고려하지 않은 부등 비교)
console.log(b === c); // false (타입을 고려한 일치 비교)
console.log(b !== c); // true (타입을 고려한 불일치 비교)

console.log(b > c);    // false
console.log(b < c);    // false
console.log(b >= c);   // true
console.log(b <= c);   // true

// 4. 논리 연산자

// 논리 연산자는 불리언 값을 연산하는데 사용됩니다.
// 논리 AND(&&), 논리 OR(||), 논리 NOT(!)

let bool1 = true;
let bool2 = false;

console.log(bool1 && bool2); // false
console.log(bool1 || bool2); // true
console.log(!bool1); // false
console.log(!bool2); // true

// ||(OR) <--- 불리언 , 여러개중 하나라도 true면 true 즉 모든값이 false 일때만 false를 반환한다

// && (AND) 모든값이 true 면 true 즉 하나라도 false면 false를 반환한다 

//...|    !(NOT) true면 false false면 true


// || (OR)은 첫번째 true를 발견하는 즉시 평가를 멈춘다 <-- 데이터 소비적음, 복잡한 작업전에 하는게좋음

// &&(AND) 첫번쨰 false를 발견하는 즉시 평가를 멈춘다 <-- 데이터 소비적음, 복잡한 작업전에 하는게좋음

