// function logMessage(value: string | number){
//   console.log(value)
// }

// logMessage('1')
// logMessage(1);

let seho: string | number | boolean;

function logMessage(value: string | number){
	// 타입 가드
  if(typeof value === 'string'){
    value.toLocaleLowerCase()
  }
  if(typeof value === 'number'){
    value.toFixed();
  }

  throw new TypeError('value');
}

logMessage('hi')
logMessage(2)
// logMessage(true);


// 유니온 타입, 인터셉터 타입
interface Developer {
  name: string,
  habit: string,
}

interface Person {
  name: string,
  age: number,
}


// function askSomeone(someone: Developer | Person){
//   someone.name;
//   someone.age;
//   someone.habit;
// }

function askSomeone(someone: Developer & Person){
  someone.name;
  someone.age;
  someone.habit;
}

