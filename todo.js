let arr = new Array();
let yymmdd;
function isEmptyAdd() { // 빈 문자열인지 확인 후 리스트 생성
    const toDoInput = document.getElementById('todoInput'); // 입력받은 값
    if (toDoInput.value === '') {
        alert('할 일을 입력하세요');
    }
    else {
        createTodo(toDoInput.value);
        toDoInput.value = ''; // 문자열 초기화' 
        save();
    }
}
function getDate() {
    const dInput = document.getElementById('dateInput').value;
    document.getElementById('dateOutput').innerText = dInput;
    Date = dInput;

}
function keyCheck() { // 13 : ENTER 키코드, 엔터 입력 시 리스트 생성
    if (event.keyCode === 13)
        isEmptyAdd();
}

function save() {
    localStorage.setItem(Date, JSON.stringify(arr));
}
function createTodo(Text) { // 리스트 생성 함수

    const toDoList = document.getElementById('todoList'); // 입력받은 값 나열

    const newLi = document.createElement('li'); // 리스트 요소 생성
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');
    const liId = arr.length + 1;

    newLi.appendChild(newBtn); // 자식 요소 추가
    newLi.appendChild(newSpan);

    newSpan.textContent = Text; // 입력받은 값 추가
    newLi.id = liId;
    toDoList.appendChild(newLi);

    const Obj = { // 로컬저장소에 저장하기 위한 객체
        id: liId,
        Text
    };
    arr.push(Obj);

    newBtn.addEventListener("click", function () { //완료 버튼 클릭 시
        newLi.classList.toggle('complete');     // complete 클래스 추가
    });

    newLi.addEventListener("dblclick", function () {
        newLi.remove();
    });
}
function load(toDoList) {
    const loading = localStorage.getItem(Date);
    if (loading !== null) {
        const json = JSON.parse(loading);
        json.forEach(function (j) {
            createTodo(j.Text, toDoList);
        });
        console.log(Text);
    }
}
function init() {
    const toDoList = document.getElementById('todoList');

    for (const child of toDoList.childNodes) {
        toDoList.removeChild(child);
    }
    arr = [];

    load(toDoList);
}


