const quizDB = [{
    question: "Q1: Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    ans: "ans4",
},
{
    question: "Q2: What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    ans: "ans1",
},
{
    question: "Q3: What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    ans: "ans2",
},
{
    question: "Q4: What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    ans: "ans2",
}
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer')
const showScore = document.querySelector('#showScore')

let questionCount = 0;
let score=0;

const loadQuestion = ()=>{
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = ()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
        
    });
    return answer;
};

const deselectAll=()=>{
    answers.forEach((curAnsElem)=> curAnsElem.checked=false)
}

submit.addEventListener('click', ()=>{
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);


    if(checkAnswer === quizDB[questionCount].ans){
        score++;
    };
    questionCount++;

    deselectAll();


    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick = "location.reload()">Play Again</button>`;
        showScore.classList.remove('scoreArea');
    }
});



