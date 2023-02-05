interface User {
  name: string;
  age: number;
}

const ny: User = {
  name: 'nayoung',
  age: 13
}

function getUser(user: User){
  console.log(user)
}

getUser(ny);

interface Sumfunction {
  (a: number, b: number): number
}

var sum1: Sumfunction;
sum1 = function(a: number,b: number): number{
  return a + b;
}

sum1(1,2)

// 인덱싱
interface StringArray {
  [index: number]: string;
}

let array: StringArray = ['a','b','c','d'];
array[0] = '10'

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let object2: StringRegexDictionary = {
  cssFile: /\.css$/,
}

// 인터페잉스 확장(상속)
interface Person { 
  name: string,
  age: number,
}

interface Developer extends Person { 
  habit: string,
}

let kny: Developer = {
  name: 'nayoung',
  habit: 'piano',
  age: 13
}


