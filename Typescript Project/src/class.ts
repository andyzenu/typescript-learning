// not use Person to create object
// it is only for inheritance
abstract class Person {
  readonly name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  abstract sayHi(): string; // abstract method

}

class Student extends Person {
  studentId: number

  constructor(name: string, age: number, studentId: number) {
    super(name, age)
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

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    I am ${s.name}, ${s.age} years old
    <br>
    ${s.sayHi()}
    <br>
    ${s.introduceYourself()}
  </div>
`