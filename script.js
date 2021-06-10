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
document.body.append(div);

let ol = document.createElement('ol');
ol.className = 'todo_ol';
div.append(ol);

let li = document.createElement('li');
li.className = 'todo_li';
li.innerHTML = 'test'; //input box submitted
ol.append(li);

let button = document.createElement('button');
button.className = 'todo_delete';
button.innerHTML = 'x'; 
li.append(button);

let button2 = document.createElement('button');
button2.className = 'todo_done';
button2.innerHTML = 'done'; 
li.append(button2);


