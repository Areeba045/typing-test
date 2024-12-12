let text = "How is it possible that a being with such sensitive jewels as the eyes, such enchantedmusical instrument as the ears, and such fabulous arabesque of nerves as the brain can experience itself anything less than a god.The Quick Brown Fox Jumps over The Lazy dog."




const startTest = document.querySelector('.start-btn');
const stopTest = document.querySelector('.stop-btn');
let userText = document.querySelector('#usertext');
const timer = document.querySelector('#Timer');
const result = document.querySelector('#result');
const speedl = document.querySelector('#Speed')

userText.disabled = true;
let testActive = false;
let updatetime;
let count = 0;
let seconds = 60;

startTest.addEventListener('click', () => {
    if (testActive) {
        alert('THE TEST IS ALREADY STARTED!');
    } else {
        alert('TPING TEST IS STARTED!');
        testActive = true;
        userText.disabled = false;


        // let seconds = 61;
        // let seconds = 0;
        seconds = 60;
        countTime = () => {
            seconds--;
            // seconds += 1000;
            // timer.textContent = `${Math.floor(seconds / 1000)}s`;
            // timer.textContent = ` ${seconds}s`;

            if (seconds == 0) {
                stop();
            }
            timer.textContent = ` ${seconds}s`;


        }

        updatetime = setInterval(countTime, 1000)

        result.textContent = '';
        mistakeCounter.textContent = " 0 ";


        speedl.textContent = `0 WPM`
    }


})






stopTest.addEventListener('click', () => {
    if (!testActive) {
        alert('TEST ALREADY STOPED ,  PLEASE START THE TEST ')
    } else {
        alert('TEST HAS BEEN STOPED ');
        stop();
    }


})







function stop() {
    userText.value = '';
    text.textContent = '';
    userText.disabled = true;
    testActive = false;
    let correctWords = document.querySelectorAll('.correct');

    const accuracy = (correctWords.length / text.length) * 100;

    const elapsedTime = (60 - seconds) / 60;


    const speed = (userText.value.trim().split(/\s+/).length / elapsedTime);



    let mistakeCounter = document.querySelector('#mistakeCounter');
    let incorrectWords = document.querySelectorAll('.incorrect');

    const res = document.createElement('div')
    res.className = "bg-white h-auto w-[60vw] rounded-lg p-5 m-5 font-bold";
    res.id = "Re"




    const innerdiv = document.createElement('div');
    innerdiv.className = " grid  grid-cols-1 md:grid-cols-3 gap-2 items-center justify-center";
    innerdiv.id = 'innerdiv';

    res.innerHTML += "<h1 class='text-center text-purple-500 font-serif text-2xl'>Your Results</h1>";
    innerdiv.innerHTML += `<div class=" text-pink-500 rounded-md bg-pink-200 w-full text-center px-5 p-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <p>Accuracy</p>
                    <p>${Math.floor(accuracy)}   %</p>
                </div>`;
    innerdiv.innerHTML += `<div class=" text-purple-500 rounded-md  bg-purple-200 w-full text-center px-5 p-3  ">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"/>
  </svg>

                    <p>Speed</p>
                    <p>${Math.floor(speed)}   WPM</p>
                </div> `;
    innerdiv.innerHTML += `<div class="  text-yellow-700 rounded-md bg-yellow-100 w-full text-center px-5 p-3 ">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="15" y1="9" x2="9" y2="15"/>
    <line x1="9" y1="9" x2="15" y2="15"/>
  </svg>

                    <p>Mistakes</p>
                    <p>${Math.floor(incorrectWords.length)} </p>
                </div>`;



    mistakeCounter.textContent = `${incorrectWords.length}`;



    const selectAllSpan = document.querySelectorAll(".selectAllSpan");
    for (let i = 0; i < selectAllSpan.length; i++) {

        selectAllSpan[i].className = "selectAllSpan";
    }
    clearInterval(updatetime);
    timer.textContent = '0s'
    mistakeCounter.textContent = " 0 ";
    speedl.textContent = "0  WPM"


    res.append(innerdiv);
    result.append(res);


}








generateSpans();

function generateSpans() {
    const split = text.split("");
    const span = split.map((e) => `<span class = "selectAllSpan">${e}</span>`).join("");
    const randomText = document.querySelector('#text');
    randomText.innerHTML = span;

}

userText.addEventListener('keyup', (e) => {


    const textSplit = userText.value.split("");
    const selectAllSpan = document.querySelectorAll(".selectAllSpan");

    let mistake = 0;


    if (userText.value.length >= text.length) {
        return stop();

    }

    for (let i = 0; i < selectAllSpan.length; i++) {

        selectAllSpan[i].className = "selectAllSpan";
    }


    for (let i = 0; i < textSplit.length; i++) {
        if (selectAllSpan[i].textContent === textSplit[i]) {
            selectAllSpan[i].className = "selectAllSpan correct";

        }
        else {
            selectAllSpan[i].className = "selectAllSpan text-red-600 incorrect";

            mistake++;

        }
    }


    mistakeCounter.textContent = ` ${mistake}`;

    const elapsedTime = (60 - seconds) / 60;


    const speed = (userText.value.trim().split(/\s+/).length / elapsedTime);



    speedl.textContent = `${Math.floor(speed)} WPM`


});















































































































































