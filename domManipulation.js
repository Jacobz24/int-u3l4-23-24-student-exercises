// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//  - The `name` header.
contentButton.addEventListener("click", function() {
  myName.innerHTML = "Jacob Zuniga";
  myHobby.innerHTML = "Play Soccer";
  myLocation.innerHTML = "Brooklyn";
})
//-- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {








});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.

image1Button.addEventListener("mouseover", function() {
  image.src = "https://frontofficesports.com/wp-content/uploads/2023/10/USATSI_19520555_168393969_lowres-scaled-e1697215176168.jpg?quality=100";
})




// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.

image2Button.addEventListener("mouseover", function() {
  image.src = "https://www.orthodoxhawaii.org/display_image.php?ximgid=paragraph_125_1&ext=jpg&relativeimage=images/sobor.jpg&archive=0&final_h=120&final_w=160&percent=100&m=1297788341";
})

// BONUS
// 7. Try using different event types for your buttons.
