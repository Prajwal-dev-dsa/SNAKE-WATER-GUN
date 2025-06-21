console.log("Welcome To Snake, Water & Gun Game");
let totalCnt = Number.parseInt(
  prompt("Select Number Of Rounds For The Game To Be Played")
);
if (isNaN(totalCnt) || totalCnt <= 0) {
  console.log("Invalid input! Please enter a valid number of rounds.");
} else {
  console.log(
    "Kindly Enter The Choices From Snake, Water & Gun\nThe Computer Will Guess Its Choice From Its Side!"
  );
  let playerScore = 0,
    cmpScore = 0;
  for (let i = 0; i < totalCnt; i++) {
    let num = Number.parseInt(
      prompt("Select Your Choice!\n1 For Snake, 2 For Water, 3 For Gun")
    );
    if (isNaN(num) || num < 1 || num > 3) {
      console.log("Invalid choice! Please enter 1, 2, or 3.");
      i--; // Do not count this round
      continue;
    }
    let arr = ["Snake", "Water", "Gun"];
    let player = arr[num - 1];
    let cmpNum = Math.floor(Math.random() * 3);
    let cmp = arr[cmpNum];
    if (
      (player === "Snake" && cmp === "Water") ||
      (player === "Gun" && cmp === "Snake") ||
      (player === "Water" && cmp === "Gun")
    ) {
      console.log("Great! You Won Against Computer");
      playerScore++;
    } else if (player === cmp) {
      console.log("It's a Tie! Both chose the same.");
    } else {
      console.log("Bad Choice! You Lost Against Computer");
      cmpScore++;
    }
    console.log(
      `Current Score After ${
        i + 1
      } Rounds\nYou = ${playerScore} Computer = ${cmpScore}`
    );
  }
  if (playerScore > cmpScore) {
    console.log(
      `Congratulations Champ You Defeated Computer By ${playerScore}-${cmpScore}`
    );
  } else if (cmpScore > playerScore) {
    console.log(
      `Hard Luck! You Lost From Computer By ${playerScore}-${cmpScore}`
    );
  } else {
    console.log(`Its a Draw ${playerScore}-${cmpScore}`);
  }
}
