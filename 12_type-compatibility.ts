/**
 * 타입 호환
 */
interface Developer { 
  name: string;
  skill: string;
}

// interface Person1 { 
//   name: string;
// }

class Person1 {
  name: string;
}

let developer: Developer;
let person = new Person1();

person = developer 

// 함수 (구조적으로 크다 -> 옵션이 더 많거나, 타입이나 정의가 더 많이 있는 것)
let add = function(a: number){
  // ...
}
let sum = function(a: number,b: number){
  // ...
}
sum = add;

// 제네릭
interface Empty<T>{
  // ...
}
let empty1: Empty<string>;
let empty2: Empty<string>;
empty1 = empty2;

interface NotEmpty<T>{
  data: T;
}
let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
notempty1 = notempty2;
notempty2 = notempty1;


