const palletDivs = document.getElementsByClassName('color');
const pixelsSquare = document.getElementById('pixel-board');
const boardSize = document.getElementById('board-size');
const button = document.getElementById('generate-board');
const myColor = document.querySelectorAll('.color');

function paletteColors() {
  palletDivs[0].style.backgroundColor = 'rgb(0,0,0)';
  palletDivs[0].classList.add('selected');
  for (let i = 1; i < palletDivs.length; i += 1) {
    const r = Math.floor(Math.random() * 254);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    palletDivs[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}

function createSquare(sizeSquare) {
  for (let i = 0; i < sizeSquare; i += 1) {
    const linePixel = document.createElement('div');
    for (let y = 0; y < sizeSquare; y += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      linePixel.appendChild(pixel);
      pixelsSquare.appendChild(linePixel);
    }
  }
}

function removeSquare() {
  const sizeSquare = pixelsSquare.children.length;
  for (let i = 0; i < sizeSquare; i += 1) {
    pixelsSquare.removeChild(pixelsSquare.children[0]);
  }
}

function limitSize() {
  if (boardSize.value < 5) {
    return 5;
  }
  if (boardSize.value > 50) {
    return 50;
  }
  return boardSize.value;
}

function selectionColor() {
  myColor.forEach((colorSquareSelected) => {
    colorSquareSelected.addEventListener('click', () => {
      colorSquareSelected.classList.add('selected');
      myColor.forEach((colorSquare) => {
        if (colorSquareSelected !== colorSquare) {
          colorSquare.classList.remove('selected');
        }
      });
    });
  });
}

function paintPixel() {
  const pixels = document.querySelectorAll('.pixel');
  const color = document.getElementsByClassName('selected');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      pixels[i].style.backgroundColor = color[0].style.backgroundColor;
    });
  }
}

function definesSizeSquare() {
  button.addEventListener('click', () => {
    if (boardSize.value === '') {
      alert('Board inválido!');
    } else {
      removeSquare();
      createSquare(limitSize());
      selectionColor();
      paintPixel();
      boardSize.value = '';
    }
  });
}

document.getElementById('clear-board').addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'rgb(255,255,255)';
  }
});

paletteColors();
createSquare(5);
definesSizeSquare();
selectionColor();
paintPixel();
