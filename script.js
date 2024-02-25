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

// Function to change the color of the text
function changeTextColor(color, elementID) {
    var textElement = document.getElementById(elementID);
    textElement.style.transition = 'color 0.3s ease-in-out';
    textElement.style.color = color;
}

document.getElementById('window-1').addEventListener('click', function() {
    changeTextColor('black', 'window-1-text');
});

document.getElementById('window-1').addEventListener('mouseout', function() {
    changeTextColor('', 'window-1-text');
});

document.getElementById('auntie').addEventListener('click', function() {
    changeTextColor('black', 'auntie-h2');
    changeTextColor('black', 'auntie-text');
});

document.getElementById('auntie').addEventListener('mouseout', function() {
    changeTextColor('', 'auntie-h2');
    changeTextColor('', 'auntie-text');
});

document.getElementById('couple').addEventListener('click', function() {
    changeTextColor('black', 'couple-h2');
    changeTextColor('black', 'couple-text');
});

document.getElementById('couple').addEventListener('mouseout', function() {
    changeTextColor('', 'couple-h2');
    changeTextColor('', 'couple-text');
});

document.getElementById('keychain').addEventListener('click', function() {
    changeTextColor('black', 'keychain-h2');
    changeTextColor('black', 'keychain-text');
});

document.getElementById('keychain').addEventListener('mouseout', function() {
    changeTextColor('', 'keychain-h2');
    changeTextColor('', 'keychain-text');
});

document.getElementById('doll-kids').addEventListener('click', function() {
    changeTextColor('black', 'doll-kids-h2');
    changeTextColor('black', 'doll-kids-text');
});

document.getElementById('doll-kids').addEventListener('mouseout', function() {
    changeTextColor('', 'doll-kids-h2');
    changeTextColor('', 'doll-kids-text');
});


document.getElementById('bag-1').addEventListener('click', function() {
    this.classList.remove('clicked');
    // Add the 'clicked' class to trigger the spin animation
    void this.offsetWidth; // Trigger reflow to restart the animation
    this.classList.add('clicked');
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 1000);
});

const keychain = document.getElementById('keychain');

keychain.addEventListener('mouseenter', function() {
    this.style.animationPlayState = 'paused'; // Pause the animation on hover
    this.style.trasnform = 'scale(1.2)';
});

keychain.addEventListener('mouseleave', function() {
    this.style.animationPlayState = 'running'; // Resume the animation on mouse leave
    this.style.trasnform = 'scale(1)';
});


const imageList = [
    './Assets/People/Subway_DollKid_1.png',
    './Assets/People/Subway_DollKid_2.png',
    './Assets/People/Subway_DollKid_3.png',
    './Assets/People/Subway_DollKid_4.png'
];

const dollKidsImg = document.getElementById('doll-kids');
dollKidsImg.src = imageList[0];
let index = 1;
function changeImage() {
    dollKidsImg.src = imageList[index];
    index = (index + 1) % imageList.length;
}

setInterval(changeImage, 1000);