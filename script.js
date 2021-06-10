// 🍄 const
const todoContainer = document.querySelector('.todo_container');
const inputBox = document.querySelector('.input_box');

const todoInput = document.querySelector('.todo_input');

const todoSubmit = document.querySelector('.todo_submit');
const todoClearAll = document.querySelector('.todo_clear_all');

const todo = document.querySelector('.todo');
const todoUl = document.querySelector('.todo_ul');

const todoDelete = document.querySelector('.todo_delete');
const todoDone = document.querySelector('.todo_done');
/* 
1 when click 'clear all'
*/

/* 
1.  x : clear

2. done : line over text
*/

// 🍄 addeventlistener
// 🦄js-4
todoSubmit.addEventListener('click',todolist);



//🦄js-6
todoClearAll.addEventListener('click',clearAll);

//🦄js-8
todoUl.addEventListener('click',clear);

//🦄js-10
// todoDone.addEventListener('click',clearAll);


// 🍄 function

/* 🦄js-4
1 create element  div ol li 
2 when click 'submit' create element    */

function todolist(params) {    
    /* ⚡create */
    // let div = document.createElement('div');
    // div.className = 'todo';
    // document.body.append(div);

    // let ul = document.createElement('ul');
    // ul.className = 'todo_ul';
    // div.append(ul);

    let li = document.createElement('li');
    li.className = 'todo_li';      
    li.innerText =todoInput.value; //input box submitted
    todoUl.append(li);

    let button = document.createElement('button');
    button.className = 'todo_delete';
    button.innerHTML = 'x'; 
    li.append(button);

    let button2 = document.createElement('button');
    button2.className = 'todo_done';
    button2.innerHTML = 'done'; 
    li.append(button2);    

    todoInput.value="";
}


/* 🦄js-6
 when click 'clear all' , clear element    */

function clearAll(params) {
    location.reload();    
}


/* 🦄js-8
 click 'done' on list, middle line on the list    */

 function clear(e) {

    // const child = e.target.childNodes;
    // console.log(child);

    e.target.parentNode.classList.toggle('clear');         
 }

 /* 🦄js-10
 click 'x' on list, delete the list    */








