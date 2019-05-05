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

let timer;

function animate(element) {
    element.addEventListener('mousedown', function () {
        let cnt = 10;
        timer = setInterval(move, 50);
        function move() {
            cnt = cnt + 1;
            element.style.marginLeft = cnt + 'px'
        }
    });

    element.addEventListener('mouseup', function () {
        clearInterval(timer);
        element.style.marginLeft = 10 + 'px';
    });
};
animate(red);
animate(blue);
animate(green);
animate(pink);
animate(gray);