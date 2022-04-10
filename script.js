let b1 = document.getElementById('1');
let b2 = document.getElementById('2');
let b3 = document.getElementById('3');
let b4 = document.getElementById('4');
let b5 = document.getElementById('5');
let b6 = document.getElementById('6');
let b7 = document.getElementById('7');
let b8 = document.getElementById('8');
let b9 = document.getElementById('9');
let b0 = document.getElementById('0');

let add = document.getElementById('add');
let substract = document.getElementById('substract');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let clear = document.getElementById('clear');
let equal = document.getElementById('equal');

let result = document.querySelector('.results')

add.addEventListener('click',function(){
    result.append('+')
})
substract.addEventListener('click',function(){
    result.append('-')
})
multiply.addEventListener('click',function(){
    result.append('x')
})
divide.addEventListener('click',function(){
    result.append('/')
})
clear.addEventListener('click',function(){
    result.append('reset')
})
equal.addEventListener('click',function(){
    result.append('=')
})




b1.addEventListener('click',function(){
    result.append('1')
})
b2.addEventListener('click',function(){
    result.append('2')
})
b3.addEventListener('click',function(){
    result.append('3')
})
b4.addEventListener('click',function(){
    result.append('4')
})
b5.addEventListener('click',function(){
    result.append('5')
})
b6.addEventListener('click',function(){
    result.append('6')
})
b7.addEventListener('click',function(){
    result.append('7')
})
b8.addEventListener('click',function(){
    result.append('8')
})
b9.addEventListener('click',function(){
    result.append('9')
})
b0.addEventListener('click',function(){
    result.append('0')
})
