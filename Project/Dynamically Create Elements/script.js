let button = document.createElement("button");
let head = document.createElement("h1");
let div = document.createElement("div");
let img = document.createElement("img");
let heart = document.createElement("span"); // Create a span element for the heart sticker

button.setAttribute("class", "bttn");
button.innerText = "Show My Love";

document.querySelector("body").append(button, div);
document.querySelector("div").append(img, head);

document.querySelector("button").addEventListener("click", wish);

function wish() {
  document.body.style.background = "lightblue";

  setTimeout(() => {
    div.style.opacity = 1; // Show the image with a transition effect after 0.5 seconds
  }, 500);

  // Add container class to the div element
  div.setAttribute("class", "container");

  // Set image attributes
  img.setAttribute("src", "./soumyashukla.jpg");
  img.setAttribute("alt", "soumyashukla");
  img.setAttribute("class", "image");

  // Set header attributes
  head.setAttribute("class", "h1");
  head.innerText = "I love You My Love ❤️";

  // Remove the button after click
  button.remove();
}
