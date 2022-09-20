function test() {
    // 현재 년, 월 알아내기
    let today = new Date();

    year = today.getFullYear();
    month = today.getMonth() + 1;
    date = today.getDate();
    day = today.getDay(); //0:일 1:월 2:화 3:수 4:목 5:금 :토

    // 현재 월 마지막 날
    let lastDate = new Date (year, month, 0).getDate();
    // 현재 월 1일은 무슨 요일
    let firstDay = new Date (year, month, 1).getDay();
    console.log(`${year}년 ${month}월 ${date}일 ${lastDate}`);
}

//오늘 날짜 구하기
let today = new Date();
//연
let year = today.getFullYear();
//월
let month = today.getMonth();
month++;
//일
let date = today.getDate();
//요일
let day = today.getDay();
let days = ['일', '월', '화','수','목','금','토']
console.log(`${year}년 ${month}월 ${date}일 ${days[day]}요일`)

//1일: 연, 월, 1
year = 2005;
month = 2;
let firstDate = new Date(year, month-1, 1);
//요일
let firstDay = firstDate.getDay();
console.log(days[firstDay])
//1일을 html -> js
let firstDiv = document.getElementsByClassName("first")[0]
//grid-column-start: 요일 +1
firstDiv.style.gridColumnStart = firstDay + 1;