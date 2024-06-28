import data from './data.json' with { type: 'json' };
const items = document.querySelectorAll('.item');
const buttons = document.querySelectorAll('.item-1>div:last-child span');

setData('weekly', buttons[1], "Week");

buttons[0].addEventListener('click', function () {
    setData('daily', this, "Day")
});

buttons[1].addEventListener('click', function () {
    setData('weekly', this, "Week")
});

buttons[2].addEventListener('click', function () {
    setData('monthly', this, "Month")
});

function setData(time, btn, last) {
    buttons.forEach(element => {
        element.classList.remove('active');
    });
    btn.classList.add('active')
    data.forEach((element, i) => {
        let ele = items[i].querySelector('.time span');
        ele.innerHTML = element.timeframes[time].current;
        ele = items[i].querySelector('.last-time span:last-child');
        ele.innerHTML = element.timeframes[time].previous;
        ele = items[i].querySelector('.last-time span:first-child');
        ele.innerHTML = last;
    });
}