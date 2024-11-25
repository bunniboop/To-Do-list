import { html } from "../node_modules/lit-html/lit-html.js";
import { makeElement } from "./tools.js";



function dropDown(e){
    const buttonPar = e.target.closest('.card__dropDown_btn');

    if (!buttonPar) {
        console.error('Button parent not found or missing data-menu attribute.');
        return;
    }

    const menuId = buttonPar.getAttribute('data-menu');
    const dropdownContainer = document.getElementById(menuId);

    if (!dropdownContainer) {
        console.error(`Dropdown container with ID ${menuId} not found.`);
        return;
    }

    // Toggle the dropdown menu
    if (dropdownContainer.style.display === 'none' || !dropdownContainer.style.display) {
        dropdownContainer.style.display = 'flex'; 
    } else {
        dropdownContainer.style.display = 'none';  
    }
}


function removeAll(){
    const completedContainer = document.getElementById('task-wrapper-copmleted');
    completedContainer.innerHTML = '';
}

function cancelButtonHandler(e){
    e.currentTarget.parentElement.parentElement.remove()
}

function completeHandler(e) {
    const completedContainer = document.getElementById('task-wrapper-copmleted');
    // console.log((e.currentTarget.parentNode.parentNode));
    
    completedContainer.appendChild(e.currentTarget.parentNode.parentNode);
    e.currentTarget.parentNode.remove();
}

function addToProgressBar(e) {

    const confirmButton = e.currentTarget;

    const newButton = changeToChecked(confirmButton);
    newButton.disabled = true;
    const tasksConatiner = newButton.parentElement.parentElement.parentElement // <-- dont ever do this again
    const progresBarr =  tasksConatiner.nextSibling 

    const numOfTasks = tasksConatiner.children.length;
    const amontToFill = 100 / numOfTasks;
    let progresBarProcet = parseFloat(progresBarr.children[0].textContent.replace('%', ''))
    progresBarProcet = Math.min(progresBarProcet + amontToFill, 100);


    const completedTasks = Array.from(tasksConatiner.children).filter(task => 
        task.querySelector('.icon__task_btn').disabled).length;

    if (completedTasks === numOfTasks) {
        progresBarProcet = 100;
        const wrapper = tasksConatiner.parentElement;

        wrapper.querySelectorAll('button').forEach(b => 
            {if (b.getAttribute('toggle') == null) b.disabled = true}); //disable all buttons after completion
        
        const completedContainer = document.getElementById('task-wrapper-copmleted');
        completedContainer.appendChild(wrapper)
    }
    
    progresBarr.children[0].textContent = progresBarProcet.toFixed(2) + '%';
}

function changeToChecked(button){
    const newButton = makeElement({type:'button', className:'icon__task_btn', inner: '<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>checkmark-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-102.000000, -1141.000000)" fill="#afb6c9"> <path d="M124.393,1151.43 C124.393,1151.43 117.335,1163.73 117.213,1163.84 C116.81,1164.22 116.177,1164.2 115.8,1163.8 L111.228,1159.58 C110.85,1159.18 110.871,1158.54 111.274,1158.17 C111.677,1157.79 112.31,1157.81 112.688,1158.21 L116.266,1161.51 L122.661,1150.43 C122.937,1149.96 123.548,1149.79 124.027,1150.07 C124.505,1150.34 124.669,1150.96 124.393,1151.43 L124.393,1151.43 Z M118,1141 C109.164,1141 102,1148.16 102,1157 C102,1165.84 109.164,1173 118,1173 C126.836,1173 134,1165.84 134,1157 C134,1148.16 126.836,1141 118,1141 L118,1141 Z" id="checkmark-circle" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>'})
    button.replaceWith(newButton);
    return newButton;
}

export {
    dropDown,
    removeAll,
    cancelButtonHandler,
    completeHandler,
    addToProgressBar
}