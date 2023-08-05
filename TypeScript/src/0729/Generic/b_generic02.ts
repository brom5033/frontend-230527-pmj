//! 제네릭 인터페이스

interface GenericIdentity<T> {
  (arg: T): T;
}

function idenetity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = idenetity;

//! 제네릭 클래스

class GenericNumber<T> {
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {return x + y};

console.log(myGenericNumber.add(myGenericNumber.zeroValue, 10));

let string = new GenericNumber<string>();
string.zeroValue = "hello";
string.add = function(x, y) = { return x + y };

console.log(string.add(string.zeroValue, "typescript"));