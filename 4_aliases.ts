/**
 * type vs interface 차이점
 * 가장 큰 차이점은 확장성 유무
 * type은 type을 추론할 수 있는 인터페이스를 제공
 *
 */

// interface Person2 {
//   name: string,
//   age: number,
// }

type Person2 = {
  name?: string,
  age?: number,
}
