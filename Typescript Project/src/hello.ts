import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

let a: number;
a = 1;

let b: string;
b = 'Hello TS';

let c: boolean;
c = true;

let d: number;
d = add(a, 2);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    ${c ? `<h1>${b}, ${d}</h1>` : ''}
  </div>
`

function add(a: number, b: number): number {
  return a + b;
}