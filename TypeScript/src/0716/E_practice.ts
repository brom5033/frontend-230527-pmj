interface ReadOnlyPerson {
  readonly name: string;
  age: number;
  celebrate: () => string;
}

let readOnlyPerson: ReadOnlyPerson = {
  name: "boa",
  age: 28,
  celebrate: function() {
    this.age += 1;
    return "생일 축하합니다." + this.name + " 이제" + " 살 입니다.";
  }
}

console.log(readOnlyPerson.celebrate);