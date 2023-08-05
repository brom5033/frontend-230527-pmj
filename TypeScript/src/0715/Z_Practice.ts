

type Status = 'student' | 'teacher'

type Person = {
  name: string;
  age: number;
}

type Detials = {
  status: Status;
  subject: string;
}

type SchoolPerson = Person & Detials;

type SchoolPersonOrString = SchoolPerson | string;

function process(input: SchoolPersonOrString): string {
  return typeof input === "string" 
  ? `Hello, ${input}!` // input 이 문자열일 경우
  : `${input.name} is a ${input.status} who teaches ${subject}. They are ${age} years old.`;
}