export function addNewTask(conteinderEl) {
    const todoContainer = conteinderEl;
    const div = makeElement({ type: 'div', className: 'single-task' });

    const svg = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="8" cy="8" r="8" fill="#afb6c9"></circle> </g></svg>';
    const svgContainer = makeElement({ type: 'button' });
    svgContainer.innerHTML = svg;
    svgContainer.className = 'icon__task';

    const textArea = makeElement({ type: "input", className: 'task_input_area' });
    textArea.placeholder = 'New task...'
    textArea.addEventListener('keypress', (e) => { if (e.key === 'Enter') { inputDone(textArea, div) } });
    div.appendChild(svgContainer);
    div.appendChild(textArea);
    todoContainer.appendChild(div)
}

export function makeElement({ type, content, className, idName, _src, inner }) {
    const types = ['div', 'button', 'p', 'a', 'h1', 'h2', 'h3', 'input',] //add a test for correct type
    const element = document.createElement(type);

    content ? element.textContent = content : element.textContent = '';
    className ? element.className = className : element.className = '';
    if (_src) element.src = _src;
    if (inner) element.innerHTML = inner;
    if (idName) element.id = idName;

    return element;
}

export function replaceTaskTilte(taskTitle){
    const inputArea = makeElement({type:'input',className: 'task_input_area'});
    taskTitle.replaceWith(inputArea)
    inputArea.addEventListener('keypress', function(e){
        if (e.key === 'Enter') replaceInput(taskTitle, inputArea)
        
    })
}

function inputDone(textArea, container) {
    const taskTittleInput = textArea.value;
    if (taskTittleInput == '') {
        return
    }
    textArea.remove();

    const taskTitle = makeElement({ type: 'h3', content: taskTittleInput, className: 'task-title' });

    
    const confirmBtn = makeElement({ type: 'button' });
    confirmBtn.innerHTML = '<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#afb6c9" stroke="#afb6c9"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>checkmark-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-100.000000, -1139.000000)" fill="#afb6c9"> <path d="M122.027,1148.07 C121.548,1147.79 120.937,1147.96 120.661,1148.43 L114.266,1159.51 L110.688,1156.21 C110.31,1155.81 109.677,1155.79 109.274,1156.17 C108.871,1156.54 108.85,1157.18 109.228,1157.58 L113.8,1161.8 C114.177,1162.2 114.81,1162.22 115.213,1161.84 C115.335,1161.73 122.393,1149.43 122.393,1149.43 C122.669,1148.96 122.505,1148.34 122.027,1148.07 L122.027,1148.07 Z M116,1169 C108.268,1169 102,1162.73 102,1155 C102,1147.27 108.268,1141 116,1141 C123.732,1141 130,1147.27 130,1155 C130,1162.73 123.732,1169 116,1169 L116,1169 Z M116,1139 C107.164,1139 100,1146.16 100,1155 C100,1163.84 107.164,1171 116,1171 C124.836,1171 132,1163.84 132,1155 C132,1146.16 124.836,1139 116,1139 L116,1139 Z" id="checkmark-circle" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>'
    confirmBtn.className = 'icon__task_btn' //change class

    const cancelBtn = makeElement({ type: 'button' });
    cancelBtn.innerHTML = '<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cross-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-568.000000, -1087.000000)" fill="#afb6c9"> <path d="M584,1117 C576.268,1117 570,1110.73 570,1103 C570,1095.27 576.268,1089 584,1089 C591.732,1089 598,1095.27 598,1103 C598,1110.73 591.732,1117 584,1117 L584,1117 Z M584,1087 C575.163,1087 568,1094.16 568,1103 C568,1111.84 575.163,1119 584,1119 C592.837,1119 600,1111.84 600,1103 C600,1094.16 592.837,1087 584,1087 L584,1087 Z M589.717,1097.28 C589.323,1096.89 588.686,1096.89 588.292,1097.28 L583.994,1101.58 L579.758,1097.34 C579.367,1096.95 578.733,1096.95 578.344,1097.34 C577.953,1097.73 577.953,1098.37 578.344,1098.76 L582.58,1102.99 L578.314,1107.26 C577.921,1107.65 577.921,1108.29 578.314,1108.69 C578.708,1109.08 579.346,1109.08 579.74,1108.69 L584.006,1104.42 L588.242,1108.66 C588.633,1109.05 589.267,1109.05 589.657,1108.66 C590.048,1108.27 590.048,1107.63 589.657,1107.24 L585.42,1103.01 L589.717,1098.71 C590.11,1098.31 590.11,1097.68 589.717,1097.28 L589.717,1097.28 Z" id="cross-circle" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>'
    cancelBtn.className = 'icon__task_btn' //change class

    const btnContainer = makeElement({ type: 'div', className: 'btn-container' });
    btnContainer.appendChild(confirmBtn);
    btnContainer.appendChild(cancelBtn);

    container.appendChild(taskTitle)
    container.appendChild(btnContainer)
    const completedContainer = document.getElementById('task-wrapper-copmleted');
    taskTitle.addEventListener('click', () => {
        if (!completedContainer.contains(container)) {
            replaceTaskTilte(taskTitle)
        }
    })
    
    //check if parent is a task down menu, if so add diffrent event
    if (container.parentElement.className !== 'drop-down-tasks') {
        confirmBtn.addEventListener('click', function (e) {
            confirmBtn.remove();
            cancelBtn.remove()
            completedContainer.appendChild(container)
        });

    } else{
        confirmBtn.addEventListener('click', addToProgressBar)
    }

    cancelBtn.addEventListener('click', function (e) {
        container.remove()
    })
}

export function replaceInput(taskTitle, inputArea) {
    taskTitle.textContent = inputArea.value;
    inputArea.replaceWith(taskTitle)
}

function addToProgressBar(){
    
}