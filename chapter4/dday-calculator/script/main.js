// Scene1.
// DOM 요소 선택(대상)
var startBTN = document.querySelector("#calc")

// 시작하기 버튼 클릭하면, chageScene에 기록한 일을 처리해줘!
startBTN.addEventListener("click", changeScene);

// (누르면) 할일 목록...여러개!
function changeScene(e){
    console.log(e);
    // article 태그 2개를 찾아서 변수에 넣으면? 무슨일!!
    var articleTAGS = document.querySelectorAll("article");
    articleTAGS[0].classList.add("d-none");
    articleTAGS[1].classList.remove("d-none");
}

// Scene2.
// DOM 선택
// 추가1. form 요소를 선택한다.
var ddayFORM = document.querySelector("#ddayForm")

// 추가2. 기존 calcBTN 무쓸모..
// var calcBTN = document.querySelector("#dday_calc");

// 추가3. ddayFORM에서 DOM 선택
// 사실 리셋버튼은 아무것도 안해도 됨..
var resetBTN = ddayFORM.querySelector("#dday_reset");

// 계산하기 버튼 클릭하면, ddayCalc 기록한 일을 처리해줘!
// form은 submit 버튼 눌렀을때 submit 이벤트를 발생

// 추가4. submit 이벤트는 최종적으로 ddayFORM이 감지
ddayFORM.addEventListener("submit", ddayCalc);

// (누르면) 할일 목록...여러개!
function ddayCalc(e){ // e: event의 약자
    e.preventDefault(); // 화면 새로고침 방지
    // 년도 input의 값을 알아오고,
    // 월 input의 값도 알아오고,
    // 일 inpuit의 값을 알아와서
    var userYear = document.querySelector("#user_year").value;
    var userMonth = document.querySelector("#user_month").value;
    var userDate = document.querySelector("#user_date").value;
    
    // console.log(userYear, userMonth, userDate);
    // console.log(typeof userYear, typeof userMonth, typeof userDate);

    var today = new Date();
    
    // console.log("날짜객체에서 받아온 월 : "+nowMonth);
    // 알아온 input의 값으로 알아내야하는 시간,날짜를 생성
    var theDate = new Date(userYear,userMonth-1,userDate);
    
    // 그리고 나서 두 시간,날짜 차이를 계산 .getTime()
    var diffDate = theDate.getTime() - today.getTime();
    
    // 공식 1000x60x60x24 으로 나눠주고
    // 소수점 이하 Math.ceil() 적용해서 정수로 반환하고 result에 담고,
    var result = Math.ceil(diffDate / (1000*60*60*24));
    
    //alert("D-day : "+result); //알려줘
    //팝업형태로 알려줘야지? UI 설계, result를 그 내부에 .innerText로
    // result 값과 문장을 함께 출력! ex>D-3 일남았습니다.
    //팝업.아이디가d_day를 찾아.그리고 내부에 텍스트를 출력해
    var ddayPOP = document.querySelector("#result_pop");
    var ddayTEXT = ddayPOP.querySelector("#d_day");
    ddayTEXT.innerHTML = `<strong>${result}</strong> 일`;
    //팝업.클래스목록.제거("d-none");
    ddayPOP.classList.remove("d-none");
    
    // 나머지 style이 제어(위치,색상,크기..) <-- 문서가 로드되면 이미 스타일시트 다운로드
    
}