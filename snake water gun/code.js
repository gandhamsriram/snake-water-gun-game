function playGame(you) {
  const options = ["s", "w", "g"];
  const comp = options[Math.floor(Math.random() * 3)];

  const result = gameWin(comp, you);

  document.getElementById(
    "comp-choice"
  ).innerText = `Computer chose: ${getFullForm(comp)}`;
  document.getElementById("your-choice").innerText = `You chose: ${getFullForm(
    you
  )}`;
  document.getElementById("result-text").innerText = result;
}

function getFullForm(letter) {
  if (letter === "s") return "Snake";
  if (letter === "w") return "Water";
  if (letter === "g") return "Gun";
}

function gameWin(comp, you) {
  if (comp === you) return "It's a Tie!";
  if (comp === "s") {
    return you === "w" ? "You Lose!" : "You Win!";
  } else if (comp === "w") {
    return you === "g" ? "You Lose!" : "You Win!";
  } else if (comp === "g") {
    return you === "s" ? "You Lose!" : "You Win!";
  }
}
