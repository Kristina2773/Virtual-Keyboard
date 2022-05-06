const body = document.querySelector('body');
body.classList.add('RU');

let textarea = document.createElement('textarea');
textarea.classList.add('textarea');
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
        'TAB', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '&#92;', 'Del',
        'Capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
        'Shift', 'я', 'ч', 'c', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', ' Shift',
        'Ctrl', 'Win', 'Alt', '', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'
    ]
    const KeyboardArrEN = [
        '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'TAB', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&#92;', 'Del',
        'Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '&#8242;', 'Enter',
        'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', ' Shift',
        'Ctrl', 'Win', 'Alt', '', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'
    ]

    const KeySigns = ['`', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'];

    keyboardWrapper.append(createWrapper(createKeys(KeyboardArrRU)));

        function createKeys(lang) {
            let arr = [];
            for(let i = 0; i < lang.length; i++) {
                const keyDiv = document.createElement('div');
                keyDiv.classList.add('keyboard-key');
                if (lang[i] == 'Backspace' || lang[i] == 'Capslock' || lang[i] == 'Shift' || lang[i] == 'Enter' || lang[i] == ' Shift') {
                    keyDiv.classList.add('keyboard-wide');
                    if (lang[i] == 'Capslock') {
                        keyDiv.classList.add('capslock');
                    }
                    if(lang[i] == 'Shift' || lang[i] == ' Shift') {
                        keyDiv.classList.add('shift');
                    }
                } 
                
                if(lang[i] !== 'Backspace' && lang[i] !== 'Capslock' && lang[i] !== 'Shift' && lang[i] !== 'Enter' && lang[i] !== ' Shift' && lang[i] !== 'Ctrl' && lang[i] !== 'Win' && lang[i] != 'Del' && lang[i] !== 'Alt' && lang[i] != 'TAB') {
                    keyDiv.classList.add('letters');
                }
                if (lang[i] == '') {
                    keyDiv.classList.add('keyboard-space');
                }
                keyDiv.innerHTML = `${lang[i]}`;
                arr.push(keyDiv);
                if(lang[i] == 'Backspace' || lang[i] == 'Del' || lang[i] == 'Enter' || lang[i] == ' Shift') {
                    const breakDiv = document.createElement('div');
                    breakDiv.classList.add('break');
                    arr.push(breakDiv);
                }
            };
            return arr;
        }
 

let shifts = document.querySelectorAll('.shift');

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
        lettersKey.forEach(l_key => {l_key.classList.add('lower')})
        changeRegistr(lettersKey);
    }
        
})

document.addEventListener('keyup', (event) => {
    if(event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        if(body.classList.contains('RU')) {
            keyboardWrapper.innerHTML = ``;
            keyboardWrapper.append(createWrapper(createKeys(KeyboardArrRU)));
        } else {
            keyboardWrapper.innerHTML = ``;
            keyboardWrapper.append(createWrapper(createKeys(KeyboardArrEN)));
        } 
        let lettersKey = document.querySelectorAll('.letters');
        lettersKey.forEach(l_key => {l_key.classList.add('upper')})
        changeRegistr(lettersKey);
    }
        
})

let capslock = document.querySelector('.capslock'); 
let lettersKey = document.querySelectorAll('.letters');
lettersKey.forEach(l_key => {l_key.classList.add('lower')})

capslock.addEventListener('click', () => {
    console.log('click');
    changeRegistr(lettersKey);
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
            if (l_key.classList.contains('lower')) {
                l_key.textContent = l_key.textContent.toUpperCase();
                l_key.classList.remove('lower');
                l_key.classList.add('upper');
            } else {
                l_key.textContent = l_key.textContent.toLowerCase();
                l_key.classList.remove('upper');
                l_key.classList.add('lower');
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
    } else {
        body.classList.remove('EN');
        keyboardWrapper.innerHTML = ``;
        keyboardWrapper.append(createWrapper(createKeys(KeyboardArrRU)));
        body.classList.add('RU');
        typeText();
    }
}

runOnKeys(()=> {
    changeLang()
}, 'ShiftLeft', 'AltLeft');


let keyboardKey = document.querySelectorAll('.keyboard-key');

function typeText() {
    // let letters = document.querySelectorAll('.letters');
    // letters.forEach(key => {
    //     key.addEventListener('click', () => {
    //         textarea.textContent += key.textContent;
    //     });
    // });
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
typeText();


