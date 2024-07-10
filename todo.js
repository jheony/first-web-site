function isEmpty() { // 빈 문자열인지 확인 후 리스트 생성
    const toDoInput = document.getElementById('todoInput'); // 입력받은 값
    if (toDoInput.value === '') {
        alert('할 일을 입력하세요');
    }
    else
        createTodo();
}
function getDate() {
    const dInput = document.getElementById('dateInput').value;
    document.getElementById('dateOutput').innerText = dInput;
}
function keyCheck() { // 13 : ENTER 키코드, 엔터 입력 시 리스트 생성
    if (event.keyCode === 13)
        isEmpty();
}


function createTodo() { // 리스트 생성 함수

    const toDoList = document.getElementById('todoList'); // 입력받은 값 나열
    const toDoInput = document.querySelector('#todoInput'); // 입력받은 값

    const newLi = document.createElement('li'); // 리스트 요소 생성
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');


    newLi.appendChild(newBtn); // 자식 요소 추가
    newLi.appendChild(newSpan);


    newSpan.textContent = toDoInput.value; // 입력받은 값 추가
    toDoList.appendChild(newLi);

    toDoInput.value = ''; // 문자열 초기화'
    newBtn.addEventListener("click", function () { //완료 버튼 클릭 시
        newLi.classList.toggle('complete');     // complete 클래스 추가
    });

    newLi.addEventListener("drag", function () {
        newLi.remove();
    });

}


