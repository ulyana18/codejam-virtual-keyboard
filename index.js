import './style.css';

let keyboardArray = [ {keyCode: 'Backquote', elem1: 'ё', elem2: "`"}, {keyCode: 'Digit1', elem1: '!', elem2: "1"}, 
{keyCode: "Digit2", elem1: '@', elem2: "2"}, {keyCode: "Digit3", elem1: '#', elem2: "3"}, {keyCode: "Digit4", elem1: '$', elem2: "4"},
{keyCode: "Digit5", elem1: '%', elem2: "5"}, {keyCode: "Digit6", elem1: '^', elem2: "6"}, {keyCode: "Digit7", elem1: '&', elem2: "7"},
{keyCode: "Digit8", elem1: '*', elem2: "8"}, {keyCode: "Digit9", elem1: '(', elem2: "9"}, {keyCode: "Digit0", elem1: ')', elem2: "0"},
{keyCode: "Minus", elem1: '_', elem2: "-"}, {keyCode: "Equal", elem1: '+', elem2: "="}, {keyCode: "Backspace", elem1: ' ', elem2: "&#8592; backspace"},
{keyCode: "Tab", elem1: '', elem2: "Tab &#8596;"}, {keyCode: "KeyQ", elem1: 'й', elem2: "q"}, {keyCode: "KeyW", elem1: 'ц', elem2: "w"},
{keyCode: "KeyE", elem1: 'у', elem2: "e"}, {keyCode: "KeyR", elem1: 'к', elem2: "r"}, {keyCode: "KeyT", elem1: 'е', elem2: "t"},
{keyCode: "KeyY", elem1: 'н', elem2: "y"}, {keyCode: "KeyU", elem1: 'г', elem2: "u"}, {keyCode: "KeyI", elem1: 'ш', elem2: "i"},
{keyCode: "KeyO", elem1: 'щ', elem2: "o"}, {keyCode: "KeyP", elem1: 'з', elem2: "p"}, {keyCode: "BracketLeft", elem1: 'х', elem2: "["},
{keyCode: "BracketRight", elem1: 'ъ', elem2: "]"}, {keyCode: "Backslash", elem1: '|', elem2: "&#92;"}, {keyCode: "CapsLock", elem1: '', elem2: "CapsLock &#8657;"},
{keyCode: "KeyA", elem1: 'ф', elem2: "a"}, {keyCode: "KeyS", elem1: 'ы', elem2: "s"}, {keyCode: "KeyD", elem1: 'в', elem2: "d"},
{keyCode: "KeyF", elem1: 'а', elem2: "f"}, {keyCode: "KeyG", elem1: 'п', elem2: "g"}, {keyCode: "KeyH", elem1: 'р', elem2: "h"},
{keyCode: "KeyJ", elem1: 'о', elem2: "j"}, {keyCode: "KeyK", elem1: 'л', elem2: "k"}, {keyCode: "KeyL", elem1: 'д', elem2: "l"},
{keyCode: "Semicolon", elem1: 'ж', elem2: ";"}, {keyCode: "Quote", elem1: 'э', elem2: "'"}, {keyCode: "Enter", elem1: '', elem2: "&#8629; Enter"},
{keyCode: "ShiftLeft", elem1: '', elem2: "Shift &#8593;"}, {keyCode: "KeyZ", elem1: 'я', elem2: "z"}, {keyCode: "KeyX", elem1: 'ч', elem2: "x"},
{keyCode: "KeyC", elem1: 'с', elem2: "c"}, {keyCode: "KeyV", elem1: 'м', elem2: "v"}, {keyCode: "KeyB", elem1: 'и', elem2: "b"},
{keyCode: "KeyN", elem1: 'т', elem2: "n"}, {keyCode: "KeyM", elem1: 'ь', elem2: "m"}, {keyCode: "Comma", elem1: 'б', elem2: ","},
{keyCode: "Period", elem1: 'ю', elem2: "."}, {keyCode: "Slash", elem1: ',', elem2: "/"}, {keyCode: "ShiftRight", elem1: '', elem2: "&#8593; Shift"},
{keyCode: "ControlLeft", elem1: '', elem2: "ctrl"}, {keyCode: "AltLeft", elem1: '', elem2: "alt"}, {keyCode: "Space", elem1: '', elem2: " "},
{keyCode: "AltRight", elem1: '', elem2: "alt"}, {keyCode: "ControlRight", elem1: '', elem2: "ctrl"}
];

let lang;
if(localStorage == null) localStorage.setItem("lang", "0");

//localStorage.setItem("lang", lang);
let container = document.createElement('div');
container.className = "container";
document.body.append(container);

let textarea = document.createElement('textarea');
textarea.value = "write here";
textarea.className = "container__textarea";
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
let btnArray;

addButtons();

function addButtons() {
    for(let i = 0; i < 14; i++) {
        let btn = document.createElement('div');
        btn.innerHTML = `<p class="container__keyboard_btn-elem1">${keyboardArray[i].elem1}</p><p class="container__keyboard_btn-elem2">${keyboardArray[i].elem2}</p>`;
        btn.className = (i === 13) ? `container__keyboard_btn-bs container__keyboard_btn container__keyboard_btn-${i}` : 
        `container__keyboard_btn container__keyboard_btn-${i}`;
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
    btnArray = document.querySelectorAll('.container__keyboard_btn');
   if(localStorage.lang === '1')  {
       localStorage.lang = '0';
       changeLang();
   }

}

let highlightElem;
let capslock = 0;
keyboard.onclick = function(event) {
    let target = event.target;
    let symbol = target.querySelector('container__keyboard_btn-elem2');
    if(target.innerHTML === '← backspace' || target.innerHTML === '← BACKSPACE') {
        bsFunc();
        return;
    }
    if(target.classList.contains('container__keyboard_btn-28')) { 
        capslockFunc(target);
        return;
    }
    if(target.classList.contains('container__keyboard_btn-40')) {
        enterFunc();
        return;
    }
    if(target.classList.contains('container__keyboard_btn-41') ||
      target.classList.contains('container__keyboard_btn-52') ||
      target.classList.contains('container__keyboard_btn-53') ||
      target.classList.contains('container__keyboard_btn-54') ||
      target.classList.contains('container__keyboard_btn-56') ||
      target.classList.contains('container__keyboard_btn-57')) {
        return;
    }
    if(symbol === null) { 
        textarea.value += target.innerHTML;
        return;
    }
    textarea.value += symbol.innerHTML;
    
}

document.addEventListener('keydown', function(event) {
    for(let i = 0; i < keyboardArray.length; i++) {
        let obj = keyboardArray[i];
        if(obj.keyCode === event.code) {
            highlightElem = document.querySelector(`.container__keyboard_btn-${i}`);
            if(event.code === 'CapsLock') { 
                capslockFunc(highlightElem);
                return;
            }
            if(event.code === 'Tab') { 
                tabFunc();
            }
            highlightElem.style.backgroundColor = "#ffffff";
        }
    }
});
document.addEventListener('keyup', function(event) {
    for(let i =0; i < keyboardArray.length; i++) {
        let obj = keyboardArray[i];
        if(obj.keyCode === event.code && event.code !== 'CapsLock') {
            highlightElem = document.querySelector(`.container__keyboard_btn-${i}`);
            highlightElem.style.backgroundColor = "antiquewhite";
        }
    }
});

function capslockFunc(target){
    if(capslock === 0) {
        for(let i = 0; i < btnArray.length - 1; i++) {
            btnArray[i].style.textTransform = "uppercase";
            btnArray[i].innerHTML = btnArray[i].innerHTML.toUpperCase();
            capslock = 1;
        }       
        target.style.backgroundColor = "rgb(255, 254, 248)";

    }  
    else {
        for(let i = 0; i < btnArray.length - 1; i++) {
            btnArray[i].style.textTransform = "lowercase";
            btnArray[i].innerHTML = btnArray[i].innerHTML.toLowerCase();

            capslock = 0;
        }
        target.style.backgroundColor = "antiquewhite";

    }
}
function enterFunc() {
    textarea.value += '\n';
}
function tabFunc() {
    textarea.value += '\t';
}
function bsFunc() {
   textarea.value = textarea.value.slice(0, -1);
}

//////////////////////////////////////////////////

function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
      pressed.add(event.code);

      for (let code of codes) { 
        if (!pressed.has(code)) {
          return;
        }
      }
      pressed.clear();

      func();
    });

    document.addEventListener('keyup', function(event) {
      pressed.delete(event.code);
    });

  }

  runOnKeys(
    () => changeLang(),
    "ShiftLeft",
    "AltLeft"
  );
  runOnKeys(
    () => changeLang(),
    "ShiftRight",
    "AltRight"
  );
    console.log(localStorage.getItem("lang"));
  function changeLang() {
      if(localStorage.getItem("lang") === '0') {
            for(let i = 0; i < btnArray.length; i++) {
                if(i === 0) btnArray[i].innerHTML = `<p class="container__keyboard_btn-elem1">${keyboardArray[i].elem2}</p>
                    <p class="container__keyboard_btn-elem2">${keyboardArray[i].elem1}</p>`;
                if(i >= 14 && i < 52 && i !== 13 && i !== 14 && i !== 28 && i !== 40 && i !== 41) btnArray[i].innerHTML = keyboardArray[i].elem1;
            }
            //lang = '1';
            localStorage.setItem("lang", '1');


        }
        else {
            for(let i = 0; i < btnArray.length; i++) {
                if(i === 0) btnArray[i].innerHTML = `<p class="container__keyboard_btn-elem1">${keyboardArray[i].elem1}</p>
                    <p class="container__keyboard_btn-elem2">${keyboardArray[i].elem2}</p>`;
                if(i >= 14 && i < 52 && i !== 13 && i !== 14 && i !== 28 && i !== 40 && i !== 41) btnArray[i].innerHTML = keyboardArray[i].elem2;
            }
            localStorage.setItem("lang", '0');

        }
    }

