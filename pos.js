// 자바스크립트 파일
/*
pseudo code
1.각 카테고리 버튼을 클릭하면 주제에 맞는 메뉴가 나온다.
2.출력 화면에 메뉴를 누를 때마다 같은 메뉴이면 수량이 쌓이고, 다른 메뉴이면 그 밑으로 쌓이게 한다.
3.메뉴가 화면에 채워 질때마다 총 수량, 주문 금액, 청구 금액, 남은 금액의 수가 바뀌어야 한다.
4.만약 수량을 바꾸고 싶으면 +버튼,-버튼을 눌러서 수량을 바꿀 수 있다.(advenced 나중에 번호입력도 만들어보자)
5.주문한 메뉴 하나를 클릭하게 되면 "주문을 취소 하시겠습니까?" 라는 내용을 보여주고 확인을 누르면 주문한 메뉴를 뺀다.(append되어 있던 것을 제거 한다.)
6.만약 다시 주문해야 되는 상황이 생기면 clear를 통해 주문 리스트(cart)에 있는 내용을 모두 지우고 다시 채우게 한다.
*/
let isClick = false;
let category_btn = document.querySelectorAll('.category-btn');
let c_Aid=document.querySelectorAll('.category-btn')[0];
let c_TEA=document.querySelectorAll('.category-btn')[1];
let c_HOT_coffee=document.querySelectorAll('.category-btn')[2];
let c_ICED_coffee=document.querySelectorAll('.category-btn')[3];
c_Aid.onclick = test;
c_TEA.onclick = test;
c_HOT_coffee.onclick = test;
c_ICED_coffee.onclick = test;

/*
for(let i = 0; i<category_btn.length;i++){
	if(category_btn[i].textContent==="Aid"){
    	c_Aid = document.querySelectorAll('.category-btn')[i];
	}else if(category_btn[i].textContent ==="TEA"){
        c_TEA = document.querySelectorAll('.category-btn')[i];
    }else if(category_btn[i].textContent==="HOT coffee"){
        c_HOT_coffee = document.querySelectorAll('.category-btn')[i];
    }else if(category_btn[i].textContent==="ICED coffee"){
        c_ICED_coffee = document.querySelectorAll('.category-btn')[i];
    }
}
*/

//DATA에서 필터링 한 카테고리 id
function filteringCategory(filteredID){
    return DATA.filter((el)=>{
        return el.id === filteredID;
    });
}
function test(){
    if(isClick===false){
        let item = filteringCategory(event.target.textContent);
        let menu_item = document.querySelector('#menu-item');
        for(let i=0; i<item.length;i++){
            let menu_template = document.querySelector('#menu-template');
            let menu = document.importNode(menu_template.content,true);
            menu_item.appendChild(menu);
            let menu_name = document.querySelectorAll('.menu-name');
            let menu_price = document.querySelectorAll('.menu-price');
            menu_name[i].textContent = DATA[i].name;
            menu_price[i].textContent = DATA[i].price;
        }
    }
    isClick = true;
  }
