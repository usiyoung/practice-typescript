/**
 * 숫자형 이넘
 */
var Shoes_num;
(function (Shoes_num) {
    Shoes_num[Shoes_num["Nike"] = 0] = "Nike";
    Shoes_num[Shoes_num["Adidas"] = 1] = "Adidas";
})(Shoes_num || (Shoes_num = {}));
var myShoes_num = Shoes_num.Nike;
console.log(myShoes_num); // 0
/**
 * 문자형 이넘
 */
var Shoes_text;
(function (Shoes_text) {
    Shoes_text["Nike"] = "\uB098\uC774\uD0A4";
    Shoes_text["Adidas"] = "\uC544\uB514\uB2E4\uC2A4";
})(Shoes_text || (Shoes_text = {}));
var myShoes_text = Shoes_text.Nike;
console.log(myShoes_text); // 나이키
/**
 * 이넘 활용 사례
 */
var Answer;
(function (Answer) {
    Answer["yes"] = "Y";
    Answer["no"] = "N";
})(Answer || (Answer = {}));
function askQuestion(answer) {
    if (answer === Answer.yes) {
        console.log('정답입니다.');
    }
    if (answer === Answer.no) {
        console.log('오답입니다.');
    }
}
askQuestion(Answer.yes);
