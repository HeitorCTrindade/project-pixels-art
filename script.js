function paletteColors() {
  let palletDivs = document.getElementsByClassName('color');
  palletDivs[0].style.backgroundColor = 'rgb(0,0,0)';
  palletDivs[0].classList.add('selected');
  for (let i = 1; i < palletDivs.length; i += 1) {
    let r = Math.floor(Math.random() * 254);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    palletDivs[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}

function createSquare(sizeSquare) {
  let pixelsSquare = document.getElementById('pixel-board');
  for (let i = 0; i < sizeSquare; i += 1) {
    let linePixel = document.createElement('div');
    for (let y = 0; y < sizeSquare; y += 1) {
      let pixel = document.createElement('div');
      pixel.classList.add('pixel');
      linePixel.appendChild(pixel);
      pixelsSquare.appendChild(linePixel);
    }
  }
}

paletteColors();
createSquare(5);

function removeSquare() {
  let pixelsSquare = document.getElementById('pixel-board');
  let sizeSquare = pixelsSquare.children.length;
  for (let i = 0; i < sizeSquare; i += 1) {
    pixelsSquare.removeChild(pixelsSquare.children[0]);
  }
}

function limitSize() {
  let sizeSquare = document.getElementById ('board-size');
  if (sizeSquare.value < 5) {
    return 5;
  }
  if(sizeSquare.value > 50) {
    return 50;
  }
  return sizeSquare.value;
}

function definesSizeSquare() {
  let button = document.getElementById('generate-board');
  let sizeSquare = document.getElementById ('board-size');
  button.addEventListener('click',function () {
    if (sizeSquare.value === '') {
      alert('Board inválido!');
    } else {
      removeSquare();
      createSquare(limitSize());
      selectionColor();
      paintPixel();
      sizeSquare.value = '';
    }
  });
}



definesSizeSquare();

function selectionColor() {
  let myColor = document.querySelectorAll('.color');
  for (let i = 0; i < myColor.length; i += 1) {
    myColor[i].addEventListener('click', function () {
      myColor[i].classList.add('selected');
      for (let y = 0; y < myColor.length; y += 1) {
        if (y !== i) {
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

document.getElementById('clear-board').addEventListener('click', function () {
  let pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'rgb(255,255,255)';
  }
});
