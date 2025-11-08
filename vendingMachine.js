// Jake Zamarripa 11/7/24

let snackCount = prompt("How many snacks do you want?");

if (snackCount === null) {

  console.log("No snacks requested. Exiting.");

} else {
let totalSnack = 0
for (let i = 1; i <= snackCount; i++) {

  let snack = prompt("Enter snack #" + i + " name:");
  
  if (snack === null) {

  console.log("Snack selection canceled. Exiting.");
  console.log(`You got a total of ${totalSnack} snacks.`);
  break;
}
console.log("Snack #" + i + ": " + snack + " given to customer");
  totalSnack++
  if (i % 3 === 0) {
    totalSnack++
    console.log(" You got a bonus snack!");
}
}
}