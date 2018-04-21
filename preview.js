const colors = pafiumeColors.all();

const container = document.getElementsByClassName('container')[0];

colors.forEach(function(color) {
  const hues = color.hues;
  const colorContainer = document.createElement('ul');
  colorContainer.className = 'color';
  container.appendChild(colorContainer);
  const colorName = document.createElement('li');
  colorName.className = 'hue name';
  colorName.innerHTML = color.name;
  colorContainer.appendChild(colorName);
  hues.forEach(function(hue) {
    const hueContainer = document.createElement('li');
    hueContainer.className = 'hue';
    hueContainer.innerHTML = hue;
    hueContainer.style = `background: ${hue};`
    colorContainer.appendChild(hueContainer);
  });
})