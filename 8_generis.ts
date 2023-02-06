/**
 * 제네릭
 * 장점 : 함수를 정의할 때 호출한 시점에 타입을 정할 수 있다.
 */
function logText<T>(text: T): T {
  console.log(text);
  return text;
}
logText<string>('하이');

const str = logText<string>('a');
str.split('');

const flag = logText<boolean>(true); 

// 제네릭 타입 제한 2 -정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength('10');
logTextLength({ length: 10})

// 제네릭 타입 제한3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption('name')


// promise 제네릭
function fetchItems(): Promise<string[]>{
  let items: string[] = ['a','b','c','d'];
  return new Promise(function (resolve){
    resolve(items);
  })
}
fetchItems()