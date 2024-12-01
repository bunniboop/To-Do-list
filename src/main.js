import '../styles/style.css';
import '../styles/cards.css';
import '../styles/utils.css';
import { dropDown, filterTasks } from './buttons.js';
import { addNewTask } from './taskDetails.js';
import { removeAll } from './buttons.js';
import { createGroup } from './group.js';

//buttons
const addNewTaskBtn = document.getElementById('newTaskBtn');
const clearAll = document.getElementById('clearAllBtn');
const addNewTaskGroupBtn = document.getElementById('addNewTaskGroupBtn');
const todoContainer = document.getElementById('task-wrapper-to-do')
const filterButtons = document.querySelector('.card__dropDown__cont')


//event Listeners -->
document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('.card__dropDown_btn');
    [...buttons].forEach(btn => btn.querySelector('.icon__header').addEventListener('click', dropDown));
}) //selects the svg and adds an event listener

addNewTaskBtn.addEventListener('click', () => addNewTask(todoContainer))

clearAll.addEventListener('click', removeAll)

addNewTaskGroupBtn.addEventListener('click', createGroup)

filterButtons.addEventListener('click', filterTasks)

