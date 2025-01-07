console.log('interface.ts');

interface Person {
  name: string
  age: number
  sayHi(): string
}

class Student implements Person {
  name: string
  age: number
  studentId: number

  constructor(name: string, age: number, studentId: number) {
    this.name = name
    this.age = age
    this.studentId = studentId
  }

  sayHi(): string {
    return `Hi, I am ${this.name}, ${this.age} years old`
  }

  introduceYourself() {
    return `Hi, I am ${this.name}, ${this.age} years old, my student ID is ${this.studentId}`
  }
}

let s = new Student('John', 18, 123456)