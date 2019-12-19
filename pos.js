// selector
let orderContentArea = document.querySelector('#orderContent');
let orderTotalArea = document.querySelector('#orderTotal');
let menuCategory = document.querySelectorAll('#menuCategory>button');
let menuArea = document.querySelector('#menuItems');

//event
menuCategory.forEach(node=>node.addEventListener('click',clickedCategoryFn));

//카테고리 클릭 이벤트 함수
function clickedCategoryFn(event){
   //DATA[index].name의 값을 얻기 위해 클릭된 카테고리의 클래스 이름을 가져온다.
   let clickedCategoryName = event.target.className;
   //기존의 메뉴 클리어
   clear(menuArea);
   createMenuFn(clickedCategoryName);
}

//메뉴 생성 함수
function createMenuFn(categoryName){
   let menus = DATA.filter(menu=>(menu.id===categoryName));
   menus.forEach((element)=>{
      let button = document.createElement('button');
      button.innerText = element.name;
      menuArea.append(button);
   });
   let menuItems = document.querySelectorAll('#menuItems>button');
   menuItems.forEach(node=>node.addEventListener('click',clickedMenuFn));

}

//메뉴를 클릭하면 카트에 담는 함수
function clickedMenuFn(event){
   let clickedMenuName = event.target.textContent;
   let menuInfo = DATA.filter(info=>(info.name===clickedMenuName))[0];//배열을 벗겨낸 객체 데이터 할당.
   let cartInfo = cart.find(info=>info.name===menuInfo.name);
   if(!cartInfo){//카트에 메뉴 이름이 없으면
      menuInfo["num"] = cart.length+1;
      menuInfo["quantity"] = 1;
      cart.push(menuInfo); //번호와 수량을 담은 객체를 카트배열에 푸시
      createList();
      sumPriceFn(menuInfo);
   }else{//카트에 메뉴 이름이 있으면
      addQuantity(cartInfo);
      listReload();
      sumPriceFn(cartInfo);
   }
   orderTotalLenderFn();
}

//리스트 생성 함수
function createList(){
   let div = document.createElement('div');
   orderContentArea.append(div);
   for(let i=0; i<4; i++){
      let span = document.createElement('span');
      div.append(span);
   }
   let spans = document.querySelectorAll('#orderContent>div')[cart.length-1].children;
      spans[0].innerText = cart[cart.length-1].num;
      spans[1].innerText = cart[cart.length-1].name;
      spans[2].innerText = cart[cart.length-1].price;
      spans[3].innerText = cart[cart.length-1].quantity;
}

//해당 카트의 수량 증가 함수
function addQuantity(cartInfo){
   cartInfo.quantity = cartInfo.quantity+1;
   document.querySelectorAll('#orderContent>div').forEach((list)=>{
      if(list.children[1].textContent===cartInfo.name){
         list.lastElementChild.innerText = cartInfo.quantity;
      }
   });
}

//리스트 리로드 함수
function listReload(){
   let backUpList = orderContentArea.innerHTML;
   clear(orderContentArea);
   orderContentArea.innerHTML = backUpList;
}

//클릭한 메뉴에 대한 총 금액 연산 함수
function sumPriceFn(info){
   let currentSumPrice = 0;
   currentSumPrice= currentSumPrice + info.price*info.quantity;
   info["sumPrice"]=currentSumPrice;   //cart에 키:값으로 저장
}

//총 금액 과 총 수량 렌더 함수
function orderTotalLenderFn(){
   let totalQuantity = cart.map(x=>x.quantity).reduce((acc,cur)=>(acc+cur));
   let totalPrice = cart.map(x=>x.sumPrice).reduce((acc,cur)=>acc+cur);
   orderTotalArea.querySelectorAll('p')[0].textContent = totalPrice;
   orderTotalArea.querySelectorAll('p')[1].textContent = totalQuantity;
   
}

//클리어 함수
function clear(area){
   area.innerHTML = "";
}