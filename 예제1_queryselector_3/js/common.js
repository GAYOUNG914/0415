/*queryselector*/
function innerTxt(){
  // document.querySelector('.content > p').innerHTML = "hello query Selector!!!";
  let ctnTxt = document.querySelector('.inner p').textContent;
  document.querySelector('.inner p').innerText = '';//기존 텍스트 삭제
  document.querySelector('.txt_content').innerText = ctnTxt;// 복사한 텍스트를 특정영에게 추가
}
