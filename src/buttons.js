

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
    console.log(e.currentTarget);
    //add 10% to progressbar
    
}

export {
    dropDown,
    removeAll,
    cancelButtonHandler,
    completeHandler,
    addToProgressBar
}