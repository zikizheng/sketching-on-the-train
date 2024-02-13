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
