let quizzData = [
{
    title: "Why We Use <br> Element",
    answer_1: "To Make Text Bold",
    answer_2: "To Make Text Italic",
    answer_3: "To Add Breakline",
    answer_4: "To Create Horizontal Line",
    right_answer: "To Add Breakline",
    correct:"c"
},
{
    title: "Is <img> Element Has Attribute href",
    answer_1: "Yes",
    answer_2: "No Its For Anchor Tag <a>",
    answer_3: "All Elements Has This Attribute",
    answer_4: "Answer 1 And 3 Is Right",
    right_answer: "No Its For Anchor Tag <a>",
    correct:"b"
},
{
    title: "How Can We Make Element Text Bold",
    answer_1: "Putting It Inside <b> Tag",
    answer_2: "Putting It Inside <strong> Tag",
    answer_3: "Customizing It With Font-Weight Property In CSS",
    answer_4: "All Answers Is Right",
    right_answer: "All Answers Is Right",
    correct:"d"

},
{
    title: "What Is The Right Hierarchy For Creating Part Of Page",
    answer_1: "<h2> Then <p> Then <h1> Then <p> Then <h3> Then <p> Then <img>",
    answer_2: "<h1> Then <p> Then <h3> Then <p> Then <h2> Then <p> Then <img>",
    answer_3: "<h2> Then <p> Then <h3> Then <p> Then <h1> Then <p> Then <img>",
    answer_4: "All Solutions Is Wrong",
    right_answer: "All Solutions Is Wrong",
    correct:"d"

},
{
    title: "How Can We Include External Page Inside Our HTML Page",
    answer_1: "By Using Include in HTML",
    answer_2: "By Using Load In HTML",
    answer_3: "By Using iFrame Tag",
    answer_4: "All Solutions Is Wrong",
    right_answer: "By Using iFrame Tag",
    correct:"c"

},
{
    title: "What Is The Tag That Not Exists in HTML",
    answer_1: "<object>",
    answer_2: "<basefont>",
    answer_3: "<abbr>",
    answer_4: "All Tags Is Exists in HTML",
    right_answer: "All Tags Is Exists in HTML",
    correct:"d"

},
{
    title: "How We Specify Document Type Of HTML5 Page",
    answer_1: "<DOCTYPE html>",
    answer_2: "<DOCTYPE html5>",
    answer_3: "<!DOCTYPE html5>",
    answer_4: "<!DOCTYPE html>",
    right_answer: "<!DOCTYPE html>",
    correct:"d"

},
{
    title: "What Is The Element Thats Not Exists in HTML5 Semantics",
    answer_1: "<article>",
    answer_2: "<section>",
    answer_3: "<blockquote>",
    answer_4: "<aside>",
    right_answer: "<blockquote>",
    correct:"c"

},
{
    title: "In HTML Can We Use This Way To Add Attributes",
    answer_1: "<div class='class-name'>",
    answer_2: "<div class=class-name>",
    answer_3: "<div class=\"class-name\">",
    answer_4: "All Is Right",
    right_answer: "All Is Right",
    correct:"d"

}
]

let question = document.querySelector(".Question");
let answer_1 = document.querySelector(".a");
let answer_2 = document.querySelector(".b");
let answer_3 = document.querySelector(".c");
let answer_4 = document.querySelector(".d");
let submitBtn = document.querySelector(".submit_button");
let answers = document.querySelectorAll(".answer");
let QuizzArea = document.querySelector(".quizApp");
let result = document.querySelector(".result");
let relodeBtn = document.querySelector(".result span");

let counterQuetion = 0;
let score = 0;

quizDAta()//call function to select first quetion

function quizDAta(){//function that conntain Quetion from Quizz
    deselectAnswers()
    let currentQuetion = quizzData[counterQuetion]
    question.innerText = currentQuetion.title;
    answer_1.innerText = currentQuetion.answer_1;
    answer_2.innerText = currentQuetion.answer_2;
    answer_3.innerText = currentQuetion.answer_3;
    answer_4.innerText = currentQuetion.answer_4;
}

function getSelected() {
    let answer = undefined;

    answers.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
        answers.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

function resultShow(){
    let myPara = document.createElement("p")
    let resultNo = document.createTextNode(`You Got Score ${score} From ${quizzData.length}`);
    myPara.appendChild(resultNo)
    result.appendChild(myPara)
    result.classList.add("hello") ;
}

submitBtn.onclick = function(){
    let ans = getSelected()
    if(ans){
        if(ans === quizzData[counterQuetion].correct){
            score ++;
        }
        counterQuetion ++ ;
        if(counterQuetion < quizzData.length ){
            quizDAta();
        }else{
            QuizzArea.remove()
            resultShow()
            relodeBtn.onclick=function(){
                location.reload()
            }
            console.log(`You Got Score ${score} From ${quizzData.length}`);
        }
    }
}
