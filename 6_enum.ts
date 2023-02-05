/**
 * 숫자형 이넘
 */
enum Shoes_num {
  Nike,
  Adidas
}

let myShoes_num = Shoes_num.Nike;

console.log(myShoes_num) // 0

/**
 * 문자형 이넘
 */
 enum Shoes_text{
  Nike = '나이키',
  Adidas = '아디다스'
}

let myShoes_text = Shoes_text.Nike;

console.log(myShoes_text) // 나이키

/**
 * 이넘 활용 사례
 */
enum Answer {
  yes = 'Y',
  no = 'N'
}
function askQuestion(answer: string){
  if(answer === Answer.yes){
    console.log('정답입니다.')
  }
  if(answer === Answer.no){
    console.log('오답입니다.')
  }
}
askQuestion(Answer.yes)