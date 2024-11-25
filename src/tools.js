
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