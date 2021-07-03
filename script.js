const btnStart = document.querySelector('#start');
const btnEnd = document.querySelector('#end');
const span = document.querySelector('span');


btnStart.onclick = () => {  
    span.removeAttribute('class');
    span.classList.add('active');
};


btnEnd.onclick = () => {  
    span.removeAttribute('class');
    span.classList.add('nonactive');
};