let step = 0;
let first = '';
let operator = '';
let second = '';
let output = '';

let input = document.querySelector('input');
let grayBtn = document.querySelectorAll('.gray');
let blueBtn= document.querySelectorAll('.blue');
let clearBtn = document.querySelector('.clear');
let resultBtn = document.querySelector('.result');

grayBtn.forEach(node=>(node.addEventListener('click',clickGrayBtn)));
blueBtn.forEach(node=>(node.addEventListener('click',clickBlueBtn)));
clearBtn.addEventListener('click',clickClearBtn);
resultBtn.addEventListener('click',clickResultBtn);


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

function clickBlueBtn(event){
   step = 1;
   operator = event.target.innerText;
   output = output + operator;
   input.value=output;
}

function clickClearBtn() {
   step = 0;
   first = '';
   operator = '';
   second = '';
   output = '';
   input.value = 0;
}

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