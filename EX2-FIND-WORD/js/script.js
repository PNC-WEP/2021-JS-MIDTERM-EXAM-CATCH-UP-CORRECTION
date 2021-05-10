function findWord(event) {
  // Code your function here
  const search = document.querySelector('#find').value;
  const text = document.querySelector('p').textContent;
  let words = text.split(" ");
  const p = document.querySelector('p');
  if (p !== null) {
    p.remove();
  }
  
  const newP = document.createElement('p');
  let isFound = false;
  let wordCounter = 0;
  for (let word of words) {
    if (search.toLowerCase() === word.toLowerCase() && search !== "") {

      const hightLight = document.createElement('mark');
      hightLight.textContent = word + " ";
      newP.appendChild(hightLight);
      isFound = true;
      wordCounter++;
    } else {
      const span = document.createElement('span');
      span.textContent = word + " ";
      newP.appendChild(span);
    }

  }

  if (!isFound) {
    alert("No word match!");
  }else {
    alert (wordCounter + " matching!")
  }
  document.body.appendChild(newP);
}

const btnFind = document.querySelector('button');
btnFind.addEventListener('click', findWord);