//시도 교육청 코드 서울 B10
// 표준 학교 코드 : 7010569

//https://open.neis.go.kr/hub/mealServiceDietInfo
//KEY: e7f5eb3d7bc04c0898a56121aac82cb9
//ATPT_OFCDC_SC_CODE : 시도교육청코드
//SD_SCHUL_CODE 학교 코드
//MMEAL_SC_CODE : 식사코드
//MLSV_YMD : 급식일자
//MLSV_FROM_YMD : 급식 시작 일자
//MLSV_TO_YMD : 급식 종료 일자
//https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010569&MMEAL_SC_CODE=2&MLSV_YMD=20220927&Type=json

// const KEY = "e7f5eb3d7bc04c0898a56121aac82cb9";
// const ATPT_OFCDC_SC_CODE = "B10";
// const SD_SCHUL_CODE = "7010569"
// let MMEAL_SC_CODE = 2; //중식
// let MLSV_YMD = "20221011"; //YYYYMMDD
// let url = `https://open.neis.go.kr/hub/mealServiceDietInfo?` 
//         + `KEY=${KEY}`
//         + `ATPT_OFCDC_SC_CODE = ${ATPT_OFCDC_SC_CODE}`
//         + `SD_SCHUL_CODE = ${SD_SCHUL_CODE}`
//         + `$MLSV_YMD = &{MLSV_YMD}`
//         + `MMEAL_SC_CODE=${MMEAL_SC_CODE}` ;
// //console.log(url);
//실시간 급식 메뉴 가져오기
//.date-grid-container>.grid-item 에 마우스 올려놓으면 (mouseover),handler 함수 호출하기
let dateGridContainerDiv = document.getElementsByClassName("date-grid-container")[0];
let gridItems = dateGridContainerDiv.getElementsByClassName("grid-item");
const handler = (event) => {
    let date = event.target.innerHTML;
    //handler에서 year, month, date, 식사로 url 만들어서 AJAX로 급식 정보 가져오자
    const KEY = "e7f5eb3d7bc04c0898a56121aac82cb9";
    const ATPT_OFCDC_SC_CODE = "B10";
    const SD_SCHUL_CODE = "7010569"
    let MMEAL_SC_CODE = 2; //중식
    let MLSV_YMD = `${year}${month.toString().padStart(2, "0")}${date}`; //YYYYMMDD
    console.log(MLSV_YMD)
    let url = `https://open.neis.go.kr/hub/mealServiceDietInfo` 
            + `?KEY=${KEY}`
            + `&Type=json`
            + `&ATPT_OFCDC_SC_CODE=${ATPT_OFCDC_SC_CODE}`
            + `&SD_SCHUL_CODE=${SD_SCHUL_CODE}`
            + `&MLSV_YMD=${MLSV_YMD}`;
            //+ `&MMEAL_SC_CODE=${MMEAL_SC_CODE}` ;
    console.log(url);
    urlToJSON(url);
}

const urlToJSON = (url) => {
    //XMLHttpRequest 객체 만들자
    let xhr = new XMLHttpRequest();

    //callback
    xhr.onreadystatechange = () => {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            //success
            // console.log("성공" + xhr.response);
            showMenu(xhr.response);
        } else {
            //fail
            // console.log(xhr.status);
        }
    }

    //요청을 보낼 방식 정하자. true: 비동기
    xhr.open("GET", url, true);

    //요청하자
    xhr.send();

    //json 받아서 HTML 조식, 중식, 석식에 보여주자
    const showMenu = (jsonString) => {
        console.log(jsonString);
        //jsonString -> json
        let json = JSON.parse(jsonString);     //"{'key': 'value'}" -> {'key': 'value'}
        console.log(json);
        // console.log(json['mealServiceDietInfo'][1]['row'][0]['DDISH_NM']);  //조식 정보

        try {
            if (json['mealServiceDietInfo'][0]['head'][1]['RESULT']['CODE'] == 'INFO-000') {
                //응답이 제대로 왔으면
                //json -> HTML
                try {
                    breakfast.innerHTML = json['mealServiceDietInfo'][1]['row'][0]['DDISH_NM'];
                } catch {
                    breakfast.innerHTML = "없음";
                }
                try {
                    lunch.innerHTML = json['mealServiceDietInfo'][1]['row'][1]['DDISH_NM'];
                } catch {
                    lunch.innerHTML = "없음";
                }
                try {
                    dinner.innerHTML = json['mealServiceDietInfo'][1]['row'][2]['DDISH_NM'];
                } catch {
                    dinner.innerHTML = "없음";
                }
            } else {
                //응답이 이상하면
                //없음 표시하자
                breakfast.innerHTML = "없음";
                lunch.innerHTML = "없음";
                dinner.innerHTML = "없음";
            }
        } catch {   //문제가 생기면 {'RESULT':}
            breakfast.innerHTML = "없음";
            lunch.innerHTML = "없음";
            dinner.innerHTML = "없음";
        }
    }
    
}

for (let gridItem of gridItems) {
    gridItem.onmouseover = handler;
    // gridItem.addEventListener("mouseover", handler);
}