const gray = document.querySelector('.block--gray');
const pink = document.querySelector('.block--pink');
const green = document.querySelector('.block--green');
const blue = document.querySelector('.block--blue');
const red = document.querySelector('.block--red');
const block = document.querySelector('.blocks');

gray.addEventListener('click', function() {
    block.prepend(gray);
});
pink.addEventListener('click', function() {
    block.prepend(pink);
});
green.addEventListener('click', function() {
    block.prepend(green);
});
blue.addEventListener('click', function() {
    block.prepend(blue);
});
red.addEventListener('click', function() {
    block.prepend(red);
});
function right(element) {
    let cnt = 10;
    element.style.marginLeft = cnt + 'px';
    cnt++;
};


gray.addEventListener('mousedown', function() {
    let cnt = 10;
    setInterval(function() {
        gray.style.marginLeft = cnt + 'px';
        cnt++;
    }, 10000);
});
gray.addEventListener('mouseup', function() {
    clearInterval();
});