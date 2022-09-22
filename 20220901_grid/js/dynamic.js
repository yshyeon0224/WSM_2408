const setcalendar = (year, month) => {
    //년, 월, 1
    let firstDate = new Date(year, month-1, 1);
    //요일
    let firstDay = firstDate.getDay();

    //마지막 날짜
    let lastDate = new Date (year, month, 0).getDate();

    console.log(`${year}-${month} ${firstDay}요일 ${lastDate}`)

    //제목 표시
    //HTML id -> js변수
    const yearSpan = document.getElementById("year");
    const monthSpan = document.getElementById("month");
    //js.innerHTML
    yearSpan.innerHTML = year;
    monthSpan.innerHTML = month;


    //1~lastDate까지 반복
    const dateGridContainerDiv = document.getElementsByClassName("date-grid-container")[0];

    for (let i = 1; i<=lastDate; i++) {
        //<div class ="grid-item">$</div>
        //새로운 element 
        let newElem = document.createElement("div");
        //element
        newElem.classList.add("grid-item");
        //
        newElem.innerHTML = i
        dateGridContainerDiv.appendChild(newElem);

    }

    let firstDateDiv = dateGridContainerDiv.getElementsByClassName("grid-item")[0];
    firstDateDiv.style.gridColumnStart = firstDay + 1;

    ///1일: grid-column-start: 요일+1
}

//오늘 날짜
let today = new Date();
//년
let year = today.getFullYear();
//월
let month = today.getMonth();
month ++;

setcalendar (year, month)