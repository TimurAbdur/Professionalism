const circles = document.querySelectorAll('.circle');
const taskWraps = document.querySelectorAll('.practice-part-wrap')
const numNum = document.querySelector('.num-now')

let i;
let ball = 0;
let numtaskNow = 1

let solvTask = [0,0,0,0,0,0,0,0,0,0]
for(i = 0; i < circles.length; i++) {
    circles[i].addEventListener('click', (evt)=> {
        const tabTarget = evt.currentTarget;
        const button = tabTarget.dataset.button;

        let i;
        for(i = 0; i < taskWraps.length; i++) {
            circles[i].classList.remove('circle_active');
            taskWraps[i].classList.remove('practice-part-wrap--active')
        }
        numNum.innerHTML = button[5]
        numtaskNow = button[5] //номер задания
        if(button[6] !== undefined) {
            numNum.innerHTML += button[6];
            numtaskNow = Number(numNum.innerHTML)
        }

        document.querySelector(`#${button}`).classList.add('practice-part-wrap--active');
        tabTarget.classList.add('circle_active');
        if(solvTask[numtaskNow - 1] === 0) {
            nextBtn.innerHTML = "Ответить"
        }
        else {
            nextBtn.innerHTML = "Далее"
        }
        if(solvTask[numtaskNow - 1] === 1 && numtaskNow == circles.length) {
            nextBtn.innerHTML = "Завершить"
        }
        quationSwitcher()
    })
}

const backBtn = document.querySelector('.back-btn')

backBtn.addEventListener('click',()=> {
    if(numtaskNow > 1) {
        for(i = 0; i < circles.length; i++) {
            circles[i].classList.remove('circle_active');taskWraps[i].classList.remove('practice-part-wrap--active')
        }

        numtaskNow--;
        document.querySelector(`#task-${numtaskNow}`).classList.add('practice-part-wrap--active');
        numNum.innerHTML = numtaskNow
        circles[numtaskNow - 1].classList.add('circle_active');
        if(solvTask[numtaskNow - 1] === 0) { 
            nextBtn.innerHTML = "Ответить"
        }
        else {
            nextBtn.innerHTML = "Далее"
        }
        quationSwitcher()
    }
})

const nextBtn = document.querySelector('.next-btn')

nextBtn.addEventListener('click',()=> {
    if(nextBtn.innerHTML == "Ответить") {
        nextBtn.innerHTML = "Далее"
        if(numtaskNow == circles.length) {
            nextBtn.innerHTML = "Завершить"
        }

        if(numtaskNow == 1) {
            solvTask[0] = 1
            document.querySelector('.true-answer-1').setAttribute('disabled', true);
            document.querySelector('.t-1-2').setAttribute('disabled', true);
            document.querySelector('.t-1-3').setAttribute('disabled', true);
            if(document.querySelector('.true-answer-1').checked) { 
                ball++ 
                document.querySelector('.circle-1').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-1').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 2) {
            solvTask[1] = 1
            document.querySelector('.true-answer-2').setAttribute('disabled', true);
            document.querySelector('.t-2-2').setAttribute('disabled', true);
            document.querySelector('.t-2-3').setAttribute('disabled', true);
            if(document.querySelector('.true-answer-2').checked) { 
                ball++ 
                document.querySelector('.circle-2').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-2').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 3) {
            solvTask[2] = 1
            document.querySelector('.answer-3').setAttribute('disabled', true);
            if(document.querySelector('.answer-3').value == "Микс" || document.querySelector('.answer-3').value == "микс") { 
                ball++ 
                document.querySelector('.circle-3').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-3').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 4) {
            solvTask[3] = 1
            document.querySelector('.answer-4').setAttribute('disabled', true);
            if(document.querySelector('.answer-4').value == "билд" || document.querySelector('.answer-4').value == "Билд") { 
                ball++ 
                document.querySelector('.circle-4').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-4').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 5) {
            solvTask[4] = 1
            document.querySelector('.true-answer-5').setAttribute('disabled', true);
            document.querySelector('.t-5-2').setAttribute('disabled', true);
            document.querySelector('.t-5-3').setAttribute('disabled', true);
            if(document.querySelector('.true-answer-5').checked) { 
                ball++ 
                document.querySelector('.circle-5').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-5').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 6) {
            solvTask[5] = 1
            document.querySelector('.true-answer-6').setAttribute('disabled', true);
            document.querySelector('.t-6-2').setAttribute('disabled', true);
            document.querySelector('.t-6-3').setAttribute('disabled', true);
            document.querySelector('.t-6-4').setAttribute('disabled', true);
            if(document.querySelector('.true-answer-6').checked) { 
                ball++ 
                document.querySelector('.circle-6').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-6').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 7) {
            solvTask[6] = 1
            document.querySelector('.answer-7-1').setAttribute('disabled', true);
            document.querySelector('.answer-7-2').setAttribute('disabled', true);
            document.querySelector('.answer-7-3').setAttribute('disabled', true);
            if(document.querySelector('.answer-7-1').value == 258 && document.querySelector('.answer-7-2').value == 147 &&
    document.querySelector('.answer-7-3').value == 369) { 
                ball++ 
                document.querySelector('.circle-7').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-7').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 8) {
            solvTask[7] = 1
            document.querySelector('.true-answer-8').setAttribute('disabled', true);
            document.querySelector('.t-8-2').setAttribute('disabled', true);
            document.querySelector('.t-8-3').setAttribute('disabled', true);
            if(document.querySelector('.true-answer-8').checked) { 
                ball++ 
                document.querySelector('.circle-8').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-8').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 9) {
            solvTask[8] = 1
            document.querySelector('.answer-9').setAttribute('disabled', true);
            if(document.querySelector('.answer-9').value == "34" || document.querySelector('.answer-9').value == "3 4")  { 
                ball++ 
                document.querySelector('.circle-9').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-9').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 10) {
            solvTask[9] = 1
            document.querySelector('.true-answer-10').setAttribute('disabled', true);
            document.querySelector('.t-10-2').setAttribute('disabled', true);
            document.querySelector('.t-10-3').setAttribute('disabled', true);
            if(document.querySelector('.true-answer-10').checked) { 
                ball++ 
                document.querySelector('.circle-10').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-10').classList.add("circle_not-true-answer")
            }
        }
    }
    else {
        if(nextBtn.innerHTML == "Завершить") {
            document.querySelector(`#task-${numtaskNow}`).classList.remove('practice-part-wrap--active');
            document.querySelector('.virtual-simulator__active-part').classList.add('hide');
            document.querySelector('.virtual-simulator__result-part').classList.remove('hide');
            const resultBlock = document.querySelector('.result-block');
            resultBlock.classList.add('result-block--active')
            document.querySelector('.virtual-simulator__footer').style.cssText = "display: none;"
            clearInterval(intervalId);
            RaschitatiBalli()
        }
    
        if(numtaskNow < circles.length) {
            for(i = 0; i < circles.length; i++) {
                circles[i].classList.remove('circle_active');taskWraps[i].classList.remove('practice-part-wrap--active')
            }
            numtaskNow++;
            document.querySelector(`#task-${numtaskNow}`).classList.add('practice-part-wrap--active');
            numNum.innerHTML = numtaskNow
            circles[numtaskNow - 1].classList.add('circle_active');
            if(solvTask[numtaskNow-1] === 0) {
        
                nextBtn.innerHTML = "Ответить"
            }
            if(solvTask[numtaskNow - 1] === 1 && numtaskNow == circles.length) {
                nextBtn.innerHTML = "Завершить"
            } 
            quationSwitcher()
        }   

    }
})


function RaschitatiBalli() {
    document.querySelector('.result-text').innerHTML = "Количество баллов: "+ball
}

function quationSwitcher() {
    if(numtaskNow == 7) document.querySelector('.task-text').innerHTML = "Сопоставить каждое название напитка с соответствующим ему видом:"
    else if(numtaskNow == 9) document.querySelector('.task-text').innerHTML = "Из представленного  списка  необходимо выбрать коктейли, приготовленные на основе рома:"
    else if(numtaskNow == 4 || numtaskNow ==3) document.querySelector('.task-text').innerHTML = "Ответьте на вопрос:"
    else {
        document.querySelector('.task-text').innerHTML = "Выберите один правильный ответ:"
    }
}