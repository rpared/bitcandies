// let sliderImg = document.querySelector("#slider-image");
// let images = [
//   "images/BackgroundPicA.png",
//   "images/BackgroundPicB.png",
//   "images/BackgroundPicC.png",
// ];
// let currentIndex = 0;

// let slider = () => {
//   // Fade out the image
//   sliderImg.classList.add("fade-out");

//   // Wait for the fade-out transition to complete before changing the image
//   setTimeout(() => {
//     currentIndex = (currentIndex + 1) % images.length;
//     sliderImg.src = images[currentIndex];

//     // Remove the fade-out class to fade the image back in
//     sliderImg.classList.remove("fade-out");
//   }, 1000); // This should match the CSS transition duration (1s)
// };

// setInterval(slider, 4000);

let sliderImg = document.querySelector("#slider-image");
console.log(sliderImg);
let slider = () => {
  //   console.log("function invoked" + sliderImg.src);
  // Extract the filename from the full URL
  let currentSrc = sliderImg.src.split("/").pop();

  if (currentSrc === "BackgroundPicA.png") {
    sliderImg.src = "images/BackgroundPicB.png";
  } else if (currentSrc === "BackgroundPicB.png") {
    sliderImg.src = "images/BackgroundPicC.png";
  } else if (currentSrc === "BackgroundPicC.png") {
    sliderImg.src = "images/BackgroundPicA.png";
  }

  // Re-add the fade-in class to trigger the transition
  setTimeout(() => {
    sliderImg.classList.add("fade-in");
  }, 1000); // Timeout to ensure the class is re-applied
};

// Initialize with fade-in
sliderImg.classList.add("fade-in");

setInterval(slider, 4000);
