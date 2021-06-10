console.log("test")


const todoContainer = document.querySelector('.todo_container');
const inputBox = document.querySelector('.input_box');
const input = document.querySelector('.input');
const todoSubmit = document.querySelector('.todo_submit');
const todoClearAll = document.querySelector('.todo_clear_all');

/* 
1  submit
2 create element  div ol li 
3 when click 'submit' create element
4
*/



/* 
1 when click 'clear all'
*/
/* 
1.  x : clear

2. done : line over text
*/


/* ⚡create */
let div = document.createElement('div');
div.className = 'todo';
div.innerHTML = ''; //input box submitted


// ●append
document.body.append(div);