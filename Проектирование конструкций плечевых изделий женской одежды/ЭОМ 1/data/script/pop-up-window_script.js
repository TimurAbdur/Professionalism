const popUp1 = document.querySelector('.pop-up-container-card-1');
const popUp2 = document.querySelector('.pop-up-container-card-2');
const popUp3 = document.querySelector('.pop-up-container-card-3');
const popUp4 = document.querySelector('.pop-up-container-card-4');
const popUp5 = document.querySelector('.pop-up-container-card-5');
const popUp6 = document.querySelector('.pop-up-container-card-6');
const popUp7 = document.querySelector('.pop-up-container-card-7');
const popUp8 = document.querySelector('.pop-up-container-card-8');
const popUp9 = document.querySelector('.pop-up-container-card-9');

const cardBtns = document.getElementsByClassName('infographilc__card');

const btnClose1 = document.querySelector('.close-btn1');
const btnClose2 = document.querySelector('.close-btn2');
const btnClose3 = document.querySelector('.close-btn3');
const btnClose4 = document.querySelector('.close-btn4');
const btnClose5 = document.querySelector('.close-btn5');
const btnClose6 = document.querySelector('.close-btn6');
const btnClose7 = document.querySelector('.close-btn7');
const btnClose8 = document.querySelector('.close-btn8');
const btnClose9 = document.querySelector('.close-btn9');

const checkMark = document.getElementsByClassName('check-mark-block');

function overflowHiden() {
    document.querySelector('body').classList.toggle('over-flow-body');
}

cardBtns[0].addEventListener('click', ()=> {
    popUp1.classList.add('show-pop-up');
    shadow.classList.add('shadow-active');
    overflowHiden();
});
cardBtns[1].addEventListener('click', ()=> {
    popUp2.classList.add('show-pop-up');
    shadow.classList.add('shadow-active');
    overflowHiden();
});
cardBtns[2].addEventListener('click', ()=> {
    popUp3.classList.add('show-pop-up');
    shadow.classList.add('shadow-active');
    overflowHiden();
});
cardBtns[3].addEventListener('click', ()=> {
    popUp4.classList.add('show-pop-up');
    shadow.classList.add('shadow-active');
    overflowHiden();
});
cardBtns[4].addEventListener('click', ()=> {
    popUp5.classList.add('show-pop-up');
    shadow.classList.add('shadow-active');
    overflowHiden();
});
cardBtns[5].addEventListener('click', ()=> {
    popUp6.classList.add('show-pop-up');
    shadow.classList.add('shadow-active');
    overflowHiden();
});
cardBtns[6].addEventListener('click', ()=> {
    popUp7.classList.add('show-pop-up');
    shadow.classList.add('shadow-active');
    overflowHiden();
});
cardBtns[7].addEventListener('click', ()=> {
    popUp8.classList.add('show-pop-up');
    shadow.classList.add('shadow-active');
    overflowHiden();
});
cardBtns[8].addEventListener('click', ()=> {
    popUp9.classList.add('show-pop-up');
    shadow.classList.add('shadow-active');
    overflowHiden();
});

btnClose1.addEventListener('click', ()=> {
    popUp1.classList.remove('show-pop-up');
    shadow.classList.remove('shadow-active');
    checkMark[0].classList.add('check-mark-block_show');
    overflowHiden();
});

btnClose2.addEventListener('click', ()=> {
    popUp2.classList.remove('show-pop-up');
    shadow.classList.remove('shadow-active');
    checkMark[1].classList.add('check-mark-block_show');
    overflowHiden();
});
btnClose3.addEventListener('click', ()=> {
    popUp3.classList.remove('show-pop-up');
    shadow.classList.remove('shadow-active');
    checkMark[2].classList.add('check-mark-block_show');
    overflowHiden();
});
btnClose4.addEventListener('click', ()=> {
    popUp4.classList.remove('show-pop-up');
    shadow.classList.remove('shadow-active');
    checkMark[3].classList.add('check-mark-block_show');
    overflowHiden();
});
btnClose5.addEventListener('click', ()=> {
    popUp5.classList.remove('show-pop-up');
    shadow.classList.remove('shadow-active');
    checkMark[4].classList.add('check-mark-block_show');
    overflowHiden();
});
btnClose6.addEventListener('click', ()=> {
    popUp6.classList.remove('show-pop-up');
    shadow.classList.remove('shadow-active');
    checkMark[5].classList.add('check-mark-block_show');
    overflowHiden();
});
btnClose7.addEventListener('click', ()=> {
    popUp7.classList.remove('show-pop-up');
    shadow.classList.remove('shadow-active');
    checkMark[6].classList.add('check-mark-block_show');
    overflowHiden();
});
btnClose8.addEventListener('click', ()=> {
    popUp8.classList.remove('show-pop-up');
    shadow.classList.remove('shadow-active');
    checkMark[7].classList.add('check-mark-block_show');
    overflowHiden();
});
btnClose9.addEventListener('click', ()=> {
    popUp9.classList.remove('show-pop-up');
    shadow.classList.remove('shadow-active');
    checkMark[8].classList.add('check-mark-block_show');
    overflowHiden();
});