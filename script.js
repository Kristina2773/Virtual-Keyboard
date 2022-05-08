
const body = document.querySelector('body');
body.classList.add('RU');

let textarea = document.createElement('textarea');
textarea.classList.add('textarea');
textarea.setAttribute('disabled', 'disabled');
body.append(textarea);

const keyboardWrapper = document.createElement('div');
keyboardWrapper.classList.add('keyboard-wrapper');
body.append(keyboardWrapper);

function createWrapper(arr) {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
        
    for (let i = 0 ; i < arr.length; i++) {
        keyboard.append(arr[i]);
    }
    return keyboard;
}
    
const KeyboardArrRU = [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'TAB', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '&#92;', ':)',
    'Capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'c', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', ' Shift',
    'Ctrl', 'Win', 'Alt', '', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'
    ]
const KeyboardArrEN = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'TAB', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&#92;', ':)',
    'Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '&#8242;', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', ' Shift',
    'Ctrl', 'Win', 'Alt', '', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'
]

const KeySigns = ['`', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'];

const idArr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
                'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI','KeyO','KeyP','BracketLeft', 'BracketRight', 'Backslash','Delete',
                'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
                'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM','Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
                'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];


function setLocalStorage(name, val) {
    localStorage.setItem(name, val);
}

function getLocalStorage() {
    if (localStorage.getItem('KeyboardLang')) {
      const lang = localStorage.getItem('KeyboardLang');
      if (lang == 'en') {
        body.classList.remove('RU');
        body.classList.add('EN');
        keyboardWrapper.innerHTML = ``;
        keyboardWrapper.append(createWrapper(createKeys(KeyboardArrEN)));
        controlCaps();
        controlBackspace();
      } else {
        body.classList.remove('EN');
        body.classList.add('RU');
        keyboardWrapper.innerHTML = ``;
        keyboardWrapper.append(createWrapper(createKeys(KeyboardArrRU)));
        controlCaps();
        controlBackspace();
      }
      
    }
    typeText();
}

window.addEventListener('load', getLocalStorage);

keyboardWrapper.append(createWrapper(createKeys(KeyboardArrEN)));

function createKeys(lang) {
    let arr = [];
    for(let i = 0; i < lang.length; i++) {
        const keyDiv = document.createElement('div');
        keyDiv.classList.add('keyboard-key');
        keyDiv.setAttribute('id', `${idArr[i]}`);
        if (lang[i] == 'Backspace' || lang[i] == 'Capslock' || lang[i] == 'Shift' || lang[i] == 'Enter' || lang[i] == ' Shift') {
            keyDiv.classList.add('keyboard-wide');
            if (lang[i] == 'Capslock') {
                keyDiv.classList.add('capslock');
            }
            if (lang[i] == 'Backspace') {
                keyDiv.classList.add('backspace');
            }
            if(lang[i] == 'Shift' || lang[i] == ' Shift') {
                 keyDiv.classList.add('shift');
            }
        } 
                
        if(lang[i] !== 'Backspace' && lang[i] !== 'Capslock' && lang[i] !== 'Shift' && lang[i] !== 'Enter' && lang[i] !== ' Shift' && lang[i] !== 'Ctrl' && lang[i] !== 'Win'  && lang[i] !== 'Alt' && lang[i] != 'TAB') {
            keyDiv.classList.add('letters');
        }
        if (lang[i] == '') {
            keyDiv.classList.add('keyboard-space');
        }
        keyDiv.innerHTML = `${lang[i]}`;
        arr.push(keyDiv);
        if(lang[i] == 'Backspace' || lang[i] == ':)' || lang[i] == 'Enter' || lang[i] == ' Shift') {
            const breakDiv = document.createElement('div');
            breakDiv.classList.add('break');
            arr.push(breakDiv);
        }
    }
    return arr;
}
 
document.addEventListener('keydown', (event) => {
    if(event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        if(body.classList.contains('RU')) {
            keyboardWrapper.innerHTML = ``;
            keyboardWrapper.append(createWrapper(createKeys(changeSigns(KeyboardArrRU))));
                
        } else {
            keyboardWrapper.innerHTML = ``;
            keyboardWrapper.append(createWrapper(createKeys(changeSigns(KeyboardArrEN)))); 
        }

        let lettersKey = document.querySelectorAll('.letters');
        changeRegistr(lettersKey);
        
    }
    if(event.code) {
        console.log(event.code)
        document.getElementById(`${event.code}`).classList.add('active');
        typeText();
        let e = event.code;
        if(e == 'Backspace' || e == 'CapsLock' ||  e == 'ShiftLeft' || e == 'ShiftRight' || e == 'ControlLeft' || e == 'ControlRight' || e == 'Win' || e == 'AltLeft' || e == 'AltRight') {
            let text = textarea.textContent;
            textarea.textContent = text;
        } else if (e == 'Enter') {
            textarea.textContent += `\n`;
        } else if(e == 'Tab') {
            console.log('tab')
            textarea.textContent += '   ';
            console.log(textarea.textContent.length)
        } else if(e == 'Space') {
            textarea.textContent += ' ';
        } else {
            console.log('ahaha')
            textarea.textContent += document.getElementById(`${e}`).textContent;
            console.log(textarea.textContent)
        }
    }    
})


function controlCaps() {
    let capslock = document.querySelector('.capslock'); 
    capslock.addEventListener('click', () => {
        let lettersKey = document.querySelectorAll('.letters');
        changeRegistr(lettersKey);
    });
}

document.addEventListener('keyup', (event) => {
    if(event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        if(body.classList.contains('RU')) {
            keyboardWrapper.innerHTML = ``;
            keyboardWrapper.append(createWrapper(createKeys(KeyboardArrRU)));
        } else {
            keyboardWrapper.innerHTML = ``;
            keyboardWrapper.append(createWrapper(createKeys(KeyboardArrEN)));
        } 
    } 
    controlCaps();
    if(event.code) {
        document.getElementById(`${event.code}`).classList.remove('active');
        typeText();
    } 
})

document.addEventListener('keydown', (event) => {
    if(event.code == 'CapsLock') {
        let lettersKey = document.querySelectorAll('.letters');
        changeRegistr(lettersKey); 
    }
    if(event.code == 'Backspace') {
        let content = textarea.textContent.toString();
        let arr = content.split('');
        arr.pop();
        let resultArr = arr.join('');
        textarea.textContent = `${resultArr}`;
    }
});

document.addEventListener('mousedown', (event) => {
    if(event.target.textContent == 'Shift' || event.target.textContent == ' Shift') {
        if(body.classList.contains('RU')) {
            keyboardWrapper.innerHTML = ``;
            keyboardWrapper.append(createWrapper(createKeys(changeSigns(KeyboardArrRU))));
                
        } else {
            keyboardWrapper.innerHTML = ``;
            keyboardWrapper.append(createWrapper(createKeys(changeSigns(KeyboardArrEN)))); 
        }

        let lettersKey = document.querySelectorAll('.letters');
        changeRegistr(lettersKey);
    }
    if(event.target) {
        document.getElementById(`${event.target}`).classList.add('active');
        typeText();
    }
})

document.addEventListener('mouseup', (event) => {
    if(event.target.textContent == 'Shift' || event.target.textContent == ' Shift') {
        if(body.classList.contains('RU')) {
            keyboardWrapper.innerHTML = ``;
            keyboardWrapper.append(createWrapper(createKeys(KeyboardArrRU)));
        } else {
            keyboardWrapper.innerHTML = ``;
            keyboardWrapper.append(createWrapper(createKeys(KeyboardArrEN)));
        }
        controlCaps(); 
    }
    if(event.target) {
        document.getElementById(`${event.target}`).classList.add('active');
        typeText();
    }
    
});

function changeSigns(lang) {
    let newKeySigns = [];
    for(let i = 0; i < lang.length; i++) {
        if (lang[i] == 'Backspace') {
            let sliceArr = lang.slice(i, lang.length);
            newKeySigns.push(KeySigns);
            newKeySigns.push(sliceArr);
        } 
    }
    return newKeySigns.flat();
}

function changeRegistr(lettersKey) {
        lettersKey.forEach(l_key => {
            l_key.classList.toggle('lower');
            if (l_key.classList.contains('lower')) {
                l_key.textContent = l_key.textContent.toUpperCase();
            } else {
                l_key.textContent = l_key.textContent.toLowerCase();
            }
        });
}

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


function changeLang() {
    if(body.classList.contains('RU')) {
        body.classList.remove('RU');
        keyboardWrapper.innerHTML = ``;
        keyboardWrapper.append(createWrapper(createKeys(KeyboardArrEN)));
        body.classList.add('EN');
        typeText();
        setLocalStorage('KeyboardLang', 'en');
    } else {
        body.classList.remove('EN');
        keyboardWrapper.innerHTML = ``;
        keyboardWrapper.append(createWrapper(createKeys(KeyboardArrRU)));
        body.classList.add('RU');
        typeText();
        setLocalStorage('KeyboardLang', 'ru');
    }
}

runOnKeys(()=> {
    changeLang();
}, 'ControlLeft', 'ShiftLeft');

runOnKeys(()=> {
    changeLang();
}, 'ControlRight', 'ShiftRight');

function typeText() {
    let keyboardKey = document.querySelectorAll('.keyboard-key');
    let textarea = document.querySelector('.textarea');
    keyboardKey.forEach(k_key => {
        k_key.addEventListener('click', () => {
            if(k_key.classList.contains('letters')) {
                textarea.textContent += k_key.textContent;
            }
            if (k_key.textContent == 'Enter') {
                textarea.textContent += `\n`;
            } else if(k_key.textContent == 'TAB') {
                textarea.textContent += '    ';
            } else if(k_key.textContent == '') {
                textarea.textContent += ' ';
            }
        })
    })
}


function controlBackspace() {
    let textarea = document.querySelector('.textarea');
    let backspace = document.querySelector('.backspace');
        backspace.addEventListener('click', () => {
            let content = textarea.textContent.toString();
            let arr = content.split('');
            arr.pop();
            let resultArr = arr.join('');
            textarea.textContent = `${resultArr}`;
        });
    
}



