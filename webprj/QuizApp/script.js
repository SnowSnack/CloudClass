//문제를 정의
const quizData = [
    {
        question: "넓은 의미의 HTML5에 포함되지 않는 것은?", 
        "a": "HTML5", 
        "b": "CSS3", 
        "c": "JavaScript", 
        "d": "Java", 
        correct: "d",
    }, 
    {
        question: "문제2내용", 
        a: "보기1", 
        b: "보기2", 
        c: "보기3", 
        d: "보기4", 
        correct: "d",
    }, 
    {
        question: "문제3내용", 
        a: "보기1", 
        b: "보기2", 
        c: "보기3", 
        d: "보기4", 
        correct: "d",
    }        
];

// 화면의 DOM 엘리먼트를 변수에 할당
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
// const questionEl = document.querySelector("#question");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

// 현재 제시된 문제 번호를 가지고 있는 변수를 선언
let currentQuiz = 0;

loadQuiz();

// quizData 배열에서 순번에 해당하는 문제를 가져와서 출력하는 함수
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    console.log(currentQuizData);

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// 사용자가 선택한 보기 번호를 반환하는 함수
function getSelected() {
    let answerNo;
    answerEls.forEach(ans => {
        if (ans.checked) {
            answerNo = ans.id;
        }
    })
    return answerNo;
}

// 보기를 선택 해제해 주는 함수
function deselectAnswers() {
    answerEls.forEach(ans => {
        ans.checked = false;
    });
}

// 사용자가 맞춘 정답 개수
let score = 0;

// 전송 버튼을 클릭했을 때 동작
submitBtn.addEventListener("click", () => {
    // 사용자가 선택한 보기 번호를 가져옴
    const answer = getSelected();

    if (answer) {
        // 사용자 선택이 정답인 경우 맞춘 개수를 증가
        if (answer == quizData[currentQuiz].correct) {
            score ++;
        }

        // 다음 문제
        currentQuiz ++;

        // 마지막 문제가 아닌 경우, 다음 문제를 출력
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // 마지막 문제인 경우, 정답 결과를 출력
            quiz.innerHTML = 
            `
                <h2>당신은 전체 ${quizData.length} 문제 중 ${score} 문제를 맞췄습니다.</h2>
                <button onclick="location.reload()">다시 문제 풀이</button>
            `;
        }
    }
});