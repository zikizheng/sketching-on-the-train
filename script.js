// script.js
window.onload = function() {
    // Calculate font size in em units
    var vwWidth = window.innerWidth;
    var fontSizeVw = vwWidth / 1750;
    var defaultFontSize = parseFloat(getComputedStyle(document.body).fontSize); // Get default font size in px
    var fontSizeEm = fontSizeVw * defaultFontSize / 16; // Convert vw to em
    document.body.style.fontSize = fontSizeEm + "em"; // Apply font size in em units
};

//not working yet
function rotateIfPortrait() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
  
    if (screenHeight > screenWidth) {
      document.body.classList.add("rotate-landscape");
    } else {
      document.body.classList.remove("rotate-landscape");
    }
  }
  
  // Initial check
  rotateIfPortrait();
  
  // Check on window resize
  window.addEventListener("resize", rotateIfPortrait);
  
  

const container = document.querySelector('.container');

container.addEventListener('wheel', (event) => {
  event.preventDefault();

  const deltaX = event.deltaX;
  const deltaY = event.deltaY;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    // Horizontal scrolling
    container.scrollLeft += deltaX;
  } else {
    // Vertical scrolling
    container.scrollLeft += deltaY;
  }
});
