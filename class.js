/**
 * Babel을 사용하면 class 문법은 생성자 함수로 변환된다.
 * class 문법이 나오기전까지는 생성자 함수로 프로토타입을 이용한 상속등을 구현할 수 있었다.
 */
// 생성자 함수
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// class 문법 : ES2015 (ES6)
class Person {
  constructor(name, age){
    console.log('생성 되었습니다.');
    this.name = name;
    this.age = age;
  }
}
let ny = new Person('나영', 13);
console.log(ny);

// 자바스크립트 프로토타입 (feat. Built-in Javascript API or Javascript Native API)
let capt = {name: 'capt', age: 13};
let admin = {};

admin.__proto__ = capt;
console.log(admin.name);

admin.habit = 'piano';
console.log(admin.name)

