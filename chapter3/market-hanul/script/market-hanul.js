var loginForm = document.querySelector("#login-form");
var loginBTN = loginForm.querySelector("#go_login");
var u_id = document.querySelector("#user_id");
var u_pw = document.querySelector("#user_pw");

var admin_id = "super7797", admin_pw = "super7797!";
// 실제 백엔드 개발자, 웹프로그래머 등은 DB에서 admin id,pw를 가져와서 비교!

loginForm.addEventListener("submit", submitFunc);

function submitFunc(e){
    e.preventDefault(); // 폼 새로고침을 막아줌!! (이벤트 전파를 막는것!)
    //console.log(u_id.value, u_pw.value); // 폼에 입력한 value를 확인!
    // 교재 p.70 중첩 if 구문으로 값을 비교하고!
    if(admin_id === u_id.value) {
        if(admin_pw === u_pw.value) {
            alert("관리자님, 로그인 환영합니다.\n관리자 페이지로 이동합니다.")
            location.href="/admin_only"; // 지금은 없지만, 실제 존재하는 URL
        } else {
            alert("아이디 또는 비밀번호를 확인하세요");
            location.reload(); // 페이지 새로고침(F5) 기능
        }
    } else {
        alert("아이디 또는 비밀번호를 확인하세요");
            location.reload(); // 페이지 새로고침(F5) 기능
    }
}