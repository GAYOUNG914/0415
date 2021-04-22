// attribute
let num = Math.random()*10 + 1;//random : 반환하는 값은 0~1미만,0 ~ 0.9999
num = Math.floor(num);//소수점 아래 버림
console.log(num)
// num = Math.ceil(num);//소수점 아래 올림
// console.log(num)
//
// num = Math.round(num);//소수점 아래 반올림
// console.log(num)
function changeColor(){
  document.querySelectorAll('div')[num-1].setAttribute('class','selected');
}
