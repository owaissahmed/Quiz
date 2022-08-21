var questions = [
    {
        question: "Q1 : What Does HTML Stand For?",
        option1: "Hyper Text Markup Language",
        option2: "Home Tool Markup Language",
        option3: "Hyperlinks and Text Markup Language",
        option4: "How Text Markup Language",
        ans: "ans1",
    },
    {
        question: "Q2 : Who is making the Web standards?",
        option1: "Mozilla",
        option2: "Google",
        option3: "The World Wide Web Consortium",
        option4: "Microsoft",
        ans: "ans3",
    },
    {
        question: "Q3 : Choose the correct HTML element for the largest heading:",
        option1: "heading",
        option2: "heading2",
        option3: "<'h1'>",
        option4: "heading6",
        ans: "ans3",
    },
    {
        question: "Q4 : What is the correct HTML element for inserting a line break?",
        option1: "<'br'>",
        option2: "lb",
        option3: "break",
        option4: "bra",
        ans: "ans1",
    },
    {
        question: "Q5 : What is the correct HTML for adding a background color?",
        option1: "body bg='yellow'",
        option2: "<'body style='background-color:yellow;''>",
        option3: "yellow",
        option4: "<'body background-color='yellow''>",
        ans: "ans2",
    },
    {
        question: "Q6 : Choose the correct HTML element to define important text:",
        option1: "i",
        option2: "<'strong'>",
        option3: "important",
        option4: "b",
        ans: "ans2",
    },
    {
        question: "Q7 : Choose the correct HTML element to define emphasized text:",
        option1: "<'em'>",
        option2: "i",
        option3: "italic",
        option4: "abr",
        ans: "ans1",
    },
    {
        question: "Q8 : Which character is used to indicate an end tag?",
        option1: "/",
        option2: ">",
        option3: "*",
        option4: "^",
        ans: "ans2",
    },
    {
        question: "Q9 : Which of these elements are all <'table'> elements?",
        option1: "<'table'> <'tr'> <'td'>",
        option2: "<'table'> <'td'> <'tr'>",
        option3: "<'table'> <'tr'> <'tt'>",
        option4: "<'thead'> <'body'> <'tt'>",
        ans: "ans1",
    },
    {
        question: "Q10 : How can you make a numbered list?",
        option1: "<'dl'>",
        option2: "<'ol'>",
        option3: "<'list'>",
        option4: "<'ul'>",
        ans: "ans2",
    },
    {
        question: "Q11 : How can you make a bulleted list?",
        option1: "<'list'>",
        option2: "<'ol'>",
        option3: "<'dl'>",
        option4: "<'ul'>",
        ans: "ans4",
    },
    {
        question: "Q12 : What is the correct HTML for making a checkbox?",
        option1: "<'input type='checkbox''>",
        option2: "<'check'>",
        option3: "<'input type='check''>",
        option4: "<'checkbox'>",
        ans: "ans1",
    },
    {
        question: "Q13 : What is the correct HTML for making a text input field?",
        option1: "<'input type='text''>",
        option2: "<'textfield'>",
        option3: "<'input type='textfield''>",
        option4: "<'text'>",
        ans: "ans1",
    },
    {
        question: "Q14 : What is the correct HTML for making a drop-down list?",
        option1: "<'input type='dropdown''>",
        option2: "<'select'>",
        option3: "<'input type='list''>",
        option4: "<'list'>",
        ans: "ans2",
    },
    {
        question: "Q15 : Which HTML element defines the title of a document?",
        option1: "<'meta'>",
        option2: "<'head'>",
        option3: "<'title'>",
        option4: "<'body'>",
        ans: "ans3",
    },
    {
        question: "Q16 : Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed",
        option1: "title",
        option2: "alt",
        option3: "longdesc",
        option4: "src",
        ans: "ans2",
    },
    {
        question: "Q17 : Which doctype is correct for HTML5?",
        option1: "<'!DOCTYPE html'>",
        option2: "<'!DOCTYPE HTML5'>",
        option3: "<'!DOCTYPE html public'>",
        option4: "<'!DOCTYPE html5i'>",
        ans: "ans1",
    },
    {
        question: "Q18 : Which HTML element is used to specify a footer for a document or section?",
        option1: "<'footer'>",
        option2: "<'bottom'>",
        option3: "<'section'>",
        option4: "<'margin'>",
        ans: "ans1",
    },
    {
        question: "Q19 : What is the correct HTML element for playing video files?",
        option1: "<'video'>",
        option2: "<'media'>",
        option3: "<'movie'>",
        option4: "<'film'>",
        ans: "ans1",
    },
    {
        question: "Q20 : What is the correct HTML element for playing audio files?",
        option1: "<'sound'>",
        option2: "<'audio'>",
        option3: "<'mp3'>",
        option4: "<'mp4'>",
        ans: "ans2",
    },
    {
        question: "Q21 : In HTML, onblur and onfocus are:",
        option1: "HTML Elements",
        option2: "Event Attributes",
        option3: "Style Attributes",
        option4: "Tag Attributes",
        ans: "ans2",
    },
    {
        question: "Q22 : Graphics defined by SVG is in which format?",
        option1: "XML",
        option2: "CSS",
        option3: "HTML",
        option4: "SVGS",
        ans: "ans1",
    },
    {
        question: "Q23 : In HTML, which attribute is used to specify that an input field must be filled out?",
        option1: "placeholder",
        option2: "formvalidate",
        option3: "required",
        option4: "validate",
        ans: "ans3",
    },
    {
        question: "Q24 : Which input type defines a slider control?",
        option1: "slider",
        option2: "search",
        option3: "range",
        option4: "controls",
        ans: "ans3",
    },
    {
        question: "Q25 : Which HTML element is used to specify a header for a document or section?",
        option1: "<'section'>",
        option2: "<'head'>",
        option3: "<'top'>",
        option4: "<'header'>",
        ans: "ans4",
    },
]
var score = 0
var quesNo = 0
var answers = document.getElementsByName("answer")
var question = document.getElementById("question")
var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var option3 = document.getElementById("option3")
var option4 = document.getElementById("option4")
var submit = document.getElementById("submit")
var showscore = document.getElementById("showscore")
var form = document.getElementById("questionform")
var heading1 = document.getElementById("heading1")
var heading2 = document.getElementById("heading2")
var heading3 = document.getElementById("heading3")

function nextques() {
   question.innerText = questions[quesNo].question
    option1.innerText = questions[quesNo].option1
    option2.innerText = questions[quesNo].option2
    option3.innerText = questions[quesNo].option3
    option4.innerText = questions[quesNo].option4
}
nextques()

function deselect() {
    for (var i = 0; i < answers.length; i++) {
        answers[i].checked = false
    }
}

var answer;
var answercheck = function () {
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            answer = answers[i].id;
        }
    }
    return answer;
}

submit.addEventListener("click", function () {
    var checkans = answercheck()
    if (checkans === questions[quesNo].ans) {
        score++;
    }
    quesNo++
    deselect()
    if (quesNo < questions.length) {
        nextques()
    }

    else if (score > 0) {
    heading1.innerText = "Total Questions : " + questions.length
    heading2.innerText = "Your Score : " + score
    heading3.innerText = "Congratulation You Have Passed  🏆 "
        form.style.display = ("none")
        showscore.style.display = ("block")
    }
    else {
        heading1.innerText = "Total Questions : " + questions.length
        heading2.innerText = "Your Score : " + score
        heading3.innerText = "You  Are Fail  😞 "
    
        form.style.display = ("none")
        showscore.style.display = ("block")
    }
    console.log(score)
    console.log(checkans)
})
