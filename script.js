import data from './data.json' with { type: 'json' };
const items = document.querySelectorAll('.item');
const buttons = document.querySelectorAll('.item-1 div:last-child span')

setData('weekly', buttons[1]);

buttons[0].addEventListener('click', function () {
    setData('daily', this)
});

buttons[1].addEventListener('click', function () {
    setData('weekly', this)
});

buttons[2].addEventListener('click', function () {
    setData('monthly', this)
});

function setData(time, btn) {
    buttons.forEach(element => {
        element.classList.remove('active');
    });
    btn.classList.add('active')
    data.forEach((element, i) => {
        let ele = items[i].querySelector('.time span');
        ele.innerHTML = element.timeframes[time].current;
        ele = items[i].querySelector('.last-week span');
        ele.innerHTML = element.timeframes[time].previous;
    });
}