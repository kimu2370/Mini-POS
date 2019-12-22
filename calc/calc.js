/* 
조건
>  각 버튼마다 그 숫자에 해당하는 또는 그 기능에 해당하는 
   키를 누르면 숫자영역에 계산된 결과가 나오게 하려한다.

   7x3 계산기 만들기
   |숫자 영역|
   |+  -  x|
   |/ 취소 <-|
   |7  8  9|
   |4  5  6|
   |1  2  3|
   |  0  00|
*/ 
let calcArea = document.querySelector('body div:nth-child(1)');
let buttons = document.querySelectorAll('button');

buttons.forEach(button=>button.addEventListener('keydown',inputBtnFn));

function inputBtnFn(e){
   let key = document.querySelector(`button[data-key="${e.key}"]`);
   key.at
   console.log(key);
}
