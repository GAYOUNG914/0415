/*queryselector*/
let num = 0;//이동 증가 값
let directionNum = 1;
function textMove(){
  if( num > 100 || num < 0){
    directionNum = directionNum*(-1);
  }
  console.log(directionNum)
  num += 10*directionNum;
  let moveNum = document.querySelector("#id_2");//class name "txt"인 요소를 가져온다.
  moveNum.style.backgroundColor = "orangered";
  moveNum.style.position = "relative";
  moveNum.style.left = num + "px";
}
