// 타입 추론 기본1
let a = 'abc';

function getB(a = 10){
  let b = '10';
  return a + b;
}

10 + '10' // 1010

// 타입 추론 기본 2 
interface Dropdown<T> {
  value: T;
  title: string;
}

let ShoppingItem: Dropdown<string> = {
  value: 'bag',
  title: '가방',
}