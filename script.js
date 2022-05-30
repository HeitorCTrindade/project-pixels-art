function paletteColors() {
  let palletDivs = document.getElementsByClassName('color');
  palletDivs[0].style.backgroundColor = 'rgb(0,0,0)';
  palletDivs[0].classList.add('selected');
  for (let i = 1; i < palletDivs.length; i += 1) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    palletDivs[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}

function createSquare() {
  let pixelsSquare = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i += 1) {
    let lineBreak = document.createElement('br');
    pixelsSquare.appendChild(lineBreak);
    for (let y = 0; y < 5; y += 1) {
      let pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelsSquare.appendChild(pixel);
    }
  }
}

paletteColors();
createSquare();

function selectionColor() {
  let myColor = document.querySelectorAll('.color');
  for (let i = 0; i < myColor.length; i += 1) {
    myColor[i].addEventListener('click', function () {
      myColor[i].classList.add('selected');
      for (let y = 0; y < myColor.length; y += 1) {
        if (y != i) {
          myColor[y].classList.remove('selected');
        }
      }
    });
  }
}

function paintPixel() {
  let pixels = document.querySelectorAll('.pixel');
  let color = document.getElementsByClassName('selected');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', function () {
      pixels[i].style.backgroundColor = color[0].style.backgroundColor;
    });
  }
}
selectionColor();
paintPixel();
