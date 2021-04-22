/*query selector*/
function textColorChange(){
  //   let leng = document.getElementsByTagName('p').length;
  //   console.log(leng)
  //   for (var 1 = 0; i < leng; i++){//for 구문을 사용하여 모든 p태크에 적용
  //     document.getElementsByTagName('p')[0].style.color ="red";//getElement's'와 같이 복수면 배열형태로 가져와야한다.
  // }

    let txtNum = document.querySelectorAll(".txt")[0];//querySelectorAll 배열로 받아온다.
    // let txtNum = document.querySelector(".txt")[0]; //document에서 최초선택자가 선택된다.
    // txtNum.style.color = "red";
    //document.getElementsByClassName('txt')
    //css .txt{}

    /*id 선택*/
    let txtNumId = document.querySelector('button');
    txtNumId.style.color = "skyblue";
    txtNumId.style.backgroundColor = "green";
  }
