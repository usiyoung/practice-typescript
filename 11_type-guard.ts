interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Masking'}
}

let tony = introduce();
console.log(tony.age) // 유니온 타입은 공통되는 변수만 참조가능

// 공통된 변수가 아니더라도 유니온 타입안에 있는 변수를 참조할 수 있는 방법
if((tony as Person).age){
  let age = (tony as Person).age;
  console.log(age);
}else if((tony as Developer).skill){
  let skill = (tony as Developer).skill;
  console.log(skill);
}


// 타입 가드
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if(isDeveloper(tony)){
  console.log(tony.skill)
}else{
  console.log(tony.age)
}