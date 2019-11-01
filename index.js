import './style.css';

let keyboardArray = [ {keyCode: 'Backquote', elem1: 'Ё', elem2: "`", numb: "0"}, {keyCode: 'Digit1', elem1: '!', elem2: "1"}, 
{keyCode: "Digit2", elem1: '@', elem2: "2"}, {keyCode: "Digit3", elem1: '#', elem2: "3"}, {keyCode: "Digit4", elem1: '$', elem2: "4"},
{keyCode: "Digit5", elem1: '%', elem2: "5"}, {keyCode: "Digit6", elem1: '^', elem2: "6"}, {keyCode: "Digit7", elem1: '&', elem2: "7"},
{keyCode: "Digit8", elem1: '*', elem2: "8"}, {keyCode: "Digit9", elem1: '(', elem2: "9"}, {keyCode: "Digit0", elem1: ')', elem2: "0"},
{keyCode: "Minus", elem1: '_', elem2: "-"}, {keyCode: "Equal", elem1: '+', elem2: "="}, {keyCode: "Backspace", elem1: '', elem2: "&#8592; Backspace"},
{keyCode: "Tab", elem1: '', elem2: "Tab &#8596;"}, {keyCode: "KeyQ", elem1: 'Й', elem2: "Q"}, {keyCode: "KeyW", elem1: 'Ц', elem2: "W"},
{keyCode: "KeyE", elem1: 'У', elem2: "E"}, {keyCode: "KeyR", elem1: 'К', elem2: "R"}, {keyCode: "KeyT", elem1: 'Е', elem2: "T"},
{keyCode: "KeyY", elem1: 'Н', elem2: "Y"}, {keyCode: "KeyU", elem1: 'Г', elem2: "U"}, {keyCode: "KeyI", elem1: 'Ш', elem2: "I"},
{keyCode: "KeyO", elem1: 'Щ', elem2: "O"}, {keyCode: "KeyP", elem1: 'З', elem2: "P"}, {keyCode: "BracketLeft", elem1: 'Х', elem2: "["},
{keyCode: "BracketRight", elem1: 'Ъ', elem2: "]"}, {keyCode: "Backslash", elem1: '|', elem2: "&#92;"}, {keyCode: "CapsLock", elem1: '', elem2: "CapsLock &#8657;"},
{keyCode: "KeyA", elem1: 'Ф', elem2: "A"}, {keyCode: "KeyS", elem1: 'Ы', elem2: "S"}, {keyCode: "KeyD", elem1: 'В', elem2: "D"},
{keyCode: "KeyF", elem1: 'А', elem2: "F"}, {keyCode: "KeyG", elem1: 'П', elem2: "G"}, {keyCode: "KeyH", elem1: 'Р', elem2: "H"},
{keyCode: "KeyJ", elem1: 'О', elem2: "J"}, {keyCode: "KeyK", elem1: 'Л', elem2: "K"}, {keyCode: "KeyL", elem1: 'Д', elem2: "L"},
{keyCode: "Semicolon", elem1: 'Ж', elem2: ";"}, {keyCode: "Quote", elem1: 'Э', elem2: "'"}, {keyCode: "Enter", elem1: '', elem2: "&#8629; Enter"},
{keyCode: "ShiftLeft", elem1: '', elem2: "Shift &#8593;"}, {keyCode: "KeyZ", elem1: 'Я', elem2: "Z"}, {keyCode: "KeyX", elem1: 'Ч', elem2: "X"},
{keyCode: "KeyC", elem1: 'С', elem2: "C"}, {keyCode: "KeyV", elem1: 'М', elem2: "V"}, {keyCode: "KeyB", elem1: 'И', elem2: "B"},
{keyCode: "KeyN", elem1: 'Т', elem2: "N"}, {keyCode: "KeyM", elem1: 'Ь', elem2: "M"}, {keyCode: "Comma", elem1: 'Б', elem2: ","},
{keyCode: "Period", elem1: 'Ю', elem2: "."}, {keyCode: "Slash", elem1: ',', elem2: "/"}, {keyCode: "ShiftRight", elem1: '', elem2: "&#8593; Shift"},
{keyCode: "ControlLeft", elem1: '', elem2: "ctrl"}, {keyCode: "AltLeft", elem1: '', elem2: "alt"}, {keyCode: "Space", elem1: '', elem2: ""},
{keyCode: "AltRight", elem1: '', elem2: "alt"}, {keyCode: "ControlRight", elem1: '', elem2: "ctrl"}
];

let container = document.createElement('div');
container.className = "container";
container.innerHTML = "container";
document.body.append(container);

let textarea = document.createElement('textarea');
textarea.className = "container__textarea";
textarea.innerHTML = "textarea";
container.append(textarea);

let keyboard = document.createElement('div');
keyboard.className = "container__keyboard";
container.append(keyboard);

for(let i = 0; i < 5; i++) {
    let row = document.createElement('div');
    row.className = "container__keyboard_row";
    keyboard.append(row);
}
let rowArray = document.querySelectorAll('.container__keyboard_row');

for(let i = 0; i < 14; i++) {
    let btn = document.createElement('div');
    btn.innerHTML = `<p>${keyboardArray[i].elem1}</p><p>${keyboardArray[i].elem2}</p>`;
    if(i === 13) {
        btn.className = `container__keyboard_btn-bs container__keyboard_btn container__keyboard_btn-${i}`;
    }
    else {
        btn.className = `container__keyboard_btn container__keyboard_btn-${i}`;
    }
    rowArray[0].append(btn);
}
for(let i = 14; i < 28; i++) {
    let btn = document.createElement('div');
    btn.innerHTML = keyboardArray[i].elem2;
    btn.className = (i === 14 || i === 27) ? `container__keyboard_btn-tab container__keyboard_btn container__keyboard_btn-${i}` : 
    `container__keyboard_btn container__keyboard_btn-${i}`;
    rowArray[1].append(btn);
}
for(let i = 28; i < 41; i++) {
    let btn = document.createElement('div');
    btn.innerHTML = keyboardArray[i].elem2;
    btn.className = (i === 28 || i === 40) ? `container__keyboard_btn-bs container__keyboard_btn container__keyboard_btn-${i}` : 
    `container__keyboard_btn container__keyboard_btn-${i}`;
    rowArray[2].append(btn);
}
for(let i = 41; i < 53; i++) {
    let btn = document.createElement('div');
    btn.innerHTML = keyboardArray[i].elem2;
    btn.className = (i === 41 || i === 52) ? `container__keyboard_btn-shift container__keyboard_btn container__keyboard_btn-${i}` : 
    `container__keyboard_btn container__keyboard_btn-${i}`;
    rowArray[3].append(btn);
}
for(let i = 53; i < 58; i++) {
    let btn = document.createElement('div');
    btn.innerHTML = keyboardArray[i].elem2;
    btn.className = (i === 53 || i === 57) ? `container__keyboard_btn-ctrl container__keyboard_btn container__keyboard_btn-${i}` : 
    (i === 54 || i === 56) ? `container__keyboard_btn-alt container__keyboard_btn container__keyboard_btn-${i}` : 
    `container__keyboard_btn-space container__keyboard_btn container__keyboard_btn-${i}`;
    rowArray[4].append(btn);
}

let highlightElem;
keyboard.onclick = function(event) {
    let target = event.target;
    textarea.innerHTML += target.innerHTML;
    console.log(target);
}

document.addEventListener('keydown', function(event) {
    console.log(event.code);
    for(let i =0; i < keyboardArray.length; i++) {
        let obj = keyboardArray[i];
        if(obj.keyCode === event.code) {
            //console.log(obj.keyCode);
            highlightElem = document.querySelector(`.container__keyboard_btn-${i}`);
            //console.log(highlightElem);
            highlightElem.style.background = "#ffffff";
        }
    }
});
document.addEventListener('keyup', function(event) {
    //console.log(event.code);
    highlightElem.style.background = "antiquewhite";
});

