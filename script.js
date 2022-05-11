const body = document.querySelector('body');
body.classList.add('RU');
const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
textarea.classList.add('none');
textarea.setAttribute('disabled', 'disabled');
body.append(textarea);
const keyboardWrapper = document.createElement('div');
keyboardWrapper.classList.add('keyboard-wrapper');
keyboardWrapper.classList.add('opacity');
body.append(keyboardWrapper);
const modal = document.createElement('div');
modal.classList.add('modal-wrapper');
modal.setAttribute('data-close', 'data-close');
function renderPopap() {
  modal.innerHTML = ` 
    <div class = "modal">
      <div class = "modal-content">
        <h2 class = "modal-title">Hello. The auto-remembering keyboard is at your service. It will print whatever the client wants.</h2>
        <p class = "modal-text">The keyboard was created in the Window operating system</p>
        <p class = "modal-text">To switch the language combination: <strong>shift</strong> + <strong>ctrl</strong></p>
      </div>
      <button class="modal-button" name="button" data-close>&#10006;</button>  
    </div>    
  `;
}
renderPopap();
body.append(modal);
const modalWrapper = document.querySelector('.modal-wrapper');
const closeContent = document.querySelector('[data-close]');
function closeModalContent() {
  modalWrapper.classList.add('hidden');
  modalWrapper.classList.remove('show');
  textarea.classList.remove('none');
  keyboardWrapper.classList.remove('opacity');
}
closeContent.addEventListener('click', (e) => {
  const tar = e.target;
  if (tar.classList.contains('modal-wrapper') || tar.classList.contains('modal-button') || tar.classList.contains('modal')) {
    closeModalContent();
  }
});
function createWrapper(arr) {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  for (let i = 0; i < arr.length; i) {
    keyboard.append(arr[i]);
    i += 1;
  }
  return keyboard;
}
const KeyboardArrRU = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'TAB', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '&#92;', ':)',
  'Capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'c', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', ' Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl',
];
const KeyboardArrEN = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'TAB', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&#92;', ':)',
  'Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '&#8242;', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', ' Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl',
];
const KeySigns = ['`', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'];
const idArr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

function changeRegistr(lettersKey) {
  lettersKey.forEach((lKey) => {
    const key = lKey;
    lKey.classList.toggle('lower');
    if (lKey.classList.contains('lower')) {
      key.textContent = lKey.textContent.toUpperCase();
    } else {
      key.textContent = lKey.textContent.toLowerCase();
    }
  });
}
function createKeys(lang) {
  const arr = [];
  for (let i = 0; i < lang.length; i) {
    const keyDiv = document.createElement('div');
    keyDiv.classList.add('keyboard-key');
    keyDiv.setAttribute('id', `${idArr[i]}`);
    if (lang[i] === 'Backspace' || lang[i] === 'Capslock' || lang[i] === 'Shift' || lang[i] === 'Enter' || lang[i] === ' Shift') {
      keyDiv.classList.add('keyboard-wide');
      if (lang[i] === 'Capslock') {
        keyDiv.classList.add('capslock');
      }
      if (lang[i] === 'Backspace') {
        keyDiv.classList.add('backspace');
      }
      if (lang[i] === 'Shift' || lang[i] === ' Shift') {
        keyDiv.classList.add('shift');
      }
    }
    if (lang[i] !== 'Backspace' && lang[i] !== 'Capslock' && lang[i] !== 'Shift' && lang[i] !== 'Enter' && lang[i] !== ' Shift' && lang[i] !== 'Ctrl' && lang[i] !== 'Win' && lang[i] !== 'Alt' && lang[i] !== 'TAB') {
      keyDiv.classList.add('letters');
    }
    if (lang[i] === '') {
      keyDiv.classList.add('keyboard-space');
    }
    keyDiv.innerHTML = `${lang[i]}`;
    arr.push(keyDiv);
    if (lang[i] === 'Backspace' || lang[i] === ':)' || lang[i] === 'Enter' || lang[i] === ' Shift') {
      const breakDiv = document.createElement('div');
      breakDiv.classList.add('break');
      arr.push(breakDiv);
    }
    i += 1;
  }
  return arr;
}
function controlBackspace() {
  const textAreA = document.querySelector('.textarea');
  const backspace = document.querySelector('.backspace');
  backspace.addEventListener('click', () => {
    const content = textAreA.textContent.toString();
    const arr = content.split('');
    arr.pop();
    const resultArr = arr.join('');
    textAreA.textContent = `${resultArr}`;
  });
}
function changeSigns(lang) {
  const newKeySigns = [];
  for (let i = 0; i < lang.length; i) {
    if (lang[i] === 'Backspace') {
      const sliceArr = lang.slice(i, lang.length);
      newKeySigns.push(KeySigns);
      newKeySigns.push(sliceArr);
    }
    i += 1;
  }
  return newKeySigns.flat();
}
function controlCaps() {
  const capslock = document.querySelector('.capslock');
  capslock.addEventListener('click', () => {
    capslock.classList.toggle('active-caps');
    const lettersKey = document.querySelectorAll('.letters');
    changeRegistr(lettersKey);
    keyboardWrapper.classList.toggle('caps');
  });
}
function typeText() {
  const keyboardKey = document.querySelectorAll('.keyboard-key');
  const textArea = document.querySelector('.textarea');
  keyboardKey.forEach((kkey) => {
    kkey.addEventListener('click', () => {
      if (kkey.classList.contains('letters')) {
        textArea.textContent += kkey.textContent;
      }
      if (kkey.textContent === 'Enter') {
        textArea.textContent += '\n';
      } else if (kkey.textContent === 'TAB') {
        textArea.textContent += '    ';
      } else if (kkey.textContent === '') {
        textArea.textContent += ' ';
      }
    });
  });
}
function setLocalStorage(name, val) {
  localStorage.setItem(name, val);
}
function getLocalStorage() {
  if (localStorage.getItem('KeyboardLang')) {
    const lang = localStorage.getItem('KeyboardLang');
    if (lang === 'en') {
      body.classList.remove('RU');
      body.classList.add('EN');
      keyboardWrapper.innerHTML = '';
      keyboardWrapper.append(createWrapper(createKeys(KeyboardArrEN)));
      controlCaps();
      controlBackspace();
    } else {
      body.classList.remove('EN');
      body.classList.add('RU');
      keyboardWrapper.innerHTML = '';
      keyboardWrapper.append(createWrapper(createKeys(KeyboardArrRU)));
      controlCaps();
      controlBackspace();
    }
  }
  typeText();
}
window.addEventListener('load', getLocalStorage);
keyboardWrapper.append(createWrapper(createKeys(KeyboardArrEN)));
document.addEventListener('keydown', (event) => {
  if (event.code) {
    if (event.code !== 'CapsLock') {
      document.getElementById(`${event.code}`).classList.add('active');
    }
    const e = event.code;
    if (e === 'Backspace' || e === 'CapsLock' || e === 'ShiftLeft' || e === 'ShiftRight' || e === 'ControlLeft' || e === 'ControlRight' || e === 'MetaLeft' || e === 'AltLeft' || e === 'AltRight') {
      const text = textarea.textContent;
      textarea.textContent = text;
    } else if (e === 'Enter') {
      textarea.textContent += '\n';
    } else if (e === 'Tab') {
      event.preventDefault();
      textarea.textContent += '   ';
    } else if (e === 'Space') {
      textarea.textContent += ' ';
    } else {
      textarea.textContent += document.getElementById(`${e}`).textContent;
    }
  }
  if (event.code === 'CapsLock') {
    document.getElementById('CapsLock').classList.toggle('active-caps');
    keyboardWrapper.classList.toggle('caps');
    const lettersKey = document.querySelectorAll('.letters');
    changeRegistr(lettersKey);
  }
  if (event.code === 'Backspace') {
    const content = textarea.textContent.toString();
    const arr = content.split('');
    arr.pop();
    const resultArr = arr.join('');
    textarea.textContent = `${resultArr}`;
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (body.classList.contains('RU')) {
      keyboardWrapper.innerHTML = '';
      keyboardWrapper.append(createWrapper(createKeys(changeSigns(KeyboardArrRU))));
      document.addEventListener('keydown', (e) => {
        if (e.code) {
          document.getElementById(`${e.code}`).classList.add('active');
        }
      });
    } else {
      keyboardWrapper.innerHTML = '';
      keyboardWrapper.append(createWrapper(createKeys(changeSigns(KeyboardArrEN))));
      document.addEventListener('keydown', (e) => {
        if (e.code) {
          document.getElementById(`${e.code}`).classList.add('active');
        }
      });
    }
    if (keyboardWrapper.classList.contains('caps')) {
      const lettersKey = document.querySelectorAll('.letters');
      lettersKey.forEach((lKey) => {
        const key = lKey;
        lKey.classList.toggle('lower');
        if (lKey.classList.contains('lower')) {
          key.textContent = lKey.textContent.toLowerCase();
        } else if (!lKey.classList.contains('lower')) {
          key.textContent = lKey.textContent.toUpperCase();
        }
      });
    } else {
      const lettersKey = document.querySelectorAll('.letters');
      changeRegistr(lettersKey);
    }
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code !== 'CapsLock') {
    document.getElementById(`${event.code}`).classList.remove('active');
  }
  if (event.code === 'CapsLock') {
    document.getElementById('CapsLock').classList.remove('active');
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (keyboardWrapper.classList.contains('caps')) {
      if (body.classList.contains('RU')) {
        keyboardWrapper.innerHTML = '';
        keyboardWrapper.append(createWrapper(createKeys(KeyboardArrRU)));
      } else {
        keyboardWrapper.innerHTML = '';
        keyboardWrapper.append(createWrapper(createKeys(KeyboardArrEN)));
      }
      document.getElementById('CapsLock').classList.toggle('active-caps');
      const lettersKey = document.querySelectorAll('.letters');
      changeRegistr(lettersKey);
    } else if (!keyboardWrapper.classList.contains('caps')) {
      if (body.classList.contains('RU')) {
        keyboardWrapper.innerHTML = '';
        keyboardWrapper.append(createWrapper(createKeys(KeyboardArrRU)));
      } else if (body.classList.contains('EN')) {
        keyboardWrapper.innerHTML = '';
        keyboardWrapper.append(createWrapper(createKeys(KeyboardArrEN)));
      }
    }
    typeText();
    controlBackspace();
    controlCaps();
  }
});
typeText();
document.addEventListener('mousedown', (event) => {
  if (event.target.textContent === 'Shift' || event.target.textContent === ' Shift') {
    if (body.classList.contains('RU')) {
      keyboardWrapper.innerHTML = '';
      keyboardWrapper.append(createWrapper(createKeys(changeSigns(KeyboardArrRU))));
    } else {
      keyboardWrapper.innerHTML = '';
      keyboardWrapper.append(createWrapper(createKeys(changeSigns(KeyboardArrEN))));
    }
    if (keyboardWrapper.classList.contains('caps')) {
      const lettersKey = document.querySelectorAll('.letters');
      lettersKey.forEach((lKey) => {
        const key = lKey;
        lKey.classList.toggle('lower');
        if (lKey.classList.contains('lower')) {
          key.textContent = lKey.textContent.toLowerCase();
        } else {
          key.textContent = lKey.textContent.toUpperCase();
        }
      });
    } else {
      const lettersKey = document.querySelectorAll('.letters');
      changeRegistr(lettersKey);
    }
    typeText();
  }
});
document.addEventListener('mouseup', (event) => {
  if (event.target.textContent === 'Shift' || event.target.textContent === ' Shift') {
    if (body.classList.contains('RU')) {
      keyboardWrapper.innerHTML = '';
      keyboardWrapper.append(createWrapper(createKeys(KeyboardArrRU)));
    } else {
      keyboardWrapper.innerHTML = '';
      keyboardWrapper.append(createWrapper(createKeys(KeyboardArrEN)));
    }
    if (keyboardWrapper.classList.contains('caps')) {
      keyboardWrapper.classList.remove('caps');
      if (body.classList.contains('RU')) {
        keyboardWrapper.innerHTML = '';
        keyboardWrapper.append(createWrapper(createKeys(KeyboardArrRU)));
      } else {
        keyboardWrapper.innerHTML = '';
        keyboardWrapper.append(createWrapper(createKeys(KeyboardArrEN)));
      }
      document.getElementById('CapsLock').classList.toggle('active-caps');
      const lettersKey = document.querySelectorAll('.letters');
      changeRegistr(lettersKey);
    } else if (!keyboardWrapper.classList.contains('caps')) {
      if (body.classList.contains('RU')) {
        keyboardWrapper.innerHTML = '';
        keyboardWrapper.append(createWrapper(createKeys(KeyboardArrRU)));
      } else if (body.classList.contains('EN')) {
        keyboardWrapper.innerHTML = '';
        keyboardWrapper.append(createWrapper(createKeys(KeyboardArrEN)));
      }
    }
    controlCaps();
    controlBackspace();
    typeText();
  }
});
function runOnKeys(func, ...codes) {
  const pressed = new Set();
  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);
    for (let i = 0; i < codes.length; i) {
      if (!pressed.has(codes[i])) {
        return;
      }
      i += 1;
    }
    pressed.clear();
    func();
  });
  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}
function changeLang() {
  if (body.classList.contains('RU')) {
    body.classList.remove('RU');
    keyboardWrapper.innerHTML = '';
    keyboardWrapper.append(createWrapper(createKeys(KeyboardArrEN)));
    body.classList.add('EN');
    typeText();
    setLocalStorage('KeyboardLang', 'en');
  } else if (body.classList.contains('EN')) {
    body.classList.remove('EN');
    keyboardWrapper.innerHTML = '';
    keyboardWrapper.append(createWrapper(createKeys(KeyboardArrRU)));
    body.classList.add('RU');
    typeText();
    setLocalStorage('KeyboardLang', 'ru');
  }
  document.addEventListener('keydown', (event) => {
    if (event.code) {
      document.getElementById(`${event.code}`).classList.add('active');
    }
  });
}

runOnKeys(() => {
  changeLang();
}, 'ShiftLeft', 'ControlLeft');

runOnKeys(() => {
  changeLang();
}, 'ShiftRight', 'ControlRight');

runOnKeys(() => {
  changeLang();
}, 'ShiftRight', 'ControlLeft');

runOnKeys(() => {
  changeLang();
}, 'ShiftLeft', 'ControlRight');
