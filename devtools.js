// Paint devtool state
let activeColor;

// Cycle-maker devtool state
let cycles = [[]];

function setAllGray() {
  for (let i = 0; i < stickers.length; i++) {
    stickers[i].setAttribute('fill', 'gray');
  }
}

function setupCycleMakerDevtool() {
  $('#cycle-maker-devtool').style.display = 'block';
  updateCycles();

  for (let i = 0; i < stickers.length; i++) {
    stickers[i].addEventListener('click', () => {
      stickers[i].style.opacity = '0.3';
      cycles.at(-1).push(i);
      updateCycles();
    });
  }
}

function nextCycle() {
  cycles.push([]);
  updateCycles();
}

function resetCycles() {
  cycles = [[]];
  updateCycles();
}

function updateCycles() {
  $('#console').innerHTML = JSON.stringify(cycles, null, 2);
}

function setupPaintDevtool() {
  function updateSwatchColor() {
    $('#swatch').style.backgroundColor = activeColor;
  }

  const consoleEl = $('#console');

  $('#paint-devtool').style.display = 'block';

  activeColor = 'red';
  updateSwatchColor();

  document.addEventListener('keydown', e => {
    console.log(e.key);
    if (e.key === 'a') {
      activeColor = 'white';
    } else if (e.key === 'o') {
      activeColor = 'green';
    } else if (e.key === 'e') {
      activeColor = 'red';
    } else if (e.key === "'") {
      activeColor = 'yellow';
    } else if (e.key === ',') {
      activeColor = 'blue';
    } else if (e.key === '.') {
      activeColor = 'orange';
    }
    updateSwatchColor();
  });

  for (let i = 0; i < stickers.length; i++) {
    stickers[i].addEventListener('click', () => {
      const setColorCode = `stickers[${i}].setAttribute('fill', '${activeColor}');`;
      eval(setColorCode);
      consoleEl.innerHTML += setColorCode + '\n';
    });
  }
}
