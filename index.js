const loginBox = document.querySelector(".login-box");
const loginBtn = document.querySelector(".login-btn");
const errImg = document.querySelector(".err-img");
const firstPart = document.querySelector(".first-part");
const secoundPart = document.querySelector(".secound-part")
const firstAnswer = document.querySelector(".first-answer");
const secoundAnswer = document.querySelector(".secound-answer");
const checkBtn1 = document.querySelector("#check-btn1");
const checkBtn2 = document.querySelector("#check-btn2");
const answerBtn1 = document.querySelector("#answer-btn1");
const answerBtn2 = document.querySelector("#answer-btn2");
const thirdAnswer = document.querySelector(".third-answer");
const checkBtn3 = document.querySelector("#check-btn3");
const answerBtn3 = document.querySelector("#answer-btn3");
const greeting = document.querySelector(".greeting");

Number(firstAnswer);
Number(secoundAnswer);
Number(thirdAnswer);





const firstAnswerVlaue = firstAnswer.value;



loginBtn.addEventListener("click", () => {
    
    if (loginBox.value === "") {
        errImg.style.display = "inline";
        loginBox.style.border = "1px solid red";
        loginBox.placeholder = "Feld muss ausgefüllt werden";

    } else {
        firstPart.style.display = "none";
        secoundPart.style.display = "block"
        document.querySelector(".greeting").textContent += " " + loginBox.value + " !";
    }

})


checkBtn1.addEventListener("click", () => {
    if (firstAnswer.value == 5351.5) {
        firstAnswer.style.outline = "1px solid hsl(99, 95%, 50%)";
    } else {
        firstAnswer.value = "";
        firstAnswer.placeholder = "deine Lösung ist falsch";
        firstAnswer.style.outline = "1px solid red";
    }
})

console.log(window);

answerBtn1.addEventListener("click", () => {
    firstAnswer.value = 5351.5;
})

checkBtn2.addEventListener("click", () => {
    if (secoundAnswer.value == 6309.40) {
        secoundAnswer.style.outline = "1px solid hsl(99, 95%, 50%)";
    } else {
        secoundAnswer.value = "";
        secoundAnswer.placeholder = "deine Lösung ist falsch";
        secoundAnswer.style.outline = "1px solid red";
    }
})

answerBtn2.addEventListener("click", () => {
    secoundAnswer.value = 6309.40;
})


checkBtn3.addEventListener("click", () => {
    if (thirdAnswer.value == 37979.45) {
        thirdAnswer.style.outline = "1px solid hsl(99, 95%, 50%)";
    } else {
        thirdAnswer.value = "";
        thirdAnswer.placeholder = "deine Lösung ist falsch";
        thirdAnswer.style.outline = "1px solid red";
    }
})

answerBtn3.addEventListener("click", () => {
    thirdAnswer.value = 37979.45;
})


