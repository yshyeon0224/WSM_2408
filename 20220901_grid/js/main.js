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