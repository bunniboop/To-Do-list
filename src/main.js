import '../styles/style.css';
import '../styles/cards.css';
import '../styles/utils.css';
import { dropDown } from './buttons.js';
import { addNewTask } from './buttons.js';

//buttons
const addNewTaskBtn = document.querySelector('.newTaskBtn');


//event Listeners -->
document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('.card__dropDown_btn');
    [...buttons].forEach(btn => btn.querySelector('.icon__header').addEventListener('click', dropDown));
}) //selects the svg and adds an event listener
addNewTaskBtn.addEventListener('click', addNewTask)


