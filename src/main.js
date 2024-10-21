import '../styles/style.css';
import '../styles/cards.css';
import '../styles/utils.css';

document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('.card__dropDown_btn');
    [...buttons].forEach(btn => btn.querySelector('.icon__header').addEventListener('click', dropDown));
}) //selects the svg and adds an event listener

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
