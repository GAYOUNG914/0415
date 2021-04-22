// attribute
// alert('test')
let ahref = document.querySelector('h1 a').getAttribute('href');
let x = document.querySelector('div').getAttribute('id');
console.log(document.querySelectorAll('div')[0]);
/*container 자식요소중 div의 class 속성의 값을 가져오시오.*/
let className = document.querySelector('.container > div').getAttribute('class');
console.log(ahref);


/*로고 href 속성 값 가져오기*/
document.querySelector('h1 a').setAttribute('href','http://daum.net');
/*속성 title의 값을 '다음으로 바로기기' 입력*/
document.querySelector('h1 a').setAttribute('title','다음으로 바로기기');
/*a tag에 class 'link' 추가*/
document.querySelector('h1 a').setAttribute('class','link');

let getHref = document.querySelector('h1 a').getAttribute('href');
console.log(getHref);

let hrefSplit = getHref.split('//');
let hrefTxt = hrefSplit[1].split('.');
console.log(hrefTxt[0])
//alert 으로 '현재 방문하신 사이트는 daum 입니다.'
alert("현재 방문하신 사이트는 "+hrefTxt[0]+" 입니다.");
