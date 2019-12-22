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
let data = [];
let btnArr = ["➕","➖","✖","➗","CLEAR","BACK","7","8","9","4","5","6","1","2","3","0","00"];
painting();

function painting(){
   let body = document.body;
   let div = document.createElement('div');
   div.innerText = "숫자영역";
   body.append(div);
   btnArr.forEach(element=>{
      let button = document.createElement('button');
      button.innerText = element;
      body.append(button);
   });
}

function writeData(){

}

