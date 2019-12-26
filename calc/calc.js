let step = 0;        //연산 기호 사용 유무
let first = '';      //첫번째 숫자
let operator = '';   //연산 기호
let second = '';     //두번째 숫자
let output = '';     //출력

let input = document.querySelector('input');
let grayBtn = document.querySelectorAll('.gray');
let blueBtn= document.querySelectorAll('.blue');
let clearBtn = document.querySelector('.clear');
let resultBtn = document.querySelector('.result');

grayBtn.forEach(node=>(node.addEventListener('click',clickGrayBtn)));
blueBtn.forEach(node=>(node.addEventListener('click',clickBlueBtn)));
clearBtn.addEventListener('click',clickClearBtn);
resultBtn.addEventListener('click',clickResultBtn);

// gray 버튼(숫자) 함수
function clickGrayBtn(event){
   if(step===0){
      first = Number(first + event.target.innerText);
      output = first;
   }else{
      second = Number(second + event.target.innerText);
      output = output + event.target.innerText;
   }

   input.value=output;
}

//blue 버튼(연산 기호) 함수
function clickBlueBtn(event){
   step = 1;
   operator = event.target.innerText;
   output = output + operator;
   input.value=output;
}

//clear 버튼 함수
function clickClearBtn() {
   step = 0;
   first = '';
   operator = '';
   second = '';
   output = '';
   input.value = 0;
}

//출력(=) 버튼 함수
function clickResultBtn(){
   if(operator==='+'){
      input.value=first + second;
   }else if(operator==='-'){
      input.value=first - second;
   }else if(operator==='x'){
      input.value=first * second;
   }else if(operator==='/'){
      input.value=first / second;
   }
}