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


// 🍄 addeventlistener

// 🍉js-4
todoSubmit.addEventListener('click',todolist);

// 🍉js-4-2 enter key
/* 🦄 enter key는  input에 코드 넣음 */
todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        todolist();
    }
});

//🍉js-6
todoClearAll.addEventListener('click',clearAll);

//🍉js-8
/* 🦄 JS로 만든 li,button등등 element에 const지정할 수 없음, 
👉 그래서 html에 있는 element인 ul을 지정함, 이벤트버블링 활용해서 코딩 */
 
todoUl.addEventListener('click',clear);


// 🍄 function

/* 🍉js-4
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
    
    let buttonDelete = document.createElement('button');
    buttonDelete.className = 'todo_done';
    buttonDelete.innerHTML = 'done'; 
    li.append(buttonDelete);  

    let button = document.createElement('button');
    button.className = 'todo_delete';
    button.innerHTML = 'delete'; 
    li.append(button);  

    todoInput.value="";
}

/* 🍉js-6
 when click 'clear all' , clear element    */

function clearAll() {
    location.reload();    
}

/* 🍉js-8
 click 'done' on list, middle line on the list    */

/* 🦄JS로 만든 li,button등등 element에 const지정할 수 없음, 
👉 그래서 e.target으로 button의 parentNode인 li를 찾아냄. 
👉 그래서 class이름으로 그 button을 지정함 */

 function clear(e) {
    if (e.target.classList.contains('todo_done')) {
    // const child = e.target.childNodes;
    // console.log(child);
    e.target.parentNode.classList.toggle('clear');  
    }

    /* 🍉js-10
    click 'x' on list, delete the list    */

    else if(e.target.classList.contains('todo_delete')){

        e.target.parentNode.remove();

    } else {
      return;        
    }       
 }







