const body = document.getElementsByClassName('main-content')[0];

document.getElementsByClassName('generate_mosaic')[0].addEventListener('click', (event) => {
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }  
  let pattern = [];
  let chosenPatternSelect = document.getElementById('choose-a-pattern');
  let chosenPattern = chosenPatternSelect.options[chosenPatternSelect.selectedIndex].value;
  if (chosenPattern === 'waves') {
    pattern = [
    4, 4, 4, 4, 4, 4, 4, 8, 9, 7,
    4, 4, 4, 4, 4, 4, 8, 8, 9, 7,
    4, 4, 4, 4, 8, 8, 8, 9, 7, 7, 
    4, 4, 8, 8, 8, 8, 8, 9, 9, 7, 
    4, 8, 8, 9, 9, 9, 9, 9, 7, 9, 
    7, 8, 9, 9, 7, 7, 7, 10, 7, 9, 
    7, 9, 9, 7, 7, 9, 7, 7, 9, 9, 
    7, 9, 7, 7, 9, 10, 9, 9, 9, 10, 
    7, 7, 9, 9, 9, 10, 10, 10, 10, 10, 
    7, 9, 10, 10, 10, 10, 10, 10, 10, 10];
  } else if (chosenPattern === 'forest') {
    pattern = [
    8, 8, 8, 8, 8, 5, 8, 6, 5, 15,
    8, 8, 6, 8, 5, 6, 6, 5, 5, 14,
    8, 6, 6, 5, 6, 5, 5, 5, 14, 15, 
    5, 6, 5, 6, 5, 15, 6, 6, 14, 14, 
    6, 5, 15, 5, 5, 15, 6, 6, 15, 14, 
    6, 15, 14, 5, 15, 16, 6, 14, 15, 14, 
    14, 15, 14, 15, 14, 14, 15, 15, 15, 15, 
    15, 14, 15, 14, 15, 15, 14, 15, 14, 15, 
    15, 14, 15, 14, 15, 15, 14, 15, 14, 15, 
    14, 15, 15, 15, 14, 15, 15, 15, 15, 14];
  } else if (chosenPattern === 'sunset_tree') {
    pattern = [
    8, 8, 8, 5, 10, 10, 10, 8, 8, 8,
    8, 8, 6, 6, 5, 12, 12, 10, 10, 10,
    8, 10, 5, 6, 5, 12, 12, 12, 12, 10,
    10, 5, 6, 5, 6, 6, 1, 1, 12, 12,
    10, 6, 5, 6, 5, 5, 1, 1, 1, 12,
    5, 6, 5, 5, 6, 6, 5, 3, 1, 1,
    6, 5, 6, 5, 6, 5, 6, 5, 3, 1,
    12, 12, 1, 14, 3, 3, 4, 4, 3, 3,
    12, 1, 1, 14, 3, 4, 4, 4, 4, 3,
    15, 15, 15, 15, 15, 15, 15, 15, 15, 15];
  } else if (chosenPattern === 'mirror') {
    pattern = [
    12, 16, 16, 16, 16, 16, 16, 16, 16, 12,
    12, 13, 16, 16, 16, 16, 16, 16, 13, 12,
    7, 12, 13, 16, 16, 16, 16, 13, 12, 7,
    7, 10, 12, 13, 16, 16, 13, 12, 10, 7,
    10, 7, 10, 13, 7, 7, 13, 10, 7, 10,
    10, 7, 10, 12, 7, 7, 12, 10, 7, 10,
    7, 10, 13, 12, 16, 16, 12, 13, 10, 7,
    7, 13, 12, 16, 16, 16, 16, 12, 13, 7,
    13, 12, 16, 16, 16, 16, 16, 16, 12, 13,
    13, 16, 16, 16, 16, 16, 16, 16, 16, 13];
  }
  for (i = 0; i < 100; i += 1) {
    let newDiv = document.createElement('DIV');
    newDiv.className = 'color-block';
    body.appendChild(newDiv);
    let newP = document.createElement('P');
    newDiv.className += ' ' + pattern[i];
    let pText = document.createTextNode(pattern[i].toString());
    newP.appendChild(pText);
    newP.className = pattern[i];
    newDiv.appendChild(newP);
  };
});  

document.getElementsByClassName('main-content')[0].addEventListener('click', (event) => {
  let chosenColorSelect = document.getElementById('choose-a-color');
  let chosenColor = chosenColorSelect.options[chosenColorSelect.selectedIndex].value;
  event.target.style.backgroundColor = chosenColor.toString();
});
