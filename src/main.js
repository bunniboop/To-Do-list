import '../styles/style.css';
import '../styles/cards.css';
import '../styles/utils.css';
import { dropDown } from './buttons.js';
import { addNewTask } from './buttons.js';
import { removeAll } from './buttons.js';
import { createGroup } from './buttons.js';

//buttons
const addNewTaskBtn = document.getElementById('newTaskBtn');
const clearAll = document.getElementById('clearAllBtn');
const addNewTaskGroupBtn = document.getElementById('addNewTaskGroupBtn');


//event Listeners -->
document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('.card__dropDown_btn');
    [...buttons].forEach(btn => btn.querySelector('.icon__header').addEventListener('click', dropDown));
}) //selects the svg and adds an event listener
addNewTaskBtn.addEventListener('click', () => addNewTask('task-wrapper-to-do'))
clearAll.addEventListener('click', removeAll)
addNewTaskGroupBtn.addEventListener('click', createGroup)

