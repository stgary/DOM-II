// 1
const heading = document.querySelector('.logo-heading');
heading.addEventListener('mouseover', () => {
    heading.style.color = 'purple';
})

// 2
const welcome = document.querySelector('.intro h2');
welcome.addEventListener('click', () => {
    welcome.style.color = 'purple';
})

// 3
const introPara = document.querySelector('.intro p');
introPara.addEventListener('dblclick', () => {
    introPara.style.fontSize = '20px';
})

// 4
const letsGo = document.querySelector('.text-content h2');
letsGo.addEventListener('mouseenter', () => {
    letsGo.style.fontSize = '50px';
})

// 5
const nav = document.querySelector('.nav-link');
nav.addEventListener('mouseleave', () => {
    nav.style.color = 'purple';
})

// 6
const letsGoPara = document.querySelector('.text-content p');
letsGoPara.addEventListener('mouseout', () => {
    letsGoPara.style.fontSize = '20px';
})

// 7
const imgFunBus = document.querySelector('.intro img');
imgFunBus.addEventListener('mouseup', () => {
    imgFunBus.style.width = '400px';
})

// 8
const pick = document.querySelector('.content-destination h2');
pick.addEventListener('mousemove', () => {
    pick.style.fontSize = '50px';
})

// 9
const fun = document.querySelector('.destination h4');
fun.addEventListener('mousedown', () => {
    fun.style.color = 'purple';
})

// 10
const imgFun = document.querySelector('.img-content img');
imgFun.addEventListener('contextmenu', () => {
    imgFun.style.width = '200px';
})