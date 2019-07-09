// Your code goes here
const image = Array.from(document.querySelectorAll('img'));

const backChange = document.querySelector('html');

const button1 = document.querySelector('#btn1');

const btnborder = document.querySelector('#info1');

const header = document.querySelector('.nav-container');

const link = document.querySelector('.nav-link');

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener('mouseover', () => {
        image[i].style.border = '3px solid red';
    });
    image[i].addEventListener('mouseout', () => {
        image[i].style.border = '';
    });
}

backChange.addEventListener('wheel', () => {
    backChange.style.backgroundColor = 'yellow';
});

button1.addEventListener('click', (e) => {
    btnborder.style.border = '3px dashed blue';
    e.stopPropagation();
});

button1.addEventListener('dblclick', () => {
   btnborder.style.border = '';
});

link.addEventListener('mouseenter', () => {
    header.style.backgroundColor = 'green';
});

link.addEventListener('mouseleave', () => {
    header.style.backgroundColor = '';
});

backChange.addEventListener('keydown', () => {
    header.style.backgroundColor = 'pink';
});

image[0].addEventListener('contextmenu', () => {
    image[0].style.display = 'none';
});

image[1].addEventListener('mousemove', () => {
    image[0].style.display = '';
});
backChange.addEventListener('click', () => {
    backChange.style.backgroundColor = 'red';
});
const defaultPre = document.querySelectorAll('.nav-link');

for (let i = 0; i < defaultPre.length; i++) {
    defaultPre[i].addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e);
    });
};