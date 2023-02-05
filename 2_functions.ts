// 함수의 타입을 정의하는 방식
function sum(a: number, b: number): number{
  return a + b;
}

sum(10, 20);


// 함수의 반환값에 타입을 정의하는 방식
function add(): number{
  return 55;
}

// 함수에 타입을 정의하는 방식
function sum2(a: number, b: number): number{
  return a + b;
}

sum2(1,2)


// 함수의 옵셔널 파라미터
function log(a: string, b?: string){
//
}

log('hi','hello')