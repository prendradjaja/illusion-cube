const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

// For each i, stickers[i] and strokes[i] correspond to the same sticker.
// TODO Can an SVG object have both fill and stroke, so I can simplify this? Probably yes
let stickers;
let strokes;

function main() {
  drawCube();

  stickers = Array.from($$('path'))
    .filter(path => path.getAttribute('fill') === '#eeeeee');
  strokes = Array.from($$('path'))
    .filter(path => path.getAttribute('stroke') === '#595959');

  setInitialColors();
  fadeBacks();

  setupControls();

  // setupCycleMakerDevtool();
  // setupPaintDevtool();

  // suneDemo();
  // moreDemosCube1();
  // moreDemosCube0();
}

function drawCube() {
  $('#svg-container').innerHTML = cubesWithBacksAsset;
}

function setInitialColors() {

  stickers[36].setAttribute('fill', 'black');
  stickers[37].setAttribute('fill', 'black');
  stickers[38].setAttribute('fill', 'black');
  stickers[43].setAttribute('fill', 'black');
  stickers[42].setAttribute('fill', 'black');
  stickers[44].setAttribute('fill', 'black');
  stickers[41].setAttribute('fill', 'black');
  stickers[40].setAttribute('fill', 'black');
  stickers[39].setAttribute('fill', 'black');

  stickers[2].setAttribute('fill',  'black');
  stickers[1].setAttribute('fill',  'black');
  stickers[0].setAttribute('fill',  'black');
  stickers[6].setAttribute('fill',  'black');
  stickers[8].setAttribute('fill',  'black');
  stickers[7].setAttribute('fill',  'black');
  stickers[5].setAttribute('fill',  'black');
  stickers[4].setAttribute('fill',  'black');
  stickers[3].setAttribute('fill',  'black');

  stickers[30].setAttribute('fill', 'black');
  stickers[31].setAttribute('fill', 'black');
  stickers[32].setAttribute('fill', 'black');
  stickers[35].setAttribute('fill', 'black');
  stickers[34].setAttribute('fill', 'black');
  stickers[29].setAttribute('fill', 'black');
  stickers[28].setAttribute('fill', 'black');
  stickers[27].setAttribute('fill', 'black');
  stickers[33].setAttribute('fill', 'black');

  stickers[84].setAttribute('fill', 'black');
  stickers[85].setAttribute('fill', 'black');
  stickers[86].setAttribute('fill', 'black');
  stickers[88].setAttribute('fill', 'black');
  stickers[87].setAttribute('fill', 'black');
  stickers[89].setAttribute('fill', 'black');
  stickers[83].setAttribute('fill', 'black');
  stickers[82].setAttribute('fill', 'black');
  stickers[81].setAttribute('fill', 'black');

  stickers[74].setAttribute('fill', 'black');
  stickers[73].setAttribute('fill', 'black');
  stickers[72].setAttribute('fill', 'black');
  stickers[80].setAttribute('fill', 'black');
  stickers[79].setAttribute('fill', 'black');
  stickers[78].setAttribute('fill', 'black');
  stickers[77].setAttribute('fill', 'black');
  stickers[76].setAttribute('fill', 'black');
  stickers[75].setAttribute('fill', 'black');

  stickers[90].setAttribute('fill', 'black');
  stickers[91].setAttribute('fill', 'black');
  stickers[92].setAttribute('fill', 'black');
  stickers[98].setAttribute('fill', 'black');
  stickers[97].setAttribute('fill', 'black');
  stickers[96].setAttribute('fill', 'black');
  stickers[93].setAttribute('fill', 'black');
  stickers[94].setAttribute('fill', 'black');
  stickers[95].setAttribute('fill', 'black');

  stickers[18].setAttribute('fill', 'black');
  stickers[20].setAttribute('fill', 'black');
  stickers[19].setAttribute('fill', 'black');
  stickers[25].setAttribute('fill', 'black');
  stickers[24].setAttribute('fill', 'black');
  stickers[26].setAttribute('fill', 'black');
  stickers[23].setAttribute('fill', 'black');
  stickers[22].setAttribute('fill', 'black');
  stickers[21].setAttribute('fill', 'black');

  stickers[12].setAttribute('fill', 'black');
  stickers[13].setAttribute('fill', 'black');
  stickers[14].setAttribute('fill', 'black');
  stickers[17].setAttribute('fill', 'black');
  stickers[16].setAttribute('fill', 'black');
  stickers[15].setAttribute('fill', 'black');
  stickers[9].setAttribute('fill',  'black');
  stickers[10].setAttribute('fill', 'black');
  stickers[11].setAttribute('fill', 'black');

  stickers[65].setAttribute('fill', 'black');
  stickers[64].setAttribute('fill', 'black');
  stickers[63].setAttribute('fill', 'black');
  stickers[69].setAttribute('fill', 'black');
  stickers[70].setAttribute('fill', 'black');
  stickers[71].setAttribute('fill', 'black');
  stickers[68].setAttribute('fill', 'black');
  stickers[67].setAttribute('fill', 'black');
  stickers[66].setAttribute('fill', 'black');

  stickers[59].setAttribute('fill', 'black');
  stickers[58].setAttribute('fill', 'black');
  stickers[57].setAttribute('fill', 'black');
  stickers[60].setAttribute('fill', 'black');
  stickers[61].setAttribute('fill', 'black');
  stickers[62].setAttribute('fill', 'black');
  stickers[56].setAttribute('fill', 'black');
  stickers[55].setAttribute('fill', 'black');
  stickers[54].setAttribute('fill', 'black');

  stickers[47].setAttribute('fill', 'black');
  stickers[46].setAttribute('fill', 'black');
  stickers[53].setAttribute('fill', 'black');
  stickers[52].setAttribute('fill', 'black');
  stickers[50].setAttribute('fill', 'black');
  stickers[49].setAttribute('fill', 'black');
  stickers[48].setAttribute('fill', 'black');
  stickers[51].setAttribute('fill', 'black');
  stickers[45].setAttribute('fill', 'black');

}

function fadeBacks() {
  const stickerIds = [84, 85, 86, 88, 87, 89, 83, 82, 81, 74, 73, 72, 80, 79, 78, 77, 76, 75, 90, 91, 92, 98, 97, 96, 93, 94, 95, 65, 64, 63, 69, 70, 71, 68, 67, 66, 59, 58, 57, 60, 61, 62, 56, 55, 54, 47, 46, 53, 52, 50, 49, 48, 51, 45];

  for (let id of stickerIds) {
    stickers[id].setAttribute('opacity', '40%');
    strokes[id].setAttribute('opacity', '40%');
  }
}

function setupControls() {
  const cubeIdAttr = 'data-cube-id';
  const moveAttr = 'data-move';

  const buttons = Array.from($$('#controls button'))
    .filter(button => button.getAttribute(cubeIdAttr) && button.getAttribute(moveAttr));

  for (let button of buttons) {
    const cubeId = +button.getAttribute(cubeIdAttr);
    const moveName = button.getAttribute(moveAttr);

    button.addEventListener('click', () => {
      makeMove(cubeId, moveName);
    });
  }
}

function suneDemo() {
  makeMove(1, 'R');
  makeMove(1, 'U');
  makeMove(1, 'R'); makeMove(1, 'R'); makeMove(1, 'R');
  makeMove(1, 'U');
  makeMove(1, 'R');
  makeMove(1, 'U'); makeMove(1, 'U');
  makeMove(1, 'R'); makeMove(1, 'R'); makeMove(1, 'R');
}

function makeMove(cubeId, moveName) {
  // TODO Maybe store state outside of DOM
  const getColor = stickerId => stickers[stickerId].getAttribute('fill');
  const setColor = (stickerId, color) => stickers[stickerId].setAttribute('fill', color);

  const moveDef = moveDefinitions[cubeId][moveName];

  for (let cycle of moveDef) {
    let temp = getColor(cycle.at(-1));
    for (let i = cycle.length - 1; i >= 1; i--) {
      setColor(cycle.at(i), getColor(cycle.at(i - 1)));
    }
    setColor(cycle.at(0), temp);
  }
}

const cubesWithBacksAsset = `<svg version="1.1" viewBox="0.0 0.0 960.0 540.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><clipPath id="g13c9836c198_0_0.0"><path d="m0 0l960.0 0l0 540.0l-960.0 0l0 -540.0z" clip-rule="nonzero"/></clipPath><g clip-path="url(#g13c9836c198_0_0.0)"><path fill="none" d="m0 0l960.0 0l0 540.0l-960.0 0z" fill-rule="evenodd"/><path fill="#eeeeee" d="m455.9065 331.11554l-0.087768555 -42.62613l-36.77301 -21.223541l0.08773804 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m455.9065 331.11554l-0.087768555 -42.62613l-36.77301 -21.223541l0.08773804 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m455.9065 283.38995l-0.087768555 -42.626114l-36.77301 -21.223541l0.08773804 42.626114z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m455.9065 283.38995l-0.087768555 -42.626114l-36.77301 -21.223541l0.08773804 42.626114z" fill-rule="evenodd"/><path fill="#eeeeee" d="m455.9065 235.66438l-0.087768555 -42.626114l-36.77301 -21.223557l0.08773804 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m455.9065 235.66438l-0.087768555 -42.626114l-36.77301 -21.223557l0.08773804 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m537.19507 377.36966l-0.087768555 -42.62613l-36.77301 -21.223541l0.08773804 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m537.19507 377.36966l-0.087768555 -42.62613l-36.77301 -21.223541l0.08773804 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m537.19507 329.64407l-0.087768555 -42.62613l-36.77301 -21.223541l0.08773804 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m537.19507 329.64407l-0.087768555 -42.62613l-36.77301 -21.223541l0.08773804 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m537.19507 281.9185l-0.087768555 -42.626114l-36.77301 -21.223541l0.08773804 42.626114z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m537.19507 281.9185l-0.087768555 -42.626114l-36.77301 -21.223541l0.08773804 42.626114z" fill-rule="evenodd"/><path fill="#eeeeee" d="m496.55078 354.2426l-0.087768555 -42.62613l-36.77301 -21.223541l0.08773804 42.6261z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m496.55078 354.2426l-0.087768555 -42.62613l-36.77301 -21.223541l0.08773804 42.6261z" fill-rule="evenodd"/><path fill="#eeeeee" d="m496.55078 306.51703l-0.087768555 -42.62613l-36.77301 -21.223541l0.08773804 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m496.55078 306.51703l-0.087768555 -42.62613l-36.77301 -21.223541l0.08773804 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m496.55078 258.79144l-0.087768555 -42.62613l-36.77301 -21.223541l0.08773804 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m496.55078 258.79144l-0.087768555 -42.62613l-36.77301 -21.223541l0.08773804 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m376.91553 429.568l36.953674 -21.240997l36.767273 21.227905l-36.953674 21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m376.91553 429.568l36.953674 -21.240997l36.767273 21.227905l-36.953674 21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m418.2409 405.7008l36.953705 -21.240967l36.767242 21.227905l-36.953674 21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m418.2409 405.7008l36.953705 -21.240967l36.767242 21.227905l-36.953674 21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m459.5663 381.83365l36.953674 -21.240967l36.767303 21.227875l-36.953705 21.240997z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m459.5663 381.83365l36.953674 -21.240967l36.767303 21.227875l-36.953705 21.240997z" fill-rule="evenodd"/><path fill="#eeeeee" d="m296.21252 382.31183l36.953674 -21.240997l36.767273 21.227905l-36.953705 21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m296.21252 382.31183l36.953674 -21.240997l36.767273 21.227905l-36.953705 21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m337.5379 358.44464l36.953705 -21.240967l36.767242 21.227905l-36.953674 21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m337.5379 358.44464l36.953705 -21.240967l36.767242 21.227905l-36.953674 21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m378.8633 334.57748l36.953674 -21.240967l36.767273 21.227875l-36.953674 21.240997z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m378.8633 334.57748l36.953674 -21.240967l36.767273 21.227875l-36.953674 21.240997z" fill-rule="evenodd"/><path fill="#eeeeee" d="m336.56403 405.9399l36.953674 -21.240997l36.767273 21.227905l-36.953705 21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m336.56403 405.9399l36.953674 -21.240997l36.767273 21.227905l-36.953705 21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m377.8894 382.07272l36.953705 -21.240967l36.767242 21.227905l-36.953674 21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m377.8894 382.07272l36.953705 -21.240967l36.767242 21.227905l-36.953674 21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m419.2148 358.20557l36.953674 -21.240967l36.767273 21.227875l-36.953674 21.240997z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m419.2148 358.20557l36.953674 -21.240967l36.767273 21.227875l-36.953674 21.240997z" fill-rule="evenodd"/><path fill="#eeeeee" d="m293.69925 285.60858l36.865906 -21.392975l-0.012512207 -42.455322l-36.865906 21.39296z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m293.69925 285.60858l36.865906 -21.392975l-0.012512207 -42.455322l-36.865906 21.39296z" fill-rule="evenodd"/><path fill="#eeeeee" d="m335.02463 261.74142l36.865906 -21.392975l-0.012481689 -42.455338l-36.865906 21.392975z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m335.02463 261.74142l36.865906 -21.392975l-0.012481689 -42.455338l-36.865906 21.392975z" fill-rule="evenodd"/><path fill="#eeeeee" d="m376.35004 237.87424l36.865906 -21.39296l-0.012512207 -42.455322l-36.865906 21.39296z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m376.35004 237.87424l36.865906 -21.39296l-0.012512207 -42.455322l-36.865906 21.39296z" fill-rule="evenodd"/><path fill="#eeeeee" d="m294.2997 379.12735l36.865906 -21.392975l-0.012481689 -42.455322l-36.865906 21.392975z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m294.2997 379.12735l36.865906 -21.392975l-0.012481689 -42.455322l-36.865906 21.392975z" fill-rule="evenodd"/><path fill="#eeeeee" d="m335.62512 355.2602l36.865906 -21.392975l-0.012512207 -42.455322l-36.865906 21.392944z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m335.62512 355.2602l36.865906 -21.392975l-0.012512207 -42.455322l-36.865906 21.392944z" fill-rule="evenodd"/><path fill="#eeeeee" d="m376.9505 331.393l36.865906 -21.392975l-0.012481689 -42.455322l-36.865906 21.392975z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m376.9505 331.393l36.865906 -21.392975l-0.012481689 -42.455322l-36.865906 21.392975z" fill-rule="evenodd"/><path fill="#eeeeee" d="m293.99948 332.36795l36.865906 -21.392944l-0.012481689 -42.455353l-36.865906 21.392975z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m293.99948 332.36795l36.865906 -21.392944l-0.012481689 -42.455353l-36.865906 21.392975z" fill-rule="evenodd"/><path fill="#eeeeee" d="m335.3249 308.5008l36.865906 -21.392975l-0.012512207 -42.455322l-36.865906 21.392975z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m335.3249 308.5008l36.865906 -21.392975l-0.012512207 -42.455322l-36.865906 21.392975z" fill-rule="evenodd"/><path fill="#eeeeee" d="m376.65027 284.63364l36.865906 -21.392975l-0.012481689 -42.455338l-36.865906 21.392975z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m376.65027 284.63364l36.865906 -21.392975l-0.012481689 -42.455338l-36.865906 21.392975z" fill-rule="evenodd"/><path fill="#eeeeee" d="m622.2258 331.11554l0.08770752 -42.62613l36.77307 -21.223541l-0.087768555 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m622.2258 331.11554l0.08770752 -42.62613l36.77307 -21.223541l-0.087768555 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m622.2258 283.38995l0.08770752 -42.626114l36.77307 -21.223541l-0.087768555 42.626114z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m622.2258 283.38995l0.08770752 -42.626114l36.77307 -21.223541l-0.087768555 42.626114z" fill-rule="evenodd"/><path fill="#eeeeee" d="m622.2258 235.66438l0.08770752 -42.626114l36.77307 -21.223557l-0.087768555 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m622.2258 235.66438l0.08770752 -42.626114l36.77307 -21.223557l-0.087768555 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m540.93726 377.36966l0.08770752 -42.62613l36.77307 -21.223541l-0.087768555 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m540.93726 377.36966l0.08770752 -42.62613l36.77307 -21.223541l-0.087768555 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m540.93726 329.64407l0.08770752 -42.62613l36.77307 -21.223541l-0.087768555 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m540.93726 329.64407l0.08770752 -42.62613l36.77307 -21.223541l-0.087768555 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m540.93726 281.9185l0.08770752 -42.626114l36.77307 -21.223541l-0.087768555 42.626114z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m540.93726 281.9185l0.08770752 -42.626114l36.77307 -21.223541l-0.087768555 42.626114z" fill-rule="evenodd"/><path fill="#eeeeee" d="m581.58154 354.2426l0.08770752 -42.62613l36.77307 -21.223541l-0.087768555 42.6261z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m581.58154 354.2426l0.08770752 -42.62613l36.77307 -21.223541l-0.087768555 42.6261z" fill-rule="evenodd"/><path fill="#eeeeee" d="m581.58154 306.51703l0.08770752 -42.62613l36.77307 -21.223541l-0.087768555 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m581.58154 306.51703l0.08770752 -42.62613l36.77307 -21.223541l-0.087768555 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m581.58154 258.79144l0.08770752 -42.62613l36.77307 -21.223541l-0.087768555 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m581.58154 258.79144l0.08770752 -42.62613l36.77307 -21.223541l-0.087768555 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m577.6328 119.77273l-36.961487 21.24096l-36.77115 -21.234642l36.961517 -21.24096z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m577.6328 119.77273l-36.961487 21.24096l-36.77115 -21.234642l36.961517 -21.24096z" fill-rule="evenodd"/><path fill="#eeeeee" d="m536.2987 143.6399l-36.961517 21.240967l-36.77118 -21.23465l36.961517 -21.24096z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m536.2987 143.6399l-36.961517 21.240967l-36.77118 -21.23465l36.961517 -21.24096z" fill-rule="evenodd"/><path fill="#eeeeee" d="m494.96454 167.50706l-36.961517 21.240952l-36.77115 -21.234634l36.961487 -21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m494.96454 167.50706l-36.961517 21.240952l-36.77115 -21.234634l36.961487 -21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m658.3443 167.04381l-36.961487 21.240952l-36.77118 -21.234634l36.961548 -21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m658.3443 167.04381l-36.961487 21.240952l-36.77118 -21.234634l36.961548 -21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m617.0102 190.91096l-36.961548 21.240967l-36.77112 -21.234634l36.961487 -21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m617.0102 190.91096l-36.961548 21.240967l-36.77112 -21.234634l36.961487 -21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m575.676 214.77814l-36.961487 21.240967l-36.77118 -21.23465l36.961487 -21.240952z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m575.676 214.77814l-36.961487 21.240967l-36.77118 -21.23465l36.961487 -21.240952z" fill-rule="evenodd"/><path fill="#eeeeee" d="m617.9886 143.40826l-36.961487 21.240967l-36.77118 -21.23465l36.961487 -21.24096z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m617.9886 143.40826l-36.961487 21.240967l-36.77118 -21.23465l36.961487 -21.24096z" fill-rule="evenodd"/><path fill="#eeeeee" d="m576.6544 167.27544l-36.961487 21.240952l-36.77118 -21.234634l36.961487 -21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m576.6544 167.27544l-36.961487 21.240952l-36.77118 -21.234634l36.961487 -21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m535.32025 191.1426l-36.961487 21.240967l-36.77115 -21.234634l36.961487 -21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m535.32025 191.1426l-36.961487 21.240967l-36.77115 -21.234634l36.961487 -21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m72.10472 408.4926l-0.087760925 -42.62613l-36.773014 -21.223541l0.08776474 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m72.10472 408.4926l-0.087760925 -42.62613l-36.773014 -21.223541l0.08776474 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m72.10472 360.76703l-0.087760925 -42.62613l-36.773014 -21.223541l0.08776474 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m72.10472 360.76703l-0.087760925 -42.62613l-36.773014 -21.223541l0.08776474 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m72.10472 313.04144l-0.087760925 -42.6261l-36.773014 -21.223557l0.08776474 42.626114z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m72.10472 313.04144l-0.087760925 -42.6261l-36.773014 -21.223557l0.08776474 42.626114z" fill-rule="evenodd"/><path fill="#eeeeee" d="m153.3933 454.74673l-0.087753296 -42.62613l-36.773018 -21.223541l0.087760925 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m153.3933 454.74673l-0.087753296 -42.62613l-36.773018 -21.223541l0.087760925 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m153.3933 407.02115l-0.087753296 -42.62613l-36.773018 -21.223541l0.087760925 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m153.3933 407.02115l-0.087753296 -42.62613l-36.773018 -21.223541l0.087760925 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m153.3933 359.29556l-0.087753296 -42.6261l-36.773018 -21.223572l0.087760925 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m153.3933 359.29556l-0.087753296 -42.6261l-36.773018 -21.223572l0.087760925 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m112.74901 431.61966l-0.087760925 -42.6261l-36.77301 -21.223541l0.087760925 42.6261z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m112.74901 431.61966l-0.087760925 -42.6261l-36.77301 -21.223541l0.087760925 42.6261z" fill-rule="evenodd"/><path fill="#eeeeee" d="m112.74901 383.8941l-0.087760925 -42.62613l-36.77301 -21.223541l0.087760925 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m112.74901 383.8941l-0.087760925 -42.62613l-36.77301 -21.223541l0.087760925 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m112.74901 336.16852l-0.087760925 -42.62613l-36.77301 -21.223541l0.087760925 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m112.74901 336.16852l-0.087760925 -42.62613l-36.77301 -21.223541l0.087760925 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m238.42404 408.4926l0.087768555 -42.62613l36.77301 -21.223541l-0.087768555 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m238.42404 408.4926l0.087768555 -42.62613l36.77301 -21.223541l-0.087768555 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m238.42404 360.76703l0.087768555 -42.62613l36.77301 -21.223541l-0.087768555 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m238.42404 360.76703l0.087768555 -42.62613l36.77301 -21.223541l-0.087768555 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m238.42404 313.04144l0.087768555 -42.6261l36.77301 -21.223557l-0.087768555 42.626114z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m238.42404 313.04144l0.087768555 -42.6261l36.77301 -21.223557l-0.087768555 42.626114z" fill-rule="evenodd"/><path fill="#eeeeee" d="m157.13547 454.74673l0.087768555 -42.62613l36.77301 -21.223541l-0.087753296 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m157.13547 454.74673l0.087768555 -42.62613l36.77301 -21.223541l-0.087753296 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m157.13547 407.02115l0.087768555 -42.62613l36.77301 -21.223541l-0.087753296 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m157.13547 407.02115l0.087768555 -42.62613l36.77301 -21.223541l-0.087753296 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m157.13547 359.29556l0.087768555 -42.6261l36.77301 -21.223572l-0.087753296 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m157.13547 359.29556l0.087768555 -42.6261l36.77301 -21.223572l-0.087753296 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m197.77975 431.61966l0.087768555 -42.6261l36.77301 -21.223541l-0.087753296 42.6261z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m197.77975 431.61966l0.087768555 -42.6261l36.77301 -21.223541l-0.087753296 42.6261z" fill-rule="evenodd"/><path fill="#eeeeee" d="m197.77975 383.8941l0.087768555 -42.62613l36.77301 -21.223541l-0.087753296 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m197.77975 383.8941l0.087768555 -42.62613l36.77301 -21.223541l-0.087753296 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m197.77975 336.16852l0.087768555 -42.62613l36.77301 -21.223541l-0.087753296 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m197.77975 336.16852l0.087768555 -42.62613l36.77301 -21.223541l-0.087753296 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m193.83107 197.1498l-36.961502 21.240967l-36.771156 -21.23465l36.96151 -21.240952z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m193.83107 197.1498l-36.961502 21.240967l-36.771156 -21.23465l36.96151 -21.240952z" fill-rule="evenodd"/><path fill="#eeeeee" d="m152.49692 221.01697l-36.961502 21.240952l-36.771156 -21.234634l36.961502 -21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m152.49692 221.01697l-36.961502 21.240952l-36.771156 -21.234634l36.961502 -21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m111.16277 244.88412l-36.96151 21.240967l-36.771156 -21.234634l36.96151 -21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m111.16277 244.88412l-36.96151 21.240967l-36.771156 -21.234634l36.96151 -21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m274.54257 244.42087l-36.961517 21.240967l-36.77115 -21.234634l36.961502 -21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m274.54257 244.42087l-36.961517 21.240967l-36.77115 -21.234634l36.961502 -21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m233.20842 268.28802l-36.961517 21.240967l-36.77115 -21.23462l36.961502 -21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m233.20842 268.28802l-36.961517 21.240967l-36.77115 -21.23462l36.961502 -21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m191.87427 292.1552l-36.961502 21.240967l-36.771164 -21.23465l36.961502 -21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m191.87427 292.1552l-36.961502 21.240967l-36.771164 -21.23465l36.961502 -21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m234.18683 220.78534l-36.961517 21.240952l-36.77115 -21.234634l36.961502 -21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m234.18683 220.78534l-36.961517 21.240952l-36.77115 -21.234634l36.961502 -21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m192.85268 244.6525l-36.961517 21.240967l-36.771156 -21.234634l36.96151 -21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m192.85268 244.6525l-36.961517 21.240967l-36.771156 -21.234634l36.96151 -21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m151.51852 268.51968l-36.96151 21.240936l-36.771164 -21.23462l36.96151 -21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m151.51852 268.51968l-36.96151 21.240936l-36.771164 -21.23462l36.96151 -21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m838.1451 258.5511l-0.087768555 -42.626114l-36.77301 -21.223541l0.08770752 42.626114z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m838.1451 258.5511l-0.087768555 -42.626114l-36.77301 -21.223541l0.08770752 42.626114z" fill-rule="evenodd"/><path fill="#eeeeee" d="m838.1451 210.82552l-0.087768555 -42.62613l-36.77301 -21.223541l0.08770752 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m838.1451 210.82552l-0.087768555 -42.62613l-36.77301 -21.223541l0.08770752 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m838.1451 163.09993l-0.087768555 -42.626114l-36.77301 -21.223549l0.08770752 42.62612z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m838.1451 163.09993l-0.087768555 -42.626114l-36.77301 -21.223549l0.08770752 42.62612z" fill-rule="evenodd"/><path fill="#eeeeee" d="m919.43365 304.8052l-0.087768555 -42.62613l-36.77301 -21.223526l0.08770752 42.626114z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m919.43365 304.8052l-0.087768555 -42.62613l-36.77301 -21.223526l0.08770752 42.626114z" fill-rule="evenodd"/><path fill="#eeeeee" d="m919.43365 257.07962l-0.087768555 -42.626114l-36.77301 -21.223541l0.08770752 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m919.43365 257.07962l-0.087768555 -42.626114l-36.77301 -21.223541l0.08770752 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m919.43365 209.35405l-0.087768555 -42.626114l-36.77301 -21.223557l0.08770752 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m919.43365 209.35405l-0.087768555 -42.626114l-36.77301 -21.223557l0.08770752 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m878.78937 281.67816l-0.087768555 -42.62613l-36.77301 -21.223541l0.08770752 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m878.78937 281.67816l-0.087768555 -42.62613l-36.77301 -21.223541l0.08770752 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m878.78937 233.95258l-0.087768555 -42.62613l-36.77301 -21.223541l0.08770752 42.62613z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m878.78937 233.95258l-0.087768555 -42.62613l-36.77301 -21.223541l0.08770752 42.62613z" fill-rule="evenodd"/><path fill="#eeeeee" d="m878.78937 186.22699l-0.087768555 -42.626114l-36.77301 -21.223549l0.08770752 42.62612z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m878.78937 186.22699l-0.087768555 -42.626114l-36.77301 -21.223549l0.08770752 42.62612z" fill-rule="evenodd"/><path fill="#eeeeee" d="m759.1541 357.00354l36.953674 -21.240997l36.767273 21.227905l-36.953674 21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m759.1541 357.00354l36.953674 -21.240997l36.767273 21.227905l-36.953674 21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m800.4795 333.13635l36.953674 -21.240967l36.767273 21.227905l-36.953674 21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m800.4795 333.13635l36.953674 -21.240967l36.767273 21.227905l-36.953674 21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m841.8049 309.2692l36.953674 -21.240967l36.767273 21.227875l-36.953674 21.240997z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m841.8049 309.2692l36.953674 -21.240967l36.767273 21.227875l-36.953674 21.240997z" fill-rule="evenodd"/><path fill="#eeeeee" d="m678.4511 309.74738l36.953674 -21.240997l36.767273 21.227905l-36.953735 21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m678.4511 309.74738l36.953674 -21.240997l36.767273 21.227905l-36.953735 21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m719.7765 285.8802l36.953674 -21.240967l36.767273 21.227905l-36.953674 21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m719.7765 285.8802l36.953674 -21.240967l36.767273 21.227905l-36.953674 21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m761.10187 262.01303l36.953674 -21.240967l36.767273 21.227875l-36.953674 21.240997z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m761.10187 262.01303l36.953674 -21.240967l36.767273 21.227875l-36.953674 21.240997z" fill-rule="evenodd"/><path fill="#eeeeee" d="m718.8026 333.37546l36.953674 -21.240997l36.767273 21.227905l-36.953735 21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m718.8026 333.37546l36.953674 -21.240997l36.767273 21.227905l-36.953735 21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m760.128 309.50827l36.953674 -21.240967l36.767273 21.227905l-36.953674 21.240967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m760.128 309.50827l36.953674 -21.240967l36.767273 21.227905l-36.953674 21.240967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m801.45337 285.6411l36.953674 -21.240967l36.767273 21.227875l-36.953674 21.240997z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m801.45337 285.6411l36.953674 -21.240967l36.767273 21.227875l-36.953674 21.240997z" fill-rule="evenodd"/><path fill="#eeeeee" d="m675.9378 213.04413l36.865906 -21.39296l-0.012512207 -42.455338l-36.865906 21.39296z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m675.9378 213.04413l36.865906 -21.39296l-0.012512207 -42.455338l-36.865906 21.39296z" fill-rule="evenodd"/><path fill="#eeeeee" d="m717.2632 189.17696l36.865906 -21.39296l-0.012451172 -42.45533l-36.865906 21.392967z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m717.2632 189.17696l36.865906 -21.39296l-0.012451172 -42.45533l-36.865906 21.392967z" fill-rule="evenodd"/><path fill="#eeeeee" d="m758.5886 165.3098l36.865906 -21.392975l-0.012512207 -42.455322l-36.865906 21.39296z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m758.5886 165.3098l36.865906 -21.392975l-0.012512207 -42.455322l-36.865906 21.39296z" fill-rule="evenodd"/><path fill="#eeeeee" d="m676.53827 306.5629l36.865906 -21.392975l-0.012451172 -42.455322l-36.865906 21.392975z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m676.53827 306.5629l36.865906 -21.392975l-0.012451172 -42.455322l-36.865906 21.392975z" fill-rule="evenodd"/><path fill="#eeeeee" d="m717.8637 282.69574l36.865906 -21.392975l-0.012512207 -42.455338l-36.865906 21.392975z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m717.8637 282.69574l36.865906 -21.392975l-0.012512207 -42.455338l-36.865906 21.392975z" fill-rule="evenodd"/><path fill="#eeeeee" d="m759.1891 258.82855l36.865906 -21.39296l-0.012512207 -42.455322l-36.865906 21.39296z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m759.1891 258.82855l36.865906 -21.39296l-0.012512207 -42.455322l-36.865906 21.39296z" fill-rule="evenodd"/><path fill="#eeeeee" d="m676.23804 259.8035l36.865906 -21.392944l-0.012451172 -42.455338l-36.865906 21.39296z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m676.23804 259.8035l36.865906 -21.392944l-0.012451172 -42.455338l-36.865906 21.39296z" fill-rule="evenodd"/><path fill="#eeeeee" d="m717.5635 235.93634l36.865906 -21.39296l-0.012512207 -42.455338l-36.865906 21.392975z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m717.5635 235.93634l36.865906 -21.39296l-0.012512207 -42.455338l-36.865906 21.392975z" fill-rule="evenodd"/><path fill="#eeeeee" d="m758.88885 212.06918l36.865906 -21.392975l-0.012512207 -42.455322l-36.865906 21.39296z" fill-rule="evenodd"/><path stroke="#595959" stroke-width="2.0" stroke-linejoin="round" stroke-linecap="butt" d="m758.88885 212.06918l36.865906 -21.392975l-0.012512207 -42.455322l-36.865906 21.39296z" fill-rule="evenodd"/></g></svg>`;

main();
