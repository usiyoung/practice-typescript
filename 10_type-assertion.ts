// 타입 단언(type assertion)
let a;
a = 20;
a = 'a';
let b = a as string;

// DOM API 조작
let div = document.querySelector('.container') as HTMLDivElement;
