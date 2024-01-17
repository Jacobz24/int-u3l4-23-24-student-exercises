let header = document.querySelector("h1");
let button = document.querySelector("button");
let img = document.querySelector("img");

// 1. Press the button on the webpage to change it up! Take notice of what happens.
// - What do you think innerHTML does? allows to change text/content
// - What do you think .src does? allows to change images


// 2. Try the following:
// - Make it so that the header says your name when the button is clicked.
// - Change the src of the image to something random.
button.addEventListener("click", function() {
    header.innerHTML = "Jacob Zuniga";
    img.src = "https://media1.tenor.com/m/3aRn8KE-L_QAAAAC/shia-labeouf-christian.gif";
});


