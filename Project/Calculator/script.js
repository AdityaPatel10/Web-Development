// Reference to the display element
const display = document.querySelector("#display");

// Reference to all the key elements
const keys = document.querySelectorAll("#keyboard > div");

// Variable to store the current input and result
let bag = "";

// Add click event listeners to each key
keys.forEach(function (ele) {
  ele.addEventListener("click", clicked);
});

// Function to handle click events on keys
function clicked(event) {
  // Get the text of the clicked key
  let targetKey = event.target.innerText;

  // Handle clear operation (case insensitive)
  if (targetKey.toUpperCase() === "C") {
    bag = "";
    display.innerText = bag;
  }
  // Handle the evaluation of the expression
  else if (targetKey === "=") {
    evaluateExpression();
  }
  // Append the clicked key's text to the bag and update the display
  else {
    bag += targetKey;
    display.innerText = bag;
  }
}

// Function to handle keyboard input
document.addEventListener("keydown", function (event) {
  const key = event.key;

  // Allow numeric keys, operators, and clear/evaluate keys
  if (
    (key >= "0" && key <= "9") ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key.toUpperCase() === "C" ||
    key === "=" ||
    key === "Enter"
  ) {
    if (key.toUpperCase() === "C") {
      bag = "";
      display.innerText = bag;
    } else if (key === "=" || key === "Enter") {
      evaluateExpression();
    } else {
      bag += key;
      display.innerText = bag;
    }
  }
});

// Function to evaluate the expression
function evaluateExpression() {
  try {
    bag = eval(bag).toString();
    display.innerText = bag;
  } catch (error) {
    display.innerText = "Error";
    bag = "";
  }
}
