function doFormat() {
  // 1- Create a new P
  let newP = document.createElement("p");
  document.body.appendChild(newP);

  // 2- Put the words, using spans
  let text = document.getElementById("sourceText").textContent;
  let words = text.split(" ");
  console.log(words);
  for (index in words) {
    word = words[index];
    let span = document.createElement("span");
    span.innerText = " " + word;
    newP.appendChild(span);

    let numberChar = word.length;

    if (numberChar >= 5) {
      span.style.background = "red";
    }

    if (word.includes("w") && word.includes("d")) {
      span.style.textDecoration = "underline";
    }
    if (words.length - index <= 5){
      span.style.fontWeight = "bold";
    }
  }
}

let format = document.getElementById("format");
format.addEventListener("click", doFormat);
