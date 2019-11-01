import './style.css';

let keyboardArray = [ {keyCode: 192, elem1: 'Ё', elem2: "`"}, {keyCode: 49, elem1: '!', elem2: "1"}, 
{keyCode: 50, elem1: '@', elem2: "2"}, {keyCode: 51, elem1: '#', elem2: "3"}, {keyCode: 52, elem1: '$', elem2: "4"},
{keyCode: 53, elem1: '%', elem2: "5"}, {keyCode: 54, elem1: '^', elem2: "6"}, {keyCode: 55, elem1: '&', elem2: "7"},
{keyCode: 56, elem1: '*', elem2: "8"}, {keyCode: 57, elem1: '(', elem2: "9"}, {keyCode: 48, elem1: ')', elem2: "0"},
{keyCode: 189, elem1: '_', elem2: "-"}, {keyCode: 187, elem1: '+', elem2: "="}, {keyCode: 220, elem1: '', elem2: "&#8592; Backspace"},
{keyCode: 9, elem1: '', elem2: "Tab &#8596;"}, {keyCode: 81, elem1: 'Й', elem2: "Q"}, {keyCode: 87, elem1: 'Ц', elem2: "W"},
{keyCode: 69, elem1: 'У', elem2: "E"}, {keyCode: 82, elem1: 'К', elem2: "R"}, {keyCode: 84, elem1: 'Е', elem2: "T"},
{keyCode: 89, elem1: 'Н', elem2: "Y"}, {keyCode: 85, elem1: 'Г', elem2: "U"}, {keyCode: 73, elem1: 'Ш', elem2: "I"},
{keyCode: 79, elem1: 'Щ', elem2: "O"}, {keyCode: 80, elem1: 'З', elem2: "P"}, {keyCode: 219, elem1: 'Х', elem2: "["},
{keyCode: 221, elem1: 'Ъ', elem2: "]"}, {keyCode: 220, elem1: '|', elem2: "&#92;"}, {keyCode: 20, elem1: '', elem2: "CapsLock &#8657;"},
{keyCode: 65, elem1: 'Ф', elem2: "A"}, {keyCode: 83, elem1: 'Ы', elem2: "S"}, {keyCode: 68, elem1: 'В', elem2: "D"},
{keyCode: 70, elem1: 'А', elem2: "F"}, {keyCode: 71, elem1: 'П', elem2: "G"}, {keyCode: 72, elem1: 'Р', elem2: "H"},
{keyCode: 74, elem1: 'О', elem2: "J"}, {keyCode: 75, elem1: 'Л', elem2: "K"}, {keyCode: 76, elem1: 'Д', elem2: "L"},
{keyCode: 186, elem1: 'Ж', elem2: ";"}, {keyCode: 222, elem1: 'Э', elem2: "'"}, {keyCode: 13, elem1: '', elem2: "&#8629; Enter"},
{keyCode: 16, elem1: '', elem2: "Shift &#8593;"}, {keyCode: 90, elem1: 'Я', elem2: "Z"}, {keyCode: 88, elem1: 'Ч', elem2: "X"},
{keyCode: 67, elem1: 'С', elem2: "C"}, {keyCode: 86, elem1: 'М', elem2: "V"}, {keyCode: 66, elem1: 'И', elem2: "B"},
{keyCode: 78, elem1: 'Т', elem2: "N"}, {keyCode: 77, elem1: 'Ь', elem2: "M"}, {keyCode: 188, elem1: 'Б', elem2: ","},
{keyCode: 190, elem1: 'Ю', elem2: "."}, {keyCode: 191, elem1: ',', elem2: "/"}, {keyCode: 16, elem1: '', elem2: "&#8593; Shift"},
{keyCode: 17, elem1: '', elem2: "ctrl"}, {keyCode: 18, elem1: '', elem2: "alt"}, {keyCode: 32, elem1: '', elem2: ""},
{keyCode: 18, elem1: '', elem2: "alt"}, {keyCode: 17, elem1: '', elem2: "ctrl"}
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
    /*btn.innerHTML = keyboardArray[i].elem2 + keyboardArray[i].elem1;*/
    btn.innerHTML = `<p>${keyboardArray[i].elem1}</p><p>${keyboardArray[i].elem2}</p>`;
    btn.className = (i === 13) ? "container__keyboard_btn-bs container__keyboard_btn" : "container__keyboard_btn";
    rowArray[0].append(btn);
}
for(let i = 14; i < 28; i++) {
    let btn = document.createElement('div');
    btn.innerHTML = keyboardArray[i].elem2;
    btn.className = (i === 14 || i === 27) ? "container__keyboard_btn-tab container__keyboard_btn" : "container__keyboard_btn";
    rowArray[1].append(btn);
}
for(let i = 28; i < 41; i++) {
    let btn = document.createElement('div');
    btn.innerHTML = keyboardArray[i].elem2;
    btn.className = (i === 28 || i === 40) ? "container__keyboard_btn-bs container__keyboard_btn" : "container__keyboard_btn";
    rowArray[2].append(btn);
}
for(let i = 41; i < 53; i++) {
    let btn = document.createElement('div');
    btn.innerHTML = keyboardArray[i].elem2;
    btn.className = (i === 41 || i === 52) ? "container__keyboard_btn-shift container__keyboard_btn" : "container__keyboard_btn";
    rowArray[3].append(btn);
}
for(let i = 53; i < 58; i++) {
    let btn = document.createElement('div');
    btn.innerHTML = keyboardArray[i].elem2;
    btn.className = (i === 53 || i === 57) ? "container__keyboard_btn-ctrl container__keyboard_btn" : 
    (i === 54 || i === 56) ? "container__keyboard_btn-alt container__keyboard_btn" : "container__keyboard_btn-space container__keyboard_btn";
    rowArray[4].append(btn);
}