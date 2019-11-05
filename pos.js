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
let category_btn = document.querySelectorAll('.category-btn');
let isClick = false; // 버튼이 눌렸는지 체크
let carrier; // 랜더링한 메뉴를 담을 변수

//button 클릭 시 menu들을 랜더링함.
category_btn.forEach(function(item,i){
    category_btn[i].onclick = function(){
        if(isClick){ // 처음 랜더링 이후 반복 될 조건문
            clear(carrier); // 카테고리 별 버튼을 한번 클리어 시킨후 랜더링 한다.
            randeringMenu();
        }else{// 처음 랜더링 할 메뉴
            carrier = randeringMenu();
        } 
    }
});

function randeringMenu(){
    isClick = true; // 카테고리 버튼을 눌렀는지 체크 한다.
    let item = filteringCategory(event.target.textContent);
    let menu_item = document.querySelector('#menu-item');
    for(let i=0; i<item.length;i++){//카테고리 클릭 시 메뉴 항목들을 menu-template로 생성한다.
        let menu_template = document.querySelector('#menu-template');
        let menu = document.importNode(menu_template.content,true);
        menu_item.appendChild(menu);
        let menu_name = document.querySelectorAll('.menu-name');
        let menu_price = document.querySelectorAll('.menu-price');
        menu_name[i].textContent = item[i].name;
        menu_price[i].textContent = item[i].price;
    }
    /*
        출력 화면에 클릭한 메뉴를 생성하기 위해 각 class들을 가져온다.
    */
    let menu_btn = document.querySelectorAll('.menu-btn');
    menu_btn.forEach(function(item,i){
        let count = 0;
        menu_btn[i].onclick = function(e){
            count=count+1;
            let show_table = document.querySelector('#show-table');
            let order_template = document.querySelector('#order-template');
            let order = document.importNode(order_template.content,true);
            show_table.appendChild(order);
            let order_num = document.querySelector('.num');
            let order_menu = document.querySelector('.menu');
            let order_quantity = document.querySelector('.quantity').querySelector('.q-value');
            let order_price = document.querySelector('.price');
            order_num.textContent =count;
            order_menu.textContent = e.path[1].childNodes[0].textContent;
            // order_quantity = 
            order_price.textContent = e.path[1].childNodes[1].textContent;
        }
    });
    return menu_item;
}
//DATA에서 필터링 한 카테고리 id
function filteringCategory(filteredID){
    return DATA.filter((el)=>{
        return el.id === filteredID;
    });
}
function clear(target){
    target.innerHTML = "";
}