import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'


const add = (a: number, b: number): number => {
  return a + b;
}

let a: number;
a = 1;

let b: string;
b = 'Hello TS';

let c: boolean;
c = true;

let d: number;
d = add(a, 2);

let gender: "male" | "female";
//gender only can be male or female
gender = "male";

let e: any; //any type , not recommended
e = true;

let u: unknown; //unknown type
u = 'abc';

let f: string; //array of strings

// f = e // it will change the type of f to any
// f = u // throws an error

f = u as string; //type assertion
//f = <string>u; //alternative 
// if (typeof u === 'string') {
//   f = u;
// }

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    ${c ? `<h1>${b}, ${d}</h1>` : ''}
    <div>${gender}</div>
  </div>
`
// there is no return value for this function
function fn () : void {
  console.log('Hello');
  // return undefined;
  // return null;
}

// throw an error
function fn2 () : never {
  throw new Error('Error');
}

function fn3 (a: number) : number | string {
  if (a > 0) {
    return 123;
  } else {
    return 'abc';
  }
}

let obj1: {
  name: string,
  age?: number, //optional
  [propName: string]: any //dynamic property
}

obj1 = {
  name: 'abc',
  age: 123
}

let fn5: (a: number, b: number) => number;
fn5 = function (a, b) {
  return a + b;
}