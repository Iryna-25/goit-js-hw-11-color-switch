const colors = [
'#FFFFFF',
'#2196F3',
'#4CAF50',
'#FF9800',
'#009688',
'#795548',
];

const DELAY = 1000;

const refs = {
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
};

refs.btnStart.addEventListener("click", btnClickStart);

function btnClickStart () {
    const intervalid = setInterval(changeColor, DELAY);
    refs.btnStart.setAttribute("disabled", "disabled");
    refs.btnStop.addEventListener("click", btnClickStop);
    function btnClickStop () {
        clearInterval(intervalid);
        refs.btnStart.disabled = false;
    }
}

function changeColor () {
    const currentColor = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[currentColor];
}

const randomIntegerFromInterval = (min, max) => {
return Math.floor(Math.random() * (max - min + 1) + min);
};

// function randomIntegerFromInterval(){
//     index.body.style.background = colors[index];
//     index = index + 1;
//     if(index == colors.length){
//         index = 0;
//     }
// }

// setInterval(randomIntegerFromInterval, 1000);